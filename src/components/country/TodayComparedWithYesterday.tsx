import React from 'react';
import { Box, Typography } from '@mui/material';

interface TodayComparedWithYesterdayProps {
  title: string;
  today: number;
  diff: number;
}

const TodayComparedWithYesterday: React.VFC<TodayComparedWithYesterdayProps> = ({
  title,
  today,
  diff,
}) => {
  return (
    <Box display="flex" gap={1}>
      <Typography>
        {title}: {today.toLocaleString()}
      </Typography>
      <Typography color={diff > 0 ? 'red' : 'green'}>({parseDiff(diff)})</Typography>
    </Box>
  );
};

const parseDiff = (diff: number): string => {
  if (diff > 0) {
    return `+${diff.toLocaleString()}`;
  } else {
    return diff.toLocaleString();
  }
};

export default TodayComparedWithYesterday;
