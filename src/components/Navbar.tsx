'use client';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage, isRtl } = useLanguage();
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const flags: Record<string, string> = {
        fr: '🇫🇷',
        ar: '🇲🇦',
        en: '🇺🇸',
    };

    const langNames: Record<string, string> = {
        fr: 'Français',
        ar: 'العربية',
        en: 'English'
    };

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 justify-center px-3 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                aria-label="Select language"
            >
                <span className="text-xl">{flags[language as string]}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className={`absolute top-full mt-2 ${isRtl ? 'left-0' : 'right-0'} bg-[#121212] border border-white/10 rounded-xl shadow-2xl py-2 min-w-[150px] overflow-hidden`}>
                    {Object.entries(flags).map(([code, flag]) => (
                        <button
                            key={code}
                            onClick={() => {
                                setLanguage(code as 'fr' | 'ar' | 'en');
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors ${language === code ? 'text-meca-red bg-white/5' : 'text-gray-300'}`}
                        >
                            <span className="text-xl">{flag}</span>
                            <span className="font-medium text-sm">{langNames[code]}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav_home'), href: '#accueil' },
        { name: t('nav_services'), href: '#services' },
        { name: t('nav_about'), href: '#a-propos' },
        { name: t('nav_contact'), href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-meca-darker border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#accueil" className="flex items-center group">
                            <img src="/mecastra.png" alt="MECASTRA Logo" className="h-[40px] md:h-[80px] w-auto object-contain group-hover:scale-105 transition-transform" />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-meca-silver hover:text-white transition-colors text-sm font-medium uppercase tracking-wide"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Language Selector Pop-up */}
                        <LanguageSelector />

                        <a
                            href="#contact"
                            className="bg-meca-red hover:bg-meca-red-hover text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-[0_0_15px_rgba(255,59,48,0.5)] transform hover:-translate-y-0.5"
                        >
                            {t('nav_cta')}
                        </a>
                    </div>

                    {/* Mobile Menu Button & Language (Mobile) */}
                    <div className="md:hidden flex items-center gap-4">
                        <LanguageSelector />

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white p-2"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass absolute top-full left-0 right-0 border-t border-white/10">
                    <div className="px-4 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-meca-silver hover:text-white transition-colors text-lg font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 bg-meca-red text-white px-6 py-3 rounded-xl font-medium text-center w-full"
                        >
                            {t('nav_cta')}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
