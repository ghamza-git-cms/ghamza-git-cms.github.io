import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { fadeUp, staggerContainer, viewport } from '../lib/animations';

export default function CallToAction() {
  const { t } = useLanguage();

  return (
    <section id="order" className="py-16 md:py-32 bg-gradient-to-br from-[#E8470A] to-[#c73a08] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 start-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 end-0 w-80 h-80 bg-[#F5A623]/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 md:mb-6 leading-tight"
        >
          {t.cta.headline}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl text-white/85 mb-8 md:mb-10 leading-relaxed"
        >
          {t.cta.subtext}
        </motion.p>
        <motion.div variants={fadeUp}>
          <a
            href="https://wa.me/96170300022"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#E8470A] px-8 sm:px-10 py-4 rounded-full font-extrabold text-lg sm:text-xl hover:bg-[#FFF8F0] transition-all hover:scale-105 shadow-2xl"
          >
            {t.cta.button}
          </a>
        </motion.div>
        <motion.p variants={fadeUp} className="text-white/70 text-sm mt-5 md:mt-6">
          {t.cta.note}
        </motion.p>
      </motion.div>
    </section>
  );
}
