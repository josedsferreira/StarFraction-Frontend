"use client";

import BuildingPanel from "@/app/components/building/buildingPanel";
import PlanetCard from "@/app/components/planet/planetCard";
import { Planet, PlanetWithDetails } from "@/app/types/types";
import { getUserPlanetsClient, getUserPlanetsWithDetailsClient } from "@/app/utils/springApiCalls";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export default function Build() {
    console.log("build page called");
        const [planetList, setPlanetList] = useState<PlanetWithDetails[] | null>(null);
    
        useEffect(() => {
            async function fetchPlanets() {
                const session = await getSession();
                if (session) {
                    //console.log("Session:", session);
                    const planets = await getUserPlanetsWithDetailsClient(session.user.token, session.user.id);
                    setPlanetList(planets);
                }
            }
            fetchPlanets();
        }, []);
    
        if (planetList) {
            return (
                <div>
                    <Tabs defaultIndex={1}>
                        <TabList>
                            <Tab disabled>
                            </Tab>
                            {planetList.map((planetWithdetails: PlanetWithDetails, index: number) => (
                                    <Tab key={index}>
                                        <PlanetCard planetName={planetWithdetails.planet.planetName} isActive={false} />
                                    </Tab>
                                ))}
                        </TabList>
                        
                        <TabPanel></TabPanel>
                        {planetList.map((planetWithdetails: PlanetWithDetails, index: number) => (
                            <TabPanel key={index}>
                                <div className="flex flex-col">
                                    <BuildingPanel {...planetWithdetails} />
                                </div>
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            );
        }
        else {
            return <div className="m-2"><h1>Loading...</h1></div>;
        } 
    }