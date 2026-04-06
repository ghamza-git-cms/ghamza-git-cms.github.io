import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { fadeUp, viewport } from '../lib/animations';

export default function Cart() {
  const { t, language } = useLanguage();
  const { items, removeItem, updateQuantity } = useCart();
  const navigate = useNavigate();

  const formatPrice = (amount: number) =>
    `${amount.toLocaleString(language === 'ar' ? 'ar-LB' : 'en-LB')} ${t.shop.currency}`;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="min-h-screen bg-[#FFF8F0] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" viewport={viewport}>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2C1810] mb-2">
            {t.shop.cartPageTitle}
          </h1>
          <p className="text-[#7A4030] mb-10">{t.shop.cartPageSubtitle}</p>

          {items.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
              <p className="text-[#7A4030] text-lg mb-6">{t.shop.cartEmpty}</p>
              <Link
                to="/shop"
                className="inline-block bg-[#E8470A] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#c73a08] transition-colors"
              >
                {t.shop.continueShopping}
              </Link>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-2xl shadow-sm divide-y divide-[#FDEBD0] mb-6">
                {items.map((item) => (
                  <div key={item.key} className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <span className="text-4xl select-none">{item.emoji}</span>
                    <div className="flex-1">
                      <p className="font-bold text-[#2C1810]">{item.name}</p>
                      <p className="text-sm text-[#7A4030]">{item.flavorName}</p>
                    </div>
                    {/* Qty controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.key, -1)}
                        className="w-8 h-8 rounded-full border border-[#FDEBD0] text-[#2C1810] hover:border-[#E8470A] hover:text-[#E8470A] transition-colors flex items-center justify-center font-bold"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-semibold text-[#2C1810]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, 1)}
                        className="w-8 h-8 rounded-full border border-[#FDEBD0] text-[#2C1810] hover:border-[#E8470A] hover:text-[#E8470A] transition-colors flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-[#E8470A] min-w-[100px] text-right">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-xs text-[#7A4030] hover:text-[#E8470A] transition-colors"
                    >
                      {t.shop.remove}
                    </button>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between mb-8">
                <span className="font-bold text-[#2C1810] text-lg">{t.shop.total}</span>
                <span className="text-2xl font-extrabold text-[#E8470A]">{formatPrice(total)}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="flex-1 text-center border-2 border-[#E8470A] text-[#E8470A] py-3.5 rounded-full font-bold hover:bg-[#E8470A]/5 transition-colors"
                >
                  {t.shop.continueShopping}
                </Link>
                <button
                  onClick={() => navigate('/checkout')}
                  className="flex-1 bg-[#E8470A] text-white py-3.5 rounded-full font-bold hover:bg-[#c73a08] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#E8470A]/30"
                >
                  {t.shop.proceedToCheckout}
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
