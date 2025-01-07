"use client";

import Link from "next/link";
import Logo from "@/app/components/logo";
import { signOut } from "next-auth/react";

export default function LogOutButton() {

    const handleLogout = async () => {
        await signOut();
        window.location.href = "/pages/login"; // Redirect to login page after logout
    };

    return (
        <div className="w-full flex justify-center">
            <div onClick={handleLogout} className="btn btn-sm m-2 w-full max-w-xs">Logout</div>
        </div>
    );
}