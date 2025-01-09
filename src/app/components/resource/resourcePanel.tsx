import Image from "next/image";
import ResourceCard from "./resourceCard";
import { Planet } from "@/app/types/types";


export default function ResourcePanel(planet: Planet) {
    return (
        <div className="flex flex-col">
            {/* <h1 className="m-2">Resources</h1> */}
            <div className="flex flex-row gap-x-2 my-2 mx-4">
                <ResourceCard resourceName="Metal" resourceAmount={planet.planetBuildings.metalAmount} />
                <ResourceCard resourceName="Crystal" resourceAmount={planet.planetBuildings.crystalAmount} />
                <ResourceCard resourceName="Deuterium" resourceAmount={planet.planetBuildings.deuteriumAmount} />
            </div>
        </div>
    );
}