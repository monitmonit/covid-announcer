import axios from 'axios';
import type { HistoricalData } from '../types';

interface Queries {
  country: string | number;
  lastDays?: string | number;
}

const fetchHistoryDataByCountry = async ({
  country,
  lastDays = 'all',
}: Queries): Promise<HistoricalData> => {
  const response = await axios.get<HistoricalData>(`historical/${country}?lastDays=${lastDays}`);

  return response.data;
};

export default fetchHistoryDataByCountry;
