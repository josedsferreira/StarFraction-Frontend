

import Username from "@/app/components/user/username";

export default function Dashboard() {
    return (
        <div className='flex flex-col items-center'>
            <h1 className="m-5 text-xl">StarFraction</h1>
            <h3>Dashboard</h3>
            <Username />
        </div>
    );
}