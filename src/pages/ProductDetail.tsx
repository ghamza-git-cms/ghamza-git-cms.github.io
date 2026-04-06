import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { fadeUp, viewport } from '../lib/animations';

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const { t, language } = useLanguage();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const product = t.shop.products.find((p) => p.id === productId);

  const [selectedFlavorId, setSelectedFlavorId] = useState(product?.flavors[0]?.id ?? '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <section className="min-h-screen bg-[#FFF8F0] flex flex-col items-center justify-center gap-4 py-24">
        <p className="text-2xl font-bold text-[#2C1810]">Product not found.</p>
        <Link to="/shop" className="text-[#E8470A] hover:underline font-medium">
          {t.shop.backToShop}
        </Link>
      </section>
    );
  }

  const selectedFlavor = product.flavors.find((f) => f.id === selectedFlavorId) ?? product.flavors[0];

  const formatPrice = (amount: number) =>
    `${amount.toLocaleString(language === 'ar' ? 'ar-LB' : 'en-LB')} ${t.shop.currency}`;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        flavorId: selectedFlavor.id,
        name: product.name,
        flavorName: selectedFlavor.name,
        emoji: product.emoji,
        price: selectedFlavor.price,
      });
    }
    navigate('/cart');
  };

  return (
    <section className="min-h-screen bg-[#FFF8F0] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          to="/shop"
          className="inline-block text-[#7A4030] hover:text-[#E8470A] font-medium text-sm mb-8 transition-colors"
        >
          {t.shop.backToShop}
        </Link>

        <motion.div
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          viewport={viewport}
        >
          {/* Emoji */}
          <div className="text-8xl md:text-9xl text-center mb-8 select-none">{product.emoji}</div>

          {/* Name + description */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#2C1810] mb-3 text-center">
            {product.name}
          </h1>
          <p className="text-[#7A4030] text-center mb-8 leading-relaxed">{product.description}</p>

          {/* Flavor selector */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-[#2C1810] mb-3">{t.shop.selectFlavor}</p>
            <div className="flex flex-wrap gap-3">
              {product.flavors.map((flavor) => (
                <button
                  key={flavor.id}
                  onClick={() => setSelectedFlavorId(flavor.id)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm border-2 transition-all ${
                    selectedFlavorId === flavor.id
                      ? 'bg-[#E8470A] border-[#E8470A] text-white shadow-md'
                      : 'bg-white border-[#FDEBD0] text-[#2C1810] hover:border-[#E8470A] hover:text-[#E8470A]'
                  }`}
                >
                  {flavor.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <p className="text-2xl font-extrabold text-[#E8470A] mb-8">
            {formatPrice(selectedFlavor.price)}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-10 h-10 rounded-full border-2 border-[#FDEBD0] text-[#2C1810] hover:border-[#E8470A] hover:text-[#E8470A] transition-colors flex items-center justify-center font-bold text-lg"
            >
              −
            </button>
            <span className="text-lg font-bold text-[#2C1810] w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-10 h-10 rounded-full border-2 border-[#FDEBD0] text-[#2C1810] hover:border-[#E8470A] hover:text-[#E8470A] transition-colors flex items-center justify-center font-bold text-lg"
            >
              +
            </button>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#E8470A] text-white py-4 rounded-full font-bold text-base hover:bg-[#c73a08] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#E8470A]/30"
          >
            {t.shop.addToCart}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
