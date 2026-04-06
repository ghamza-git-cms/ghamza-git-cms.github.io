import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2C1810] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-4">
        <span className="text-3xl font-extrabold text-[#F5A623]">{t.footer.brand}</span>
        <p className="text-white/60 text-base">{t.footer.tagline}</p>
        <div className="h-px w-24 bg-white/20 my-2" />
        <p className="text-white/40 text-sm">{t.footer.copy}</p>
      </div>
    </footer>
  );
}
