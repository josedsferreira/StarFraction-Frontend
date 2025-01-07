"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface BuildingCardProps {
    buildingName: string;
    buildingLevel: number;
}

export default function BuildingCard({ buildingName, buildingLevel }: BuildingCardProps) {

    const [imageSrc, setImageSrc] = useState('/buildings/drill_light.png');
    const [altText, setAltText] = useState('icon of a drill');

    useEffect(() => {
        const updateImageSrc = (isDarkMode: boolean) => {
            switch (buildingName) {
                case 'Metal Mine':
                    setImageSrc(isDarkMode ? '/buildings/drill_dark.png' : '/buildings/drill_light.png');
                    setAltText('icon with 3 ingots of metal');
                    break;
                case 'Crystal Mine':
                    setImageSrc(isDarkMode ? '/buildings/truck_dark.png' : '/buildings/truck_light.png');
                    setAltText('icon of a dump truck');
                    break;
                case 'Deuterium Rig':
                    setImageSrc(isDarkMode ? '/buildings/platform_dark.png' : '/buildings/platform_light.png');
                    setAltText('icon of an offshore platform');
                    break;
                case 'Solar Plant':
                    setImageSrc(isDarkMode ? '/buildings/solar_dark.png' : '/buildings/solar_light.png');
                    setAltText('icon of three solar panels and the sun');
                    break;
                case 'Shipyard':
                    setImageSrc(isDarkMode ? '/buildings/shipyard_dark.png' : '/buildings/shipyard_light.png');
                    setAltText('icon of a rocket ship and a crane');
                    break;
                case 'Lab':
                    setImageSrc(isDarkMode ? '/buildings/lab_dark.png' : '/buildings/lab_light.png');
                    setAltText('icon of a building with a telescope observatory');
                    break;
                default:
                    setImageSrc(isDarkMode ? '/buildings/drill_dark.png' : '/buildings/drill_light.png');
                    setAltText('icon with 3 ingots of metal');
                    break;
            }
        };

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        updateImageSrc(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            updateImageSrc(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [buildingName]);

    return (
        <div className="flex flex-col items-center">
            <p className="text-sm m-1">{buildingName}</p>
            <Image
                src={imageSrc}
                width={35}
                height={35}
                alt={altText}
                className="m-1"
            />
            <p className="text-sm m-1">{buildingLevel}</p>
        </div>
    );
}