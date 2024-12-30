import { Planet } from "../types/types";
import { getUserPlanets } from "../utils/springApiCalls";
import PlanetCard from "./planetCard";


export default async function PlanetBar() {

    const planetList = await getUserPlanets();

    return (
        <div className="navbar">
            <div className="flex-1 gap-2">
                {planetList ? (
                    planetList.map((planet: Planet) => (
                        <PlanetCard key={planet.planetId} planetName={planet.planetName} />
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}