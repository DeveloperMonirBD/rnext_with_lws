"use client";

import { usePathname } from "next/navigation";

const NotFound = () => {

    const pathname = usePathname();

    return (
        <div>
            <h1 className="font-bold text-xl">Page Not Found</h1>
            <div className="mt-5">The page ({pathname}) you are requesting was not found!</div>
        </div>
    );
};

export default NotFound;
