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

  const casesDiff = todayCases - yesterdayCases;
  const criticalDiff = todayCritical - yesterdayCritical;
  const deathsDiff = todayDeaths - yesterdayDeaths;
  const recoveredDiff = todayRecovered - yesterdayRecovered;

  return (
    <TitleCard title="일일 현황">
      <Box display="flex" flexDirection="column" gap={1}>
        <TodayComparedWithYesterday title="확진" today={todayCases} diff={casesDiff} />
        <TodayComparedWithYesterday title="위중증" today={todayCritical} diff={criticalDiff} />
        <TodayComparedWithYesterday title="사망" today={todayDeaths} diff={deathsDiff} />
        <TodayComparedWithYesterday title="회복" today={todayRecovered} diff={recoveredDiff} />
      </Box>
    </TitleCard>
  );
};

export default TodayCases;
