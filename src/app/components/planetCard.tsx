import Image from "next/image";

interface PlanetCardProps {
    planetName: string;
    isActive: boolean;
}

export default function PlanetCard({ planetName, isActive }: PlanetCardProps) {
    return (
        <div className="flex flex-col items-center">
            <Image
                src="/planets/tropical.png"
                width={35}
                height={35}
                alt="Picture of a planet"
            />
            <p className={`text-sm ${isActive ? 'text-yellow-500' : ''}`}>{planetName}</p>
        </div>
    );
}