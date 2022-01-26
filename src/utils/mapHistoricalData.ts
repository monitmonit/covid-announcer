import { HistoricalData } from '../types';

const mapHistoricalData = (rawData: HistoricalData): [string[], number[]] => {
  const labels = [];
  const data = [];

  if (rawData) {
    let lastValue = 0;
    let index = 0;
    for (const [key, value] of Object.entries(rawData.timeline.cases)) {
      if (index > 0) {
        labels.push(key);
        data.push(value - lastValue);
      }
      lastValue = value;
      index++;
    }
  }

  return [labels, data];
};

export default mapHistoricalData;
