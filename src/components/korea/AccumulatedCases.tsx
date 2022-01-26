import React from 'react';
import TitleCard from './TitleCard';
import { Box, Typography } from '@mui/material';

import type { TotalData } from '../../types';

interface AccumulatedCasesProps {
  data: TotalData;
}

const AccumulatedCases: React.VFC<AccumulatedCasesProps> = ({
  data: { cases, deaths, recovered },
}) => {
  return (
    <TitleCard title="누적 현황">
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography>확진: {cases.toLocaleString()}</Typography>
        <Typography>사망: {deaths.toLocaleString()}</Typography>
        <Typography>완치: {recovered.toLocaleString()}</Typography>
      </Box>
    </TitleCard>
  );
};

export default AccumulatedCases;
