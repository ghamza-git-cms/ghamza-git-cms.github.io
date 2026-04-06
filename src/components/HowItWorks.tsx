import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { fadeUp, staggerContainer, viewport } from '../lib/animations';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-16 md:py-28 bg-gradient-to-br from-[#FDEBD0] to-[#FFF0DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C1810] mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-base sm:text-lg text-[#7A4030] max-w-2xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 start-[calc(16.667%+1.5rem)] end-[calc(16.667%+1.5rem)] h-0.5 bg-gradient-to-r from-[#F5A623] to-[#E8470A]" />

          {t.howItWorks.steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="flex-1 flex flex-col items-center text-center px-4 w-full md:w-auto"
            >
              {/* Step number bubble */}
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#F5A623] to-[#E8470A] flex items-center justify-center mb-5 md:mb-6 shadow-lg shadow-[#E8470A]/25">
                <span className="text-white text-xl md:text-2xl font-extrabold">{step.number}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2C1810] mb-2 md:mb-3">{step.title}</h3>
              <p className="text-sm md:text-base text-[#7A4030] leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
