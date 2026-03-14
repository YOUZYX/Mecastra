'use client';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-[#050505] py-12 border-t border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="mb-6 flex items-center justify-center">
                    <img
                        src={theme === 'light' ? '/mecastra_light.png' : '/mecastra.png'}
                        alt="MECASTRA Logo"
                        // Conditionally apply the height class based on the theme
                        className={`w-auto object-contain opacity-80 hover:opacity-100 transition-opacity ${theme === 'light' ? 'h-[75px]' : 'h-[60px]'
                            }`}
                    />
                </div>

                <p className="text-gray-600 dark:text-gray-500 text-sm text-center">
                    &copy; {currentYear} MECASTRA {t('footer_rights')}
                </p>
            </div>
        </footer>
    );
}
