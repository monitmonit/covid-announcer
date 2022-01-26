import axios from 'axios';
import type { TotalData } from '../types';

interface Queries {
  country: string | number;
  yesterday?: boolean;
  twoDaysAgo?: boolean;
  strict?: boolean;
  allowNull?: boolean;
}
const fetchDataByCountry = async ({
  country,
  yesterday = true,
  twoDaysAgo = false,
  strict = true,
  allowNull = false,
}: Queries): Promise<TotalData> => {
  const response = await axios.get<TotalData>(
    `countries/${country}?yesterdat=${yesterday}&twoDaysAgo=${twoDaysAgo}&strict=${strict}&allowNull=${allowNull}`,
  );

  return response.data;
};

export default fetchDataByCountry;
