import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// Your own logic for dealing with plaintext password strings; be careful!
import { saltAndHashPassword } from "@/app/utils/password"
import { debugGetPlanets, getUser } from "@/app/utils/springApiCalls"
import { signInSchema } from "@/app/security/zod"
import { ZodError } from "zod"
//import { User } from "@/app/types/types";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			credentials: {
				email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
			},
			authorize: async (credentials) => {
				try {
					//debugGetPlanets()

					/* console.log("credentials: ")
					console.log("email: ", credentials.email)
					console.log("password: ", credentials.password) */

					const { email, password } = await signInSchema.parseAsync(credentials)

					/* console.log("credentials after validation: ")
					console.log("email: ", email)
					console.log("password: ", password) */
	
					// logic to salt and hash password
					//const pwHash = saltAndHashPassword(credentials.password as string)
					// Since the API is expecting a plaintext password, we'll just pass it through
					const pwHash = password as string
	
					const response = await getUser(email as string, pwHash)
					if (!response || !response.userId) {
                        throw new Error("Invalid credentials.");
                    }
	
					// Logic to if no user found maybe invite to register
	
					// return user object with their profile data

					return {
                        id: response.userId,
						token: response.token,
                        email: response.email,
                        name: response.username,
                        role: response.role,
                    };
				}
				catch (error) {
					if (error instanceof ZodError) {
                        console.error("Validation error:", error.errors);
                    } else {
                        console.error("Authentication error:", error);
                    }
                    return null;
				}
				
			},
		}),
	],
    pages: {
        signIn: '/pages/login', // Custom sign-in page
    },
    callbacks: {
        async jwt({ token, user }) {
            // Include additional properties in the JWT token
            if (user) {
                token.id = user.id;
                token.token = user.token;
				token.email = user.email;
                token.role = user.role;
                token.name = user.name;
            }
            return token;
        },
        async session({ session, token }) {
            // Include additional properties in the session object
            if (token) {
                session.user.id = token.id as string;
                session.user.token = token.token as string;
				session.user.email = token.email as string;
                session.user.role = token.role as string;
                session.user.name = token.name as string;
            }
            return session;
        },
    },
});