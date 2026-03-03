'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="mb-6 flex items-center justify-center gap-2">
                    <span className="text-xl font-bold tracking-widest text-white">MECASTRA</span>
                </div>

                <p className="text-gray-500 text-sm text-center">
                    &copy; {currentYear} MECASTRA {t('footer_rights')}
                </p>
            </div>
        </footer>
    );
}
