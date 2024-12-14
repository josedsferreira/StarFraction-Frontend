import NextAuth from "next-auth";


/* TypeScript provides the declare module syntax to augment existing types from a library.
In this case, you're augmenting the next-auth types to add custom fields to the Session and User objects. */
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            name: string;
            role: string;
            token: string;
        };
    }

    interface User {
        id: string;
        email: string;
        name: string;
        role: string;
        token: string;
    }

    interface JWT {
        id: string;
        email: string;
        name: string;
        role: string;
        token: string;
    }
}