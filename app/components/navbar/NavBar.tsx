'use client'

import { useState } from 'react';
import Link from "next/link";
import "./navbar.module.css";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Promodoro', href: '/promodoro' },
        { name: 'Interleaving', href: '/interleaving' },
        { name: 'Elaborate Interrogation', href: '/elaborate_interrogation' },
        { name: 'Mind Mapping', href: '/mind_mapping' },
        { name: 'Practice Testing', href: '/practice_testing' },
        { name: 'Review & Revise', href: '/review_revise' }
    ];

    return (
        <div id={"tailwind-navbar"}>
            <nav className="bg-gray-900 text-decoration-none">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo/Brand */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-white text-xl font-bold text-decoration-none">
                                HeadSpace
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" stroke="currentColor" fill="none"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" stroke="currentColor" fill="none"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-300 text-decoration-none  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 text-decoration-none hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}