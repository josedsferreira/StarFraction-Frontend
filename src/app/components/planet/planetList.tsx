import { auth } from "@/app/security/auth"
import { getPlanets } from "@/app/utils/springApiCalls"
import { Planet } from "@/app/types/types"
 
export default async function PlanetList() {
    
    const planets = await getPlanets()


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