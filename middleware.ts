import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

// import { withAuth } from 'next-auth/middleware';

// // More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
// export default withAuth({
//   callbacks: {
//     authorized({ req, token }) {
//       // `/admin` requires admin role
//       if (req.nextUrl.pathname === '/admin') {
//         return token?.userRole === 'admin';
//       }
//       // `/me` only requires the user to be logged in
//       return !!token;
//     },
//   },
// });

// export const config = { matcher: ['/admin', '/me'] };
