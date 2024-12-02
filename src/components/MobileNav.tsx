'use client';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
      {/* Trigger */}
      <SheetTrigger className="flex justify-center items-center" aria-label="Open Menu">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      {/* Content */}
      <SheetContent side={"right"} className="flex flex-col">
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Lucca<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center gap-4">
          {links.map((link, index) => {
            return (
              <Link 
                href={link.path} 
                key={index} 
                onClick={() => document.body.click()} 
                role="menuitem"
                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all duration-150`}>
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;
