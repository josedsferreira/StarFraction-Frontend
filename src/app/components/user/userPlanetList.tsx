import { getPlanets, getUserPlanets } from "@/app/utils/springApiCalls"
import { Planet } from "@/app/types/types"
 
export default async function UserPlanetList() {
    
    const planets = await getUserPlanets()

    if (!planets) {
        console.log('No planets found')
        return (<p>No planets found</p>)
    }

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