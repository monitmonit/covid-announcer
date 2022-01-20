import React from 'react';
import TitleCard from './TitleCard';
import { Box, Typography } from '@mui/material';

import type { TotalData } from '../../types';

interface TodayCasesProps {
  data: TotalData;
}

const TodayCases: React.VFC<TodayCasesProps> = ({
  data: { todayCases, critical, todayDeaths, todayRecovered },
}) => {
  return (
    <TitleCard title="일일 현황">
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography>확진: {todayCases}</Typography>
        <Typography>위중증: {critical}</Typography>
        <Typography>사망: {todayDeaths}</Typography>
        <Typography>회복: {todayRecovered}</Typography>
      </Box>
    </TitleCard>
  );
};

export default TodayCases;
