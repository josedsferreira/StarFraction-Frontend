import PlanetBar from "@/app/components/planetBar";
import SideNav from "@/app/components/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-auto bg-gray-400 dark:bg-gray-800 dark:text-white">
                <SideNav />
            </div>
            <div className="flex-grow md:overflow-y-auto">
                <div className="w-full bg-gray-400 dark:bg-gray-800 dark:text-white">
                    <PlanetBar />
                </div>
                <div className="w-full p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}