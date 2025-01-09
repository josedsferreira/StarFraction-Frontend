

import { Planet, PlanetWithDetails, UpgradeStatus } from "@/app/types/types";
import BuildingCard from "./buildingCard";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { getUpgradeStatusClient } from "@/app/utils/springApiCalls";


export default function BuildingPanel(planetWithDetails: PlanetWithDetails) {

    const [upgradeStatus, setUpgradeStatus] = useState<UpgradeStatus | null>(null);
        
    useEffect(() => {
        async function fetchUpgradeStatus() {
            const session = await getSession();
            if (session) {
                const status = await getUpgradeStatusClient(session.user.token, planetWithDetails.planet.planetId);
                setUpgradeStatus(status);
            }
        }
        fetchUpgradeStatus();
    }, []);

    return (
        <div className="flex flex-col w-fit">
            {/* <h1 className="m-2">Buildings</h1> */}
            <div className="flex flex-col gap-x-10 my-2 mx-4">
                <BuildingCard 
                    buildingName="Metal Mine" 
                    buildingLevel={planetWithDetails.planet.planetBuildings.metalMineLevel}
                    planetId={planetWithDetails.planet.planetId}
                    metalUpgradeCost={planetWithDetails.metalMineMetalUpgradeCost}
                    crystalUpgradeCost={planetWithDetails.metalMineCrystalUpgradeCost}
                    productionUpgrade={planetWithDetails.metalProductionUpgrade}
                    newEnergyConsuption={planetWithDetails.crystalMineEnergyConsumption}
                    upgradeTime={planetWithDetails.metalMineUpgradeTime}
                    metalAmount={planetWithDetails.planet.planetBuildings.metalAmount}
                    crystalAmount={planetWithDetails.planet.planetBuildings.crystalAmount}
                    upgradeStatus={upgradeStatus}
                />
                <BuildingCard 
                    buildingName="Crystal Mine" 
                    buildingLevel={planetWithDetails.planet.planetBuildings.crystalMineLevel}
                    planetId={planetWithDetails.planet.planetId}
                    metalUpgradeCost={planetWithDetails.crystalMineMetalUpgradeCost}
                    crystalUpgradeCost={planetWithDetails.crystalMineCrystalUpgradeCost}
                    productionUpgrade={planetWithDetails.crystalProductionUpgrade}
                    newEnergyConsuption={planetWithDetails.crystalMineEnergyConsumption}
                    upgradeTime={planetWithDetails.crystalMineUpgradeTime}
                    metalAmount={planetWithDetails.planet.planetBuildings.metalAmount}
                    crystalAmount={planetWithDetails.planet.planetBuildings.crystalAmount}
                    upgradeStatus={upgradeStatus}
                />
                <BuildingCard 
                    buildingName="Deuterium Rig" 
                    buildingLevel={planetWithDetails.planet.planetBuildings.deuteriumMineLevel}
                    planetId={planetWithDetails.planet.planetId}
                    metalUpgradeCost={planetWithDetails.deuteriumMineMetalUpgradeCost}
                    crystalUpgradeCost={planetWithDetails.deuteriumMineCrystalUpgradeCost}
                    productionUpgrade={planetWithDetails.deuteriumProductionUpgrade}
                    newEnergyConsuption={planetWithDetails.deuteriumMineEnergyConsumption}
                    upgradeTime={planetWithDetails.deuteriumMineUpgradeTime}
                    metalAmount={planetWithDetails.planet.planetBuildings.metalAmount}
                    crystalAmount={planetWithDetails.planet.planetBuildings.crystalAmount}
                    upgradeStatus={upgradeStatus}
                />
                {/* <BuildingCard 
                    buildingName="Solar Plant" 
                    buildingLevel={planetWithDetails.planet.planetBuildings.solarPlantLevel}
                    planetId={planetWithDetails.planet.planetId}
                    metalUpgradeCost={planetWithDetails.solarPlantMetalUpgradeCost}
                    crystalUpgradeCost={planetWithDetails.solarPlantCrystalUpgradeCost}
                    upgradeTime={planetWithDetails.solarPlantUpgradeTime}
                />
                <BuildingCard 
                    buildingName="Shipyard" 
                    buildingLevel={planetWithDetails.planet.planetBuildings.shipyardLevel}
                    planetId={planetWithDetails.planet.planetId}
                />
                <BuildingCard 
                    buildingName="Lab" 
                    buildingLevel={planetWithDetails.planet.planetBuildings.researchLabLevel}
                    planetId={planetWithDetails.planet.planetId}
                /> */}
            </div>
        </div>
    );
}