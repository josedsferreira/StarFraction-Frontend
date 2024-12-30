import Image from "next/image";

interface PlanetCardProps {
    planetName: string;
}

export default function PlanetCard({ planetName }: PlanetCardProps) {
    return (
        <div className="flex flex-col items-center">
            <Image
                src="/planets/tropical.png"
                width={35}
                height={35}
                alt="Picture of a planet"
            />
            <p className="text-sm">{planetName}</p>
        </div>
    );
}