"use client";

import ResourceCard from "@/app/components/resourceCard";
import { Planet } from "@/app/types/types";
import { getUserPlanets, getUserPlanetsClient } from "@/app/utils/springApiCalls";
import { getUserFromSession } from "@/app/utils/utilities";
import { useEffect, useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
//import "react-tabs/style/react-tabs.css";
import "@/app/styles/custom-tabs.css";
import { auth } from "../security/auth";
import { getSession } from "next-auth/react";
import PlanetCard from "@/app/components/planetCard";

export default function Dashboard() {
    //console.log("Dashboard called");
    const [planetList, setPlanetList] = useState<Planet[] | null>(null);

    useEffect(() => {
        async function fetchPlanets() {
            const session = await getSession();
            if (session) {
                //console.log("Session:", session);
                const planets = await getUserPlanetsClient(session.user.token, session.user.id);
                setPlanetList(planets);
            }
        }
        fetchPlanets();
    }, []);

    if (planetList) {
        return (
            <div>
                <Tabs>
                    <TabList>
                        {planetList.map((planet: Planet, index: number) => (
                                <Tab key={index}>
                                    <PlanetCard planetName={planet.planetName} isActive={false} />
                                </Tab>
                            ))}
                    </TabList>

                    {planetList.map((planet: Planet, index: number) => (
                        <TabPanel key={index}>
                            <div className="flex flex-col">
                                <h1 className="m-2">Resources</h1>
                                <div className="flex flex-row gap-x-10 m-2">
                                    <ResourceCard resourceName="Metal" resourceAmount={planet.planetBuildings.metalAmount} />
                                    <ResourceCard resourceName="Crystal" resourceAmount={planet.planetBuildings.crystalAmount} />
                                    <ResourceCard resourceName="Deuterium" resourceAmount={planet.planetBuildings.deuteriumAmount} />
                                </div>
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        );
    }
    else {
        return <div>Loading...</div>;
    } 
}