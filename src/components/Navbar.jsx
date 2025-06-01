import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from 'react';

export default function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const navLinks = [
        { name: "home", href: '/' },
        { name: "projects", href: '/projects'},
        { name: "skills", href: '/skills'},
        // { name: "Contact", href: '#contact'},
    ];

    return (
        <nav className="fixed top-2 left-0 right-0 z-50 bg-custom-background/80 backdrop-blur-sm">   
            <div className="max-w-3xl px-8 mx-auto flex items-center justify-start h-16">  
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        className={`${
                            activeLink === link.href
                            ? 'text-gray-200'
                            : 'text-gray-400 hover:text-gray-200'
                        } pe-8 py-2 text-base font-light tracking-wide transition-colors duration-200`}
                        onClick={() => setActiveLink(link.href)}
                    >
                        {link.name}
                    </Link>
                ))}   
            </div>  
        </nav>
    )
}
