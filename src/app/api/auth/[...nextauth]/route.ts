import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/users";
import connectToDatabase from "@/lib/mongodb";
import bcrypt from "bcryptjs";

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password:{},
            },
            async authorize(credentials) {
                try {
                    await connectToDatabase();
                    const user = await User.findOne({ email: credentials?.email });
                    if (!user) {
                        throw new Error("")
                    }
                    const isValidPassword = await bcrypt.compare(
                        credentials?.password ?? "", user.password as string
                    ); 
                    if (!isValidPassword) {
                        throw new Error ("")
                    }
                    return user;
                }
                catch {
                    return null
                }
            }
        })

    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    email: token.email,
                    name: token.name || "", // Ensure name is handled properly
                    image: token.picture || "", // Avoid undefined values
                };
            }
            return session;
        }
    },
    pages: {
        signIn: "http://localhost:5000/api/auth/sign-in",
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
