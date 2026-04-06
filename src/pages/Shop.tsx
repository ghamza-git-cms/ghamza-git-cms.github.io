import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { fadeUp, staggerContainer, viewport } from '../lib/animations';

export default function Shop() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-[#FFF8F0] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          viewport={viewport}
        >
          <span className="inline-block bg-[#E8470A]/10 text-[#E8470A] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t.shop.available}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C1810] mb-4">
            {t.shop.title}
          </h1>
          <p className="text-base sm:text-lg text-[#7A4030] max-w-xl mx-auto">
            {t.shop.subtitle}
          </p>
        </motion.div>

        {/* Product grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {t.shop.products.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <Link
                to={`/shop/${product.id}`}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="text-7xl md:text-8xl mb-5 text-center select-none">
                  {product.emoji}
                </div>
                <h2 className="text-lg md:text-xl font-bold text-[#2C1810] mb-2">
                  {product.name}
                </h2>
                <p className="text-sm md:text-base text-[#7A4030] leading-relaxed mb-5 flex-1">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-block w-full text-center bg-[#E8470A] text-white px-5 py-2.5 rounded-full font-semibold text-sm group-hover:bg-[#c73a08] transition-all group-hover:scale-105">
                    {t.shop.viewDetails}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

