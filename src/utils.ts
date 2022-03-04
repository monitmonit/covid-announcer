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
  const labels: string[] = [];
  const data: number[] = [];

  if (rawData) {
    const entries = Object.entries(rawData.timeline.cases);
    const initialValue = entries[0][1];
    const dataset = entries.slice(1);

    dataset.reduce((prev, crnt) => {
      labels.push(crnt[0]);
      data.push(crnt[1] - prev);
      return crnt[1];
    }, initialValue);
  }

  return [labels, data];
};
