
import PlanetBar from "@/app/components/planetBar";
import SideNav from "@/app/components/sidenav";
import { getPlanets } from "@/app/utils/springApiCalls";

export default async function Layout({ children }: { children: React.ReactNode }) {
    //const planetList = await getPlanets();

    // the dashboard is just the sideNav with the buttons for what to appear on the right, 
    // so we can just use the planetBar there showing and allowing to change the active planet
    
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-auto bg-gray-400 dark:bg-gray-800 dark:text-white">
                <SideNav />
            </div>
            <div className="flex-grow md:overflow-y-auto">
                <div className="w-full p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}