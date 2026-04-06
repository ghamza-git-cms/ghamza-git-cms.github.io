import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { fadeUp, viewport } from '../lib/animations';

interface FormState {
  name: string;
  phone: string;
  address: string;
}

export default function Checkout() {
  const { t, language } = useLanguage();
  const { items, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({ name: '', phone: '', address: '' });

  const formatPrice = (amount: number) =>
    `${amount.toLocaleString(language === 'ar' ? 'ar-LB' : 'en-LB')} ${t.shop.currency}`;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <section className="min-h-screen bg-[#FFF8F0] flex flex-col items-center justify-center gap-4 py-24">
        <p className="text-xl font-bold text-[#2C1810]">{t.shop.cartEmpty}</p>
        <Link to="/shop" className="text-[#E8470A] hover:underline font-medium">
          {t.shop.continueShopping}
        </Link>
      </section>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = items
      .map(
        (item) =>
          `• ${item.name} (${item.flavorName}) x${item.quantity} — ${formatPrice(item.price * item.quantity)}`,
      )
      .join('\n');
    const message = encodeURIComponent(
      `Hello! I'd like to place an order:\n\n${lines}\n\nTotal: ${formatPrice(total)}\n\n---\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}`,
    );
    window.open(`https://wa.me/96170300022?text=${message}`, '_blank');
    clearCart();
    navigate('/shop');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="min-h-screen bg-[#FFF8F0] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          to="/cart"
          className="inline-block text-[#7A4030] hover:text-[#E8470A] font-medium text-sm mb-8 transition-colors"
        >
          {t.shop.backToCart}
        </Link>

        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold text-[#2C1810] mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          viewport={viewport}
        >
          {t.shop.checkoutTitle}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order summary */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm h-fit"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            viewport={viewport}
          >
            <h2 className="text-lg font-bold text-[#2C1810] mb-4">{t.shop.orderSummary}</h2>
            <ul className="divide-y divide-[#FDEBD0] mb-4">
              {items.map((item) => (
                <li key={item.key} className="py-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[#2C1810] text-sm">
                      {item.emoji} {item.name}
                    </p>
                    <p className="text-xs text-[#7A4030]">
                      {item.flavorName} × {item.quantity}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-[#E8470A] shrink-0">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between pt-3 border-t border-[#FDEBD0]">
              <span className="font-bold text-[#2C1810]">{t.shop.total}</span>
              <span className="font-extrabold text-[#E8470A]">{formatPrice(total)}</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-5"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            viewport={viewport}
          >
            <h2 className="text-lg font-bold text-[#2C1810]">{t.shop.yourInfo}</h2>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-[#2C1810]">{t.shop.nameLabel}</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="border border-[#FDEBD0] rounded-xl px-4 py-3 text-sm text-[#2C1810] focus:outline-none focus:border-[#E8470A] transition-colors"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-[#2C1810]">{t.shop.phoneLabel}</span>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="border border-[#FDEBD0] rounded-xl px-4 py-3 text-sm text-[#2C1810] focus:outline-none focus:border-[#E8470A] transition-colors"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-[#2C1810]">{t.shop.addressLabel}</span>
              <textarea
                name="address"
                required
                rows={3}
                value={form.address}
                onChange={handleChange}
                className="border border-[#FDEBD0] rounded-xl px-4 py-3 text-sm text-[#2C1810] focus:outline-none focus:border-[#E8470A] transition-colors resize-none"
              />
            </label>

            <button
              type="submit"
              className="mt-2 bg-[#E8470A] text-white py-4 rounded-full font-bold text-base hover:bg-[#c73a08] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#E8470A]/30"
            >
              {t.shop.submitOrder}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
