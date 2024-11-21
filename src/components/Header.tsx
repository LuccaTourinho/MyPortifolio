'use client';

import { Suspense } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <header className="py-8 xl:py-12">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Lucca<span className="text-accent">.</span>
                        </h1>
                    </Link>

                    {/* Navigation & Hire me button */}
                    <div className="hidden xl:flex items-center gap-8">
                        <Nav />
                        <Link href="/contact">
                            <Button>Hire me</Button>
                        </Link>
                    </div>

                    {/* Mobile menu */}
                    <div className="xl:hidden">
                    mobile nav
                    </div>
                </div>
            </header>
        </Suspense>
    )
}

export default Header;