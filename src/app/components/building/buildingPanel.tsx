

import { Planet } from "@/app/types/types";
import BuildingCard from "./buildingCard";


export default function BuildingPanel(planet: Planet) {
    return (
        <div className="flex flex-col">
            <h1 className="m-2">Buildings</h1>
            <div className="flex flex-col gap-x-10 m-2">
                <BuildingCard buildingName="Metal Mine" buildingLevel={planet.planetBuildings.metalMineLevel} />
                <BuildingCard buildingName="Crystal Mine" buildingLevel={planet.planetBuildings.crystalMineLevel} />
                <BuildingCard buildingName="Deuterium Rig" buildingLevel={planet.planetBuildings.deuteriumMineLevel} />
                <BuildingCard buildingName="Solar Plant" buildingLevel={planet.planetBuildings.solarPlantLevel} />
                <BuildingCard buildingName="Shipyard" buildingLevel={planet.planetBuildings.shipyardLevel} />
                <BuildingCard buildingName="Lab" buildingLevel={planet.planetBuildings.researchLabLevel} />
            </div>
        </div>
    );
}