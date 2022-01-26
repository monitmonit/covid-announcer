import axios from 'axios';
import type { TotalData, countries } from '../types';

const fetchDataByCountry = async (country: countries): Promise<[TotalData, TotalData]> => {
  const [response1, response2] = await Promise.all([
    axios.get<TotalData>(`countries/${country}?yesterday=false&strict=false`),
    axios.get<TotalData>(`countries/${country}?yesterday=true&strict=false`),
  ]);
  return [response1.data, response2.data];
};

export default fetchDataByCountry;
