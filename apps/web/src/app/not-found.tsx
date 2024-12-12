"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        router.push("/");
    })

    return (
        <div className="grid grid-cols-1 grid-rows-1 h-screen">
            <div className="m-auto text-3xl">Page not found. Redirecting to home page...</div>
        </div>
    );
};