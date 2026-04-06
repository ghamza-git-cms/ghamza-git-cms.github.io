// Self Heating Hot Pot Noodles — Tutorial video
import selfHeatingTutorial from '../assets/products/self_heating_hot_pot_noodles/tutorial.mp4';

// Self Heating Hot Pot Noodles — Sour & Spicy Golden Soup
import sourSpicy1 from '../assets/products/self_heating_hot_pot_noodles/sour_and_spicy_golden_soup/1.jpg';
import sourSpicy2 from '../assets/products/self_heating_hot_pot_noodles/sour_and_spicy_golden_soup/2.jpg';
import sourSpicy3 from '../assets/products/self_heating_hot_pot_noodles/sour_and_spicy_golden_soup/3.jpg';
import sourSpicy4 from '../assets/products/self_heating_hot_pot_noodles/sour_and_spicy_golden_soup/4.jpg';
import sourSpicy5 from '../assets/products/self_heating_hot_pot_noodles/sour_and_spicy_golden_soup/5.jpg';

// Self Heating Hot Pot Noodles — Spicy Clear Oil
import spicyClearOil1 from '../assets/products/self_heating_hot_pot_noodles/spicy_clear_oil/1.jpg';
import spicyClearOil2 from '../assets/products/self_heating_hot_pot_noodles/spicy_clear_oil/2.jpg';
import spicyClearOil3 from '../assets/products/self_heating_hot_pot_noodles/spicy_clear_oil/3.jpg';
import spicyClearOil4 from '../assets/products/self_heating_hot_pot_noodles/spicy_clear_oil/4.jpg';
import spicyClearOil5 from '../assets/products/self_heating_hot_pot_noodles/spicy_clear_oil/5.jpg';

// Self Heating Hot Pot Noodles — Tomato
import tomato1 from '../assets/products/self_heating_hot_pot_noodles/tomato/1.jpg';
import tomato2 from '../assets/products/self_heating_hot_pot_noodles/tomato/2.jpg';
import tomato3 from '../assets/products/self_heating_hot_pot_noodles/tomato/3.jpg';
import tomato4 from '../assets/products/self_heating_hot_pot_noodles/tomato/4.jpg';
import tomato5 from '../assets/products/self_heating_hot_pot_noodles/tomato/5.jpg';

/** productVideos[productId] → product-level tutorial video URL */
export const productVideos: Record<string, string> = {
  'self-heating-hot-pot-noodles': selfHeatingTutorial,
};
export const productImages: Record<string, Record<string, string[]>> = {
  'self-heating-hot-pot-noodles': {
    'sour-and-spicy-golden-soup': [sourSpicy1, sourSpicy2, sourSpicy3, sourSpicy4, sourSpicy5],
    'spicy-clear-oil': [spicyClearOil1, spicyClearOil2, spicyClearOil3, spicyClearOil4, spicyClearOil5],
    tomato: [tomato1, tomato2, tomato3, tomato4, tomato5],
  },
};
