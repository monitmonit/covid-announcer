import React from 'react';
import { Box, Typography } from '@mui/material';

interface TodayDataComparedWithYesterdayProps {
  title: string;
  today: number;
  sub: number;
}

const TodayDataComparedWithYesterday: React.VFC<TodayDataComparedWithYesterdayProps> = ({
  title,
  today,
  sub,
}) => {
  return (
    <Box display="flex" gap={1}>
      <Typography>
        {title}: {today.toLocaleString()}
      </Typography>
      <Typography color={sub > 0 ? 'red' : 'dodgerBlue'}>
        ({(sub > 0 ? `+${sub}` : sub).toLocaleString()})
      </Typography>
    </Box>
  );
};

export default TodayDataComparedWithYesterday;
