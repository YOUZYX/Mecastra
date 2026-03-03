'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=1920&auto=format&fit=crop"
                    alt="Modern Auto Repair Shop"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-meca-darker/80 mix-blend-multiply"></div>
                {/* Gradient fade to bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-meca-darker via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        {t('hero_title_1')} <span className="text-meca-red">{t('hero_title_2')}</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-light">
                        {t('hero_subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 bg-meca-red hover:bg-meca-red-hover text-white rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(255,59,48,0.6)] transform hover:-translate-y-1"
                        >
                            {t('hero_cta_primary')}
                        </a>
                        <a
                            href="#services"
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-full font-semibold transition-all transform hover:-translate-y-1"
                        >
                            {t('hero_cta_secondary')}
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-sm text-gray-400 uppercase tracking-widest">{t('hero_scroll')}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-meca-red to-transparent"></div>
            </motion.div>
        </section>
    );
}
