"use client";

import { useEffect, useState } from "react";
import { Planet } from "../types/types";
import { getUserPlanets } from "../utils/springApiCalls";
import PlanetCard from "./planetCard";


export default function PlanetBar() {
    const [planetList, setPlanetList] = useState<Planet[]>([]);
    const [activePlanetId, setActivePlanetId] = useState<number | null>(null);

    useEffect(() => {
        const fetchPlanets = async () => {
            const planets = await getUserPlanets();
            //const planetIds = planets.map((planet: Planet) => planet.planetId);
            setPlanetList(planets);
            if (planets.length > 0) {
                setActivePlanetId(planets[0].planetId); // Set the first planet as active by default
            }
        };
        fetchPlanets();
    }, []);

    // Set active Planet click
    const handlePlanetClick = (planet: Planet) => {
        setActivePlanetId(planet.planetId);
    };

    // Sort the planetList so that the active planet appears first
    const sortedPlanetList = [...planetList].sort((a, b) => {
        if (a.planetId === activePlanetId) return -1;
        if (b.planetId === activePlanetId) return 1;
        return 0;
    });

    return (
        <div className="navbar">
            <div className="flex-1 gap-2">
                {planetList.length > 0 ? (
                    sortedPlanetList.map((planet: Planet) => (
                        <div key={planet.planetId} onClick={() => handlePlanetClick(planet)}>
                            <PlanetCard planetName={planet.planetName} isActive={planet.planetId === activePlanetId}/>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}