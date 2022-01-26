import React from 'react';
import TitleCard from './TitleCard';
import { Box, Typography } from '@mui/material';

import TodayDataComparedWithYesterday from './TodayDataComparedWithYesterday';

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
        <TodayDataComparedWithYesterday title="확진" today={todayCases} sub={subCases} />
        <TodayDataComparedWithYesterday title="위중증" today={todayCritical} sub={subCritical} />
        <TodayDataComparedWithYesterday title="사망" today={todayDeaths} sub={subDeaths} />
        <TodayDataComparedWithYesterday title="회복" today={todayRecovered} sub={subRecovered} />
      </Box>
    </TitleCard>
  );
};

export default TodayCases;
