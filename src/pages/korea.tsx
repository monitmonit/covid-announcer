import React from 'react';

import Box from '@mui/material/Box';
import BaseLayout from '../components/layout/BaseLayout';
import AccumulatedCases from '../components/korea/AccumulatedCases';
import History from '../components/korea/History';
import TodayCases from '../components/korea/TodayCases';
import Vaccine from '../components/korea/Vaccine';

import { useQueries } from 'react-query';
import fetchTotalDataByCountry from '../api/fetchTotalDataByCountry';
import fetchVaccineData from '../api/fetchVaccineData';

const Korea: React.VFC = () => {
  const queryResults = useQueries([
    { queryKey: 'total', queryFn: () => fetchTotalDataByCountry({ country: 'KR' }) },
    { queryKey: 'vaccine', queryFn: fetchVaccineData },
  ]);

  const [total, vaccine] = queryResults;

  const isLoading = queryResults.some((query) => query.isLoading);
  const isError = queryResults.some((query) => query.isError);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <BaseLayout>
      <Box position="relative" display="flex" flexDirection="column" gap={2} height="100%">
        <Box display="flex" gap={2}>
          <TodayCases data={total.data} />
          <AccumulatedCases data={total.data} />
          <Vaccine data={vaccine.data} />
        </Box>
        <Box flexGrow="1">
          <History />
        </Box>
      </Box>
    </BaseLayout>
  );
};

export default Korea;
