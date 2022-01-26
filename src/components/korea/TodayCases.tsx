import React from 'react';

import TitleCard from './TitleCard';
import TodayComparedWithYesterday from './TodayComparedWithYesterday';
import Box from '@mui/material/Box';

import type { TotalData } from '../../types';

interface TodayCasesProps {
  data: [TotalData, TotalData];
}

const TodayCases: React.VFC<TodayCasesProps> = ({ data }) => {
  const { todayCases, critical: todayCritical, todayDeaths, todayRecovered } = data[0];
  const {
    todayCases: yesterdayCases,
    critical: yesterdayCritical,
    todayDeaths: yesterdayDeaths,
    todayRecovered: yesterdayRecovered,
  } = data[1];

  const subCases = todayCases - yesterdayCases;
  const subCritical = todayCritical - yesterdayCritical;
  const subDeaths = todayDeaths - yesterdayDeaths;
  const subRecovered = todayRecovered - yesterdayRecovered;

  return (
    <TitleCard title="일일 현황">
      <Box display="flex" flexDirection="column" gap={1}>
        <TodayComparedWithYesterday title="확진" today={todayCases} sub={subCases} />
        <TodayComparedWithYesterday title="위중증" today={todayCritical} sub={subCritical} />
        <TodayComparedWithYesterday title="사망" today={todayDeaths} sub={subDeaths} />
        <TodayComparedWithYesterday title="회복" today={todayRecovered} sub={subRecovered} />
      </Box>
    </TitleCard>
  );
};

export default TodayCases;
