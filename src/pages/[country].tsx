import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import AccumulatedCases from '../components/korea/AccumulatedCases';
import History from '../components/korea/History';
import TodayCases from '../components/korea/TodayCases';
import Vaccine from '../components/korea/Vaccine';

import { useQueries } from 'react-query';
import fetchTotalDataByCountry from '../api/fetchTotalDataByCountry';
import fetchVaccineData from '../api/fetchVaccineData';

import { Countries } from '../types';

const Korea: React.VFC = () => {
  const [country, setCountry] = useState<Countries>('korea');

  const router = useRouter();
  const { country: countryParams } = router.query;

  useEffect(() => {
    setCountry(countryParams as Countries);
  }, [countryParams]);

  const queryResults = useQueries([
    { queryKey: ['total', country], queryFn: () => fetchTotalDataByCountry(`${country}`) },
    { queryKey: 'vaccine', queryFn: fetchVaccineData },
  ]);

  const [total, vaccine] = queryResults;

  const isLoading = queryResults.some((query) => query.isLoading);
  const isError = queryResults.some((query) => query.isError);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <Box position="relative" display="flex" flexDirection="column" gap={2} height="100%">
      <Box display="flex" gap={2}>
        <TodayCases data={total.data} />
        <AccumulatedCases data={total.data[0]} />
        {country === 'korea' && <Vaccine data={vaccine.data} />}
      </Box>
      <Box flexGrow="1" flexShrink="1">
        <History country={country} />
      </Box>
    </Box>
  );
};

export default Korea;
