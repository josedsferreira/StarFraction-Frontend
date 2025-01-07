
import Link from "next/link";
import Logo from "@/app/components/logo";
import LogOutButton from "@/app/components/logOutButton";

export default function SideNav() {

    return (
        <div>
            <div className='flex flex-col items-center'>
                <Logo width={100} height={100}/>
            </div>
            <div className='menu flex flex-col items-center w-full'>
                <div className="w-full flex justify-center">
                    <Link className="btn btn-sm m-2 w-full max-w-xs" href="/pages/dashboard">Overview</Link>
                </div>
                <div className="w-full flex justify-center">
                    <Link className="btn btn-sm m-2 w-full max-w-xs" href="/pages/dashboard/build">Build</Link>
                </div>
                <LogOutButton />
            </div>
        </div>
    );
}