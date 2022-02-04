import React from 'react';
import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';

interface VaccinePopulationWithRateProps {
  title: string;
  vaccinatedPopulation: number;
  population: number;
}

const VaccinePopulationWithRate: React.VFC<VaccinePopulationWithRateProps> = ({
  title,
  vaccinatedPopulation,
  population,
}) => {
  const theme = useTheme();
  return (
    <Box display="flex" gap={1}>
      <Typography>
        {title}: {vaccinatedPopulation.toLocaleString()}
      </Typography>
      <Typography color={theme.palette.primary.main}>
        (
        {(vaccinatedPopulation / population).toLocaleString('eng', {
          style: 'percent',
          minimumFractionDigits: 2,
        })}
        )
      </Typography>
    </Box>
  );
};

export default VaccinePopulationWithRate;
