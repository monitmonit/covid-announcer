import { Countries, HistoricalData } from './types';

export const mapCountryNameToCode = (country: Countries): string => {
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

export const mapHistoricalData = (rawData: HistoricalData): [string[], number[]] => {
  const labels = [];
  const data = [];

  if (rawData) {
    let lastValue = 0;
    let index = 0;
    for (const [key, value] of Object.entries(rawData.timeline.cases)) {
      if (index > 0) {
        labels.push(key);
        data.push(value - lastValue > 0 ? value - lastValue : 0);
      }
      lastValue = value;
      index++;
    }
  }

  return [labels, data];
};
