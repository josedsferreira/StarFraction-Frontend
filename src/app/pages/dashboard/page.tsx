import ResourceCard from "@/app/components/resourceCard";
import { getUserPlanets } from "@/app/utils/springApiCalls";


export default async function Dashboard() {
    
    const planetList = await getUserPlanets(); // need to get only active planet
    if (!planetList) {
        return <div>Loading...</div>;
    }
    const [activePlanet] = planetList || [];

    return (
        <div className="flex flex-col">
            <h1 className="m-2">Resources</h1>
            <div className="flex flex-row gap-x-10 m-2">
                <ResourceCard resourceName="Metal" resourceAmount={activePlanet.planetBuildings.metalAmount} />
                <ResourceCard resourceName="Crystal" resourceAmount={activePlanet.planetBuildings.crystalAmount} />
                <ResourceCard resourceName="Deuterium" resourceAmount={activePlanet.planetBuildings.deuteriumAmount} />
            </div>
        </div>
    );
}