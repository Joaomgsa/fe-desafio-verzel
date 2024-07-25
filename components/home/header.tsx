import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CarIcon, MenuIcon } from "lucide-react";
import NavLinks from "./Navlinks";

export default function MenuHeader() {
    return (
        <>
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <Link href="/" className="text-lg font-bold flex items-center gap-2">
                    <CarIcon className="w-6 h-6" /> {/* Ícone de Carro */}
                    Verzel
                </Link>
                <NavLinks />
                <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle Menu">
                    <MenuIcon className="w-6 h-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </header>
        </>
    );
}