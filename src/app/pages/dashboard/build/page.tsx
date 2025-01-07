"use client";

import BuildingPanel from "@/app/components/building/buildingPanel";
import PlanetCard from "@/app/components/planet/planetCard";
import { Planet } from "@/app/types/types";
import { getUserPlanetsClient } from "@/app/utils/springApiCalls";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export default function Build() {
    console.log("build page called");
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
                                    <BuildingPanel {...planet} />
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