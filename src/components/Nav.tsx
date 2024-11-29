'use client';

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
    
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all duration-150`}>
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    </Suspense>
  )
}

export default Nav;

