'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CarIcon, MenuIcon } from "lucide-react";
import NavLinks from "./Navlinks";
import UserInfo from "../user/userInfo";

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
                        setUser(userData);
                    } else {
                        console.log(response, 'token:'+token);
                        console.error('Failed to fetch user data');
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        window.location.href = '/carros';
    }

    return (
        <>
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <Link href="/" className="text-lg font-bold flex items-center gap-2">
                    <CarIcon className="w-6 h-6" /> 
                    Verzel
                </Link>
                <NavLinks />
                {user && <UserInfo user={user} onLogout={handleLogout} />}
                <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle Menu">
                    <MenuIcon className="w-6 h-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </header>
        </>
    );
}