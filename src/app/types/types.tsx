
export interface PlanetBuildings {
    id: number;
    metalMineLevel: number;
    crystalMineLevel: number;
    deuteriumMineLevel: number;
    solarPlantLevel: number;
    metalStorageLevel: number;
    crystalStorageLevel: number;
    deuteriumStorageLevel: number;
    shipyardLevel: number;
    researchLabLevel: number;
    metalAmount: number;
    crystalAmount: number;
    deuteriumAmount: number;
    energyAmount: number;
    lastUpdated: string;
}

export interface Planet {
    planetId: number;
    planetName: string;
    planetSize: string;
    userId: number;
    planetBuildings: PlanetBuildings;
}

export interface PlanetWithDetails {
    planet: Planet;
    metalMineMetalUpgradeCost: number;
    metalMineCrystalUpgradeCost: number;
    metalProductionUpgrade: number;
    metalMineEnergyConsumption: number;
    metalMineUpgradeTime: number;
    crystalMineMetalUpgradeCost: number;
    crystalMineCrystalUpgradeCost: number;
    crystalProductionUpgrade: number;
    crystalMineEnergyConsumption: number;
    crystalMineUpgradeTime: number;
    deuteriumMineMetalUpgradeCost: number;
    deuteriumMineCrystalUpgradeCost: number;
    deuteriumProductionUpgrade: number;
    deuteriumMineEnergyConsumption: number;
    deuteriumMineUpgradeTime: number;
    solarPlantMetalUpgradeCost: number;
    solarPlantCrystalUpgradeCost: number;
    solarPlantUpgradeTime: number;
    shipyardMetalUpgradeCost: number;
    shipyardCrystalUpgradeCost: number;
    shipyardUpgradeTime: number;
    labMetalUpgradeCost: number;
    labCrystalUpgradeCost: number;
    labUpgradeTime: number;
}

export interface UpgradeStatus {
    upgradeFinishTime: string;
    buildingBeingUpgraded: string;
}

/* 
[
    {
        "planetId": 1,
        "planetName": "New Colony",
        "planetSize": "large",
        "userId": 1,
        "planetBuildings": {
            "id": 1,
            "metalMineLevel": 5,
            "crystalMineLevel": 0,
            "deuteriumMineLevel": 0,
            "solarPlantLevel": 0,
            "metalStorageLevel": 0,
            "crystalStorageLevel": 0,
            "deuteriumStorageLevel": 0,
            "shipyardLevel": 0,
            "researchLabLevel": 0,
            "metalAmount": 5560,
            "crystalAmount": 0,
            "deuteriumAmount": 0,
            "energyAmount": 0,
            "lastUpdated": "2024-12-27T18:48:26.932285"
        }
    }
]
*/

