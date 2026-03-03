'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
    const { t, isRtl } = useLanguage();

    const services = [
        {
            title: t('srv1_title'),
            description: t('srv1_desc'),
            image: "https://images.pexels.com/photos/4116193/pexels-photo-4116193.jpeg"
        },
        {
            title: t('srv2_title'),
            description: t('srv2_desc'),
            image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&auto=format&fit=crop"
        },
        {
            title: t('srv3_title'),
            description: t('srv3_desc'),
            image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&auto=format&fit=crop"
        },
        {
            title: t('srv4_title'),
            description: t('srv4_desc'),
            image: "https://https://unsplash.com/fr/photos/homme-faisant-le-plein-dhuile-moteur-sur-le-compartiment-moteur-de-la-voiture-V37iTrYZz2E"
        },
        {
            title: t('srv5_title'),
            description: t('srv5_desc'),
            image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&auto=format&fit=crop"
        }
    ];

    return (
        <section id="services" className="py-24 bg-meca-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-meca-red uppercase mb-3">{t('services_badge')}</h2>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">{t('services_title')}</h3>
                        <p className="text-gray-400 text-lg">
                            {t('services_desc')}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className="group bg-meca-darker rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col h-full"
                        >
                            {/* Image Container with Zoom effect */}
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-meca-red transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-400 mb-6 flex-1">
                                    {service.description}
                                </p>
                                <div className="mt-auto">
                                    <a href="#contact" className="inline-flex items-center text-meca-silver group-hover:text-white font-semibold transition-colors">
                                        {t('services_learn_more')} <ArrowRight className={`w-5 h-5 ${isRtl ? 'mr-2 rotate-180 transform group-hover:-translate-x-1' : 'ml-2 transform group-hover:translate-x-1'} transition-transform`} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
