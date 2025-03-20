"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavbarLink(item){

    const pathName = usePathname();
    // console.log("pathName : ", pathName)

    return(
        <>

            <Link
                className={`flex items-center w-full h-10 px-3 mt-2 rounded hover:bg-gray-200 ${
                    pathName === item.href ? "bg-[#F5F7F8]" : "bg-none"
                }`}
                href={item.href}
                >
                {item.icon}
                <span className="ml-2 text-sm font-medium pl-3">{item.label}</span>
            </Link>

        </>
    )
}