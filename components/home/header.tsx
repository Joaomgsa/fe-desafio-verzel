'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CarIcon, MenuIcon } from "lucide-react";
import NavLinks from "./Navlinks";

export default function MenuHeader() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await fetch('http://localhost:8080/users/me', {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const userData = await response.json();
                        setUser(userData.username);
                    } else {
                        console.log(response);
                        console.error('Failed to fetch user data');
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUser();
    }, []);

    return (
        <>
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <Link href="/" className="text-lg font-bold flex items-center gap-2">
                    <CarIcon className="w-6 h-6" /> 
                    Verzel
                </Link>
                <NavLinks />
                {user && (
                    <div className="flex items-center gap-2">
                        <span>Bem-vindo, {user.name}</span>
                        <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
                    </div>
                )}
                <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle Menu">
                    <MenuIcon className="w-6 h-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </header>
        </>
    );
}