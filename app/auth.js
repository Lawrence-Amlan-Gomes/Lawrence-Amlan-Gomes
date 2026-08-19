// app/auth.js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const ADMIN_EMAIL = "amlangomes@gmail.com";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  trustHost : true,
  secret: process.env.NEXTAUTH_SECRET, // Fallback secret
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async signIn({ user }) {
      return user?.email === ADMIN_EMAIL;
    },
  },
};

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);