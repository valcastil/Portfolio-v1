import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Portfolio
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {['home', 'about', 'services', 'projects', 'skills', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="hover:text-purple-500 transition-colors capitalize"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md">
                    <div className="px-4 pt-2 pb-4 space-y-3">
                        {['home', 'about', 'services', 'projects', 'skills', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="block w-full text-left py-2 hover:text-purple-500 transition-colors capitalize"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
