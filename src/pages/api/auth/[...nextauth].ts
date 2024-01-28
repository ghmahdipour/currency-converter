import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
// import loginServices  from "../../../services/login.services"

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                country: {},
                city: {},
                username: {},
                password: {}
            },
            async authorize(credentials: any, req) {
                const res = await fetch('https://65b098f1d16d31d11bdcd550.mockapi.io/api/v1/login', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials)
                })
                const user = await res.json()
                if(res.ok && user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
    callbacks: {
        async session({ session, token }: any) {
          session.user = token.user;
          return session;
        },
        async jwt({ token, user }) {
          if (user) {
            token.user = user;
          }
          return token;
        },
    },

})

