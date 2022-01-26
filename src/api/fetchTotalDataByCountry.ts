import axios from 'axios';
import type { TotalData } from '../types';

const fetchDataByCountry = async (country: string): Promise<[TotalData, TotalData]> => {
  const [response1, response2] = await Promise.all([
    axios.get<TotalData>(`countries/${country}`),
    axios.get<TotalData>(`countries/${country}?yesterday=true`),
  ]);

  return [response1.data, response2.data];
};

export default fetchDataByCountry;
