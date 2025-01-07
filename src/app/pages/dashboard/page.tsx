"use client";

import ResourceCard from "@/app/components/resource/resourceCard";
import { Planet } from "@/app/types/types";
import { getUserPlanets, getUserPlanetsClient } from "@/app/utils/springApiCalls";
import { getUserFromSession } from "@/app/utils/utilities";
import { useEffect, useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
//import "react-tabs/style/react-tabs.css";
import "@/app/styles/custom-tabs.css";
import { auth } from "../security/auth";
import { getSession } from "next-auth/react";
import PlanetCard from "@/app/components/planet/planetCard";
import ResourcePanel from "@/app/components/resource/resourcePanel";

export default function Dashboard() {
    console.log("Dashboard called");
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
                            <ResourcePanel {...planet} />
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