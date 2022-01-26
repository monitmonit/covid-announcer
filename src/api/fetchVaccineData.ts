import axios from 'axios';
import convert from 'xml-js';

import type { Items, VaccineData } from '../types';

const fetchVaccineData = async (): Promise<Items> => {
  const response = await axios.get('https://nip.kdca.go.kr/irgd/cov19stats.do?list=all');
  const data = convert.xml2js(response.data as string, {
    compact: true,
    textKey: 'text',
  }) as VaccineData;

  return data.response.body.items;
};

export default fetchVaccineData;
