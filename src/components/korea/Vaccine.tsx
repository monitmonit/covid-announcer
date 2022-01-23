import React from 'react';
import TitleCard from './TitleCard';
import { Box, Typography } from '@mui/material';

import type { Items } from '../../types';

interface VaccineProps {
  data: Items;
}

const Vaccine: React.VFC<VaccineProps> = ({ data }) => {
  const { firstCnt, secondCnt, thirdCnt } = data.item[1];
  return (
    <TitleCard title="백신 접종 현황">
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography>1차 접종: {parseInt(firstCnt.text).toLocaleString()}</Typography>
        <Typography>2차 접종: {parseInt(secondCnt.text).toLocaleString()}</Typography>
        <Typography>3차 접종: {parseInt(thirdCnt.text).toLocaleString()}</Typography>
      </Box>
    </TitleCard>
  );
};

export default Vaccine;
