'use client';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    const features = [
        {
            icon: <UserCheck className="w-8 h-8 text-meca-red" />,
            title: t('about_feat1_title'),
            description: t('about_feat1_desc')
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-meca-red" />,
            title: t('about_feat2_title'),
            description: t('about_feat2_desc')
        },
        {
            icon: <Zap className="w-8 h-8 text-meca-red" />,
            title: t('about_feat3_title'),
            description: t('about_feat3_desc')
        }
    ];

    return (
        <section id="a-propos" className="py-24 bg-meca-darker relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-meca-red uppercase mb-3">{t('about_badge')}</h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">{t('about_title')}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {t('about_desc')}
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 p-3 bg-white/5 rounded-xl border border-white/10">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] hidden lg:block"
                    >
                        <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1000&auto=format&fit=crop"
                                alt="Mechanic working on car"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-meca-darker/20"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden border-4 border-meca-darker shadow-2xl z-10">
                            <img
                                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop"
                                alt="Diagnostic"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute top-1/2 left-[-10%] transform -translate-y-1/2 bg-meca-red text-white p-6 rounded-2xl shadow-xl z-20">
                            <div className="text-4xl font-black mb-1">15+</div>
                            <div className="text-sm font-semibold uppercase tracking-wider" dangerouslySetInnerHTML={{ __html: t('about_years') }}></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
