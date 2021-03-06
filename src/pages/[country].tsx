import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import BaseLayout from '../components/layout/BaseLayout';
import { CircularProgress, Box } from '@mui/material';
import AccumulatedCases from '../components/country/AccumulatedCases';
import History from '../components/country/History';
import TodayCases from '../components/country/TodayCases';
import Vaccine from '../components/country/Vaccine';

import { useQueries } from 'react-query';
import fetchTotalDataByCountry from '../api/fetchTotalDataByCountry';
import fetchVaccineData from '../api/fetchVaccineData';

import { Countries } from '../types';

const DashBoard: React.VFC = () => {
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

  if (isLoading) return <CircularProgress />;
  if (isError) return <div>Error!</div>;

  return (
    <Box position="relative" display="flex" flexDirection="column" gap={2} height="100%">
      <Box display="flex" gap={2}>
        <TodayCases data={total.data} />
        <AccumulatedCases data={total.data[0]} />
        {country === 'korea' && (
          <Vaccine data={{ ...vaccine.data, population: total.data[0].population }} />
        )}
      </Box>
      <Box flexGrow="1" flexShrink="1">
        <History country={country} />
      </Box>
    </Box>
  );
};

export default DashBoard;
