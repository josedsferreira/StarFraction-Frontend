
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


// this is being used in auth.ts in the return from the signin and in username.tsx but probably is not
// needed anymore as we have altered the default user object in next-auth.d.ts
/* export interface User {
    id: string;
    token: string;
    email: string;
    name: string;
    role: string;
    // Add any other properties your user object should have
} */