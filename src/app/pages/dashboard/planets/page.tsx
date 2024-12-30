import UserPlanetList from "@/app/components/user/userPlanetList";

export default function Planets() {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1 className="m-5 text-xl">StarFraction</h1>
                
            </div>
            <div className='flex flex-col items-center'>
                <UserPlanetList />
            </div>
        </div>
    );
}