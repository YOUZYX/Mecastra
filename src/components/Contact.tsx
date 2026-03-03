'use client';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
    const { t, isRtl } = useLanguage();

    return (
        <section id="contact" className="py-24 bg-meca-darker relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-meca-red uppercase mb-3">{t('contact_badge')}</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t('contact_title')}</h3>
                        <p className="text-gray-400 text-lg">
                            {t('contact_desc')}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-meca-dark rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                    {/* Left Side (Contact Info) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-10 md:p-14 flex flex-col justify-center"
                    >
                        <h4 className="text-3xl font-bold text-white mb-8">{t('contact_info_title')}</h4>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4 group">
                                <div className="p-4 bg-white/5 rounded-full text-meca-red group-hover:bg-meca-red group-hover:text-white transition-colors duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{t('contact_phone')}</h5>
                                    <a href="tel:+212600000000" className={`text-2xl font-bold text-white hover:text-meca-red transition-colors block ${isRtl ? 'dir-ltr text-right' : ''}`}>
                                        +212 6 XX XX XX XX
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-4 bg-white/5 rounded-full text-meca-red group-hover:bg-meca-red group-hover:text-white transition-colors duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{t('contact_address')}</h5>
                                    <p className="text-xl font-bold text-white">{t('contact_address_val')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-4 bg-white/5 rounded-full text-meca-red group-hover:bg-meca-red group-hover:text-white transition-colors duration-300">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{t('contact_hours')}</h5>
                                    <p className="text-xl font-bold text-white">{t('contact_hours_val')}</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/212600000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex justify-center items-center gap-3 w-full py-4 px-8 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)]"
                        >
                            {/* WhatsApp Icon SVG */}
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="fill-current w-6 h-6"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                            </svg>
                            {t('contact_whatsapp')}
                        </a>
                    </motion.div>

                    {/* Right Side (Map) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[500px] lg:h-auto"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.96648615498373!2d-6.925183961342721!3d33.903461397355954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda70d72204c72df%3A0x711d06ca0af6f379!2sMECASTRA!5e0!3m2!1sfr!2sma!4v1772507583062!5m2!1sfr!2sma"
                            className={`w-full h-full border-0 ${isRtl ? 'lg:rounded-l-3xl' : 'lg:rounded-r-3xl'}`}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="MECASTRA Location Map"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
