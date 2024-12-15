import { auth } from "@/app/security/auth"
import { getPlanets } from "@/app/utils/springApiCalls"
import { Planet } from "@/app/types/types"
 
export default async function PlanetList() {
    const session = await auth()
 
    if (!session?.user) {
        console.log('No user session found')
        return null
    }

    const user = session.user;

    //console.log('User:', user)

    const token = user.token;
    const planets = await getPlanets(token)

 
    return (
        <ul>
            {planets.map((planet: Planet) => (
                <li key={planet.planetId}>
                    {planet.planetName} - {planet.planetSize}
                </li>
            ))}
        </ul>
    )
}