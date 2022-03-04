import React from 'react';
import { Box, Typography } from '@mui/material';
import Orbit from '../components/orbit';

const index = () => {
  return (
    <Box
      position="absolute"
      left="0"
      top="0"
      display="flex"
      height="100vh"
      width="100vw"
      padding="0 5%"
    >
      <Box
        width="55%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        <Typography align="center" fontSize="4.5rem">
          World Covid Announcer
        </Typography>
        <Typography fontSize="1.8rem">Check out the COVID-19 situation around the world</Typography>
      </Box>
      <Box
        display="flex"
        width="45%"
        alignItems="center"
        id="canvasContainer"
        sx={{ cursor: 'pointer' }}
      >
        <Orbit />
      </Box>
    </Box>
  );
};

export default index;
