import React from 'react';
import { Box, Typography } from '@mui/material';

interface TodayComparedWithYesterdayProps {
  title: string;
  today: number;
  sub: number;
}

const TodayComparedWithYesterday: React.VFC<TodayComparedWithYesterdayProps> = ({
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
        ({Number(sub > 0 ? `+${sub}` : sub).toLocaleString()})
      </Typography>
    </Box>
  );
};

export default TodayComparedWithYesterday;
