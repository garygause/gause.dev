import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@auth/mongodb-adapter';

import { z } from 'zod';

import { getUserByEmail } from '@/app/lib/mongodb';
import { authConfig } from './auth.config';
import { verifyPassword } from './app/lib/password';
//import clientPromise from '@/app/lib/mdb';

// import { Session } from 'next-auth';
// import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    id: string;
    role: string;
  }

  interface User {
    id?: string | undefined;
    role: string;
  }
}

//  declare module 'next-auth/jwt' {
//    interface JWT {
//      id: string;
//      role: number;
//    }
//  }

// declare module 'next-auth' {
//   interface User {
//     // Add your additional properties here:
//     name?: string | null;
//     role?: string | null;
//   }
// }

// declare module '@auth/core/adapters' {
//   interface AdapterUser {
//     // Add your additional properties here:
//     name: string | null;
//     role: string | null;
//   }
// }

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  // session: {
  //   strategy: 'jwt',
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  // },
  //adapter: MongoDBAdapter(clientPromise),
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUserByEmail(email);
          console.log('auth.ts user: ');
          console.log(user);
          if (!user) return null;
          const passwordsMatch = await verifyPassword(password, user.password);
          if (passwordsMatch)
            return { email: user.email, name: user.name, role: user.role };
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      const userRecord = await getUserByEmail(token.email);
      console.log('jwt callback:');
      console.log(userRecord);
      token.role = userRecord.role;
      console.log(token);
      return token;
    },
    async session({ session }) {
      if (!session.user.role) {
        const userRecord = await getUserByEmail(session.user.email);
        console.log('session callback:');
        console.log(userRecord);
        session.user.role = userRecord.role;
        console.log(session);
      }
      return session;
    },
  },
});
