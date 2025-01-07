"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ResourceCardProps {
    resourceName: string;
    resourceAmount: number;
}

export default function ResourceCard({ resourceName, resourceAmount }: ResourceCardProps) {

    const [imageSrc, setImageSrc] = useState('/resource_icons/metal.png');
    const [altText, setAltText] = useState('icon with 3 ingots of metal');

    useEffect(() => {
        const updateImageSrc = (isDarkMode: boolean) => {
            switch (resourceName) {
                case 'Metal':
                    setImageSrc(isDarkMode ? '/resource_icons/metal_dark.png' : '/resource_icons/metal.png');
                    setAltText('icon with 3 ingots of metal');
                    break;
                case 'Crystal':
                    setImageSrc(isDarkMode ? '/resource_icons/crystal_dark.png' : '/resource_icons/crystal.png');
                    setAltText('icon with crystals');
                    break;
                case 'Deuterium':
                    setImageSrc(isDarkMode ? '/resource_icons/barrel_dark.png' : '/resource_icons/barrel.png');
                    setAltText('icon with a barrel');
                    break;
                default:
                    setImageSrc(isDarkMode ? '/resource_icons/metal_dark.png' : '/resource_icons/metal.png');
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
    }, [resourceName]);

    return (
        <div className="flex flex-col items-center">
            <p className="text-sm m-1">{resourceName}</p>
            <Image
                src={imageSrc}
                width={35}
                height={35}
                alt={altText}
                className="m-1"
            />
            <p className="text-sm m-1">{resourceAmount}</p>
        </div>
    );
}