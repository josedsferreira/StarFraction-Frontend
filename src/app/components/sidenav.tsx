
import Link from "next/link";
import Logo from "@/app/components/logo";

export default function SideNav() {

    return (
        <div>
            <div className='flex flex-col items-center'>
                <Logo width={100} height={100}/>
            </div>
            <div className='menu flex flex-col items-center'>
                <Link className="btn m-2 " href="/pages/planets">Build</Link>
            </div>
        </div>
    );
}