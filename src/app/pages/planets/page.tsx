import PlanetList from "@/app/components/planetList";
import Username from "@/app/components/planetList";

export default function Planets() {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1 className="m-5 text-xl">StarFraction</h1>
                
            </div>
            <div className='flex flex-col items-center'>
                <PlanetList />
            </div>
        </div>
    );
}