import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { NextAuthConfig } from 'next-auth';

import { getJadeAdminClient } from '@lib/client';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string | undefined;
      name?: string | null | undefined;
      phone: string | undefined;
      email?: string | null | undefined;
      autoPassword: boolean | null | undefined;
      role: string | null | undefined;
      imageUrl: string | null | undefined;
      status: string | null | undefined;
      token: string | null | undefined;
    };
  }
}

declare module 'next-auth' {
  interface User {
    id?: string | undefined;
    name?: string | null | undefined;
    phone: string | undefined;
    email?: string | null | undefined;
    autoPassword: boolean | null | undefined;
    role: string | null | undefined;
    imageUrl: string | null | undefined;
    status: string | null | undefined;
    token: string | null | undefined;
  }
}

export const authConfig = {
  secret: process.env.AUTH_SECRET,
  debug: false,
  trustHost: true,
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          //console.log('AUTH.TS CREDS: ', email, password);

          const client = await getJadeAdminClient();
          const { data, meta, token } = await client.auth.login({
            email,
            password,
          });
          //console.log('auth.ts user: ', data);
          //console.log('auth token: ', token);
          //console.log('auth meta: ', meta);
          if (!token || !data) return null;
          const user = data;
          //return user;
          return {
            id: user.id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            autoPassword: user.autoPassword,
            role: user.role,
            imageUrl: user.imageUrl,
            status: user.status,
            token: token,
          };
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }: { auth: any; request: any }) {
      //console.log('authorized: ');
      //console.log("authorized callback user: ", auth?.user);
      return !!auth?.user;
    },
    async jwt({ token, user }: { token: any; user: any }) {
      // console.log("jwt callback user: ", user);
      // console.log("jwt callback token: ", token);
      return { ...token, ...user };
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      // console.log("session callback session: ", session);
      // console.log("session callback user: ", user);
      // console.log("session callback token: ", token);

      session.user = token;
      //session.token = token;
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
});
