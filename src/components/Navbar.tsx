'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Wrench, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t, isRtl } = useLanguage();

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

    const flags: Record<string, string> = {
        fr: '🇫🇷',
        ar: '🇲🇦',
        en: '🇺🇸',
    };

    const nextLang: Record<string, 'fr' | 'ar' | 'en'> = {
        fr: 'ar',
        ar: 'en',
        en: 'fr'
    };

    const langNames: Record<string, string> = {
        fr: 'العربية',
        ar: 'English',
        en: 'Français'
    };

    const toggleLanguage = () => {
        setLanguage(nextLang[language as string] || 'fr');
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#accueil" className="flex items-center gap-2 group">
                            <div className="p-2 bg-meca-red rounded-lg group-hover:scale-110 transition-transform">
                                <Wrench className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-wider text-white">MECASTRA</span>
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

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 group"
                            aria-label="Toggle language"
                        >
                            <span className="text-xl group-hover:scale-110 transition-transform">{flags[language as string]}</span>
                            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black px-2 py-1 rounded text-white whitespace-nowrap">
                                {langNames[language as string]}
                            </span>
                        </button>

                        <a
                            href="#contact"
                            className="bg-meca-red hover:bg-meca-red-hover text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-[0_0_15px_rgba(255,59,48,0.5)] transform hover:-translate-y-0.5"
                        >
                            {t('nav_cta')}
                        </a>
                    </div>

                    {/* Mobile Menu Button & Language (Mobile) */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-white"
                        >
                            <span className="text-xl">{flags[language as string]}</span>
                        </button>

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
