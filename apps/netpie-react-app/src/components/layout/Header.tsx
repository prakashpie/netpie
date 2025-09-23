'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
    const [showMobileMenu] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white z-50">
            <div className="relative z-10 container mx-auto">
                <nav className="relative flex items-center justify-between py-6 md:py-8">
                    <Link href="/" className="flex" aria-label="Home page">
                        Logo
                    </Link>
                    <div className="flex items-center gap-5 md:gap-8">
                        <div
                            className={`header--nav gap-6 text-xl ${showMobileMenu ? '' : 'max-md:hidden'} max-md:text-white max-md:absolute max-md:left-0 max-md:-bottom-6 max-md:translate-y-full max-md:w-full md:text-appGray-700 md:text-base`}
                        >
                            <ul className="flex flex-col gap-x-4 md:flex-row">
                                <li className="flex items-center gap-4">
                                    <Link
                                        href="/shop"
                                        className="flex leading-none py-2 transition-colors duration-300 md:hover:text-appText"
                                    >
                                        Shop
                                    </Link>
                                </li>
                                <li className="flex items-center gap-4 md:before:w-1 md:before:h-1 md:before:mt-1 md:before:rounded-full md:before:bg-appGray-700">
                                    <Link
                                        href="/blog"
                                        className="flex leading-none py-2 transition-colors duration-300 md:hover:text-appText"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li className="flex items-center gap-4 md:before:w-1 md:before:h-1 md:before:mt-1 md:before:rounded-full md:before:bg-appGray-700">
                                    <Link
                                        href="/home-loan"
                                        className="flex leading-none py-2 transition-colors duration-300 md:hover:text-appText"
                                    >
                                        Home Loan
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};
