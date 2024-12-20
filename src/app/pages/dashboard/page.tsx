import Link from 'next/link'
import Username from "@/app/components/user/username";

export default function Dashboard() {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1 className="m-5 text-xl">StarFraction</h1>
                <h3>Dashboard</h3>
                <Username />
            </div>
            <div className='flex flex-col items-center'>
                <Link className="btn m-2 " href="/pages/planets">Planets</Link>
            </div>
        </div>
    );
}