"use client";

import { UpgradeStatus } from "@/app/types/types";
import { upgradeBuildingClient } from "@/app/utils/springApiCalls";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BuildingCardProps {
    buildingName: string;
    buildingLevel: number;
    planetId: number;
    metalUpgradeCost: number;
    crystalUpgradeCost: number;
    productionUpgrade: number;
    newEnergyConsuption: number;
    upgradeTime: number;
    metalAmount: number;
    crystalAmount: number;
    upgradeStatus: UpgradeStatus | null;
}

const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return hours > 0
        ? `${hours}h ${minutes}m ${remainingSeconds}s`
        : minutes > 0
        ? `${minutes}m ${remainingSeconds}s`
        : `${remainingSeconds}s`;
};

export default function BuildingCard({ buildingName,
                                        buildingLevel,
                                        planetId,
                                        metalUpgradeCost,
                                        crystalUpgradeCost,
                                        productionUpgrade,
                                        newEnergyConsuption,
                                        upgradeTime,
                                        metalAmount,
                                        crystalAmount,
                                        upgradeStatus
                                     }: BuildingCardProps) {

    const [imageSrc, setImageSrc] = useState('/buildings/drill_light.png');
    const [altText, setAltText] = useState('icon of a drill');

    useEffect(() => {
        const updateImageSrc = (isDarkMode: boolean) => {
            switch (buildingName) {
                case 'Metal Mine':
                    setImageSrc(isDarkMode ? '/buildings/drill_dark.png' : '/buildings/drill_light.png');
                    setAltText('icon of a drill');
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

    const handleUpgradeClick = async () => {
        try {
            const session = await getSession();
            if (session) {
                //console.log("Session:", session);
                const response = await upgradeBuildingClient(session.user.token, planetId, buildingName);
                console.log('Upgrade successful:', response);
            }
        } catch (error) {
            console.error('Error upgrading building:', error);
        }
    };

    return (
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-2 m-1">
            <div className="flex flex-row items-center">
                <div className="flex flex-col items-center mx-2">
                    <h3 className="text m-1 font-bold">{buildingName}</h3>
                    <Image
                        src={imageSrc}
                        width={85}
                        height={85}
                        alt={altText}
                        className="m-1"
                    />
                    {metalUpgradeCost <= metalAmount && crystalUpgradeCost <= crystalAmount && upgradeStatus != null && upgradeStatus.buildingBeingUpgraded === "None" &&(
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
                        onClick={handleUpgradeClick}>
                            Upgrade
                        </button>
                    )}
                </div>
                <div className="flex flex-col items-left mx-2 min-w-[450px]">
                    <p className="text m-2 font-bold">Level {buildingLevel}</p>
                    <div className="flex justify-between m-2">
                        <span>Upgrade Cost:</span>
                        <span className="text-right">
                            <div className="font-bold">{metalUpgradeCost} Metal</div>
                            <div className="font-bold">{crystalUpgradeCost} Crystal</div>
                        </span>
                    </div>
                    <div className="flex justify-between m-2">
                        <span>Production Upgrade:</span>
                        <span className="font-bold">+{productionUpgrade}</span>
                    </div>
                    <div className="flex justify-between m-2">
                        <span>Energy needed:</span>
                        <span className="font-bold">+{newEnergyConsuption}</span>
                    </div>
                    <div className="flex justify-between m-2">
                        <span>Upgrade Time:</span>
                        <span className="font-bold">{formatTime(upgradeTime)}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}