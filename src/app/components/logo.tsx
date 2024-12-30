"use client";

import Image from 'next/image'
import { useEffect, useState } from 'react';

interface LogoProps {
    width: number;
    height: number;
}

export default function SideNav({ width, height }: LogoProps) {

    const [imageSrc, setImageSrc] = useState('/logo_light.png');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const updateLogo = (e: MediaQueryListEvent) => {
                setImageSrc(e.matches ? "/logo_dark.png" : "/logo_light.png");
            };

            setImageSrc(mediaQuery.matches ? "/logo_dark.png" : "/logo_light.png"); // Set initial logo
            mediaQuery.addEventListener('change', updateLogo);

            return () => {
                mediaQuery.removeEventListener('change', updateLogo);
            };
        }
    }, []);

    return (
            <Image
                src={imageSrc}
                width={width}
                height={height}
                alt="Star Fraction logo"
                className="m-2"
            />
    );
}