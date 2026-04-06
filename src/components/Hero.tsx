import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { fadeUp, fadeIn, scaleIn, staggerContainer } from '../lib/animations';

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#FDEBD0] to-[#FFF0DC] py-16 md:py-32">
      {/* Background decorative blobs */}
      <div className="absolute -top-20 -start-20 w-72 h-72 bg-[#F5A623]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -end-10 w-96 h-96 bg-[#E8470A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center lg:text-start"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block bg-[#E8470A]/10 text-[#E8470A] text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
          >
            {t.hero.badge}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2C1810] leading-tight mb-6 whitespace-pre-line [dir='ltr']:[letter-spacing:-0.02em]"
          >
            {t.hero.headline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-[#7A4030] max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed"
          >
            {t.hero.subheadline}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://wa.me/96170300022"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E8470A] text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#c73a08] transition-all hover:scale-105 shadow-lg shadow-[#E8470A]/30 text-center"
            >
              {t.hero.cta}
            </a>
            <a
              href="#how-it-works"
              className="border-2 border-[#E8470A] text-[#E8470A] px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#E8470A]/5 transition-colors text-center"
            >
              {t.hero.secondary}
            </a>
          </motion.div>
        </motion.div>

        {/* Product image / visual */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.04, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            {/* Circular background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623] to-[#E8470A] rounded-full opacity-15" />
            {/* Noodle bowl illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[110px] sm:text-[140px] md:text-[180px] leading-none select-none drop-shadow-2xl">
                  🍜
                </div>
                <p className="text-[#2C1810] font-bold text-xl mt-2">
                  {language === 'ar' ? 'حمودة' : 'Hamouda'}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
