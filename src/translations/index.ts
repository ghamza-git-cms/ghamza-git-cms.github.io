import en from './en';
import ar from './ar';

export type Translations = typeof en;
export type Language = 'en' | 'ar';

const translations: Record<Language, Translations> = { en, ar };

export default translations;
