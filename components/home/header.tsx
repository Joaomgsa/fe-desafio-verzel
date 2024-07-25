import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { CarIcon, MenuIcon } from "lucide-react"





export default function MenuHeader() {
    return (
        <>
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <CarIcon className="w-8 h-8" />
                    <span className="text-2xl font-bold">Verzel</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                        Login
                    </Link>
                    <Link href="/carros" className="text-sm font-medium hover:underline" prefetch={false}>
                        Carros
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                        Sobre
                    </Link>
                </nav>
                <Button variant="outline" size="icon" className="md:hidden">
                    <MenuIcon className="w-6 h-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </header>
        </>
    );
}