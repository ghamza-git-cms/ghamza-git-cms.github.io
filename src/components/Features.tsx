import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { fadeUp, staggerContainer, viewport } from '../lib/animations';

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-16 md:py-28 bg-[#FFF8F0]">
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
            {t.features.title}
          </h2>
          <p className="text-base sm:text-lg text-[#7A4030] max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {t.features.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-[#FDEBD0] rounded-2xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl mb-4 md:mb-5">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-[#2C1810] mb-2 md:mb-3 group-hover:text-[#E8470A] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-[#7A4030] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
