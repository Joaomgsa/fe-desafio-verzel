import React from 'react';
import Link from 'next/link';

const NavLinks = () => {
  const links = [
    { href: '/carros', label: 'Carros' },
    { href: '/login', label: 'Login' },
    { href: '/admin/carros', label: 'Admin' },
    { href: '#', label: 'Sobre' },
  ];

  return (
    <nav className="hidden md:flex items-center gap-6">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="text-sm font-medium hover:underline" prefetch={false}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;