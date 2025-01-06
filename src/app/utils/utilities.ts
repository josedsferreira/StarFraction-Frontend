import { auth } from "../security/auth";
import { getUserPlanets } from "./springApiCalls";


export async function getUserIdFromSession() {
    const session = await auth()
 
    if (!session?.user) {
        console.log('No user session found')
        return null
    }

    const user = session.user;
    return user.id;
}

export async function getUserFromSession() {
    const session = await auth()
 
    if (!session?.user) {
        console.log('No user session found')
        return null
    }

    const user = session.user;
    return user;
}
