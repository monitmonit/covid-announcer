import type { Countries } from '../types';

const mapCountryNameToCode = (country: Countries): string => {
  const countries = {
    korea: 'kr',
    usa: 'usa',
    india: 'in',
    brazil: 'br',
    france: 'fr',
    japan: 'jp',
    uk: 'uk',
  };
  return countries[country];
};

export default mapCountryNameToCode;
