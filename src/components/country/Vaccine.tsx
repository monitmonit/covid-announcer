import React from 'react';
import TitleCard from './TitleCard';
import VaccinePopulationWithRate from './VaccinePopulationWithRate';
import Box from '@mui/material/Box';

import type { Items } from '../../types';

interface Data extends Items {
  population: number;
}

interface VaccineProps {
  data: Data;
}

const Vaccine: React.VFC<VaccineProps> = ({ data }) => {
  const { firstCnt, secondCnt, thirdCnt } = data.item[2];
  const { population } = data;

  return (
    <TitleCard title="백신 접종 현황">
      <Box display="flex" flexDirection="column" gap={1}>
        <VaccinePopulationWithRate
          title="1차 접종"
          vaccinatedPopulation={+firstCnt.text}
          population={population}
        />
        <VaccinePopulationWithRate
          title="2차 접종"
          vaccinatedPopulation={+secondCnt.text}
          population={population}
        />
        <VaccinePopulationWithRate
          title="3차 접종"
          vaccinatedPopulation={+thirdCnt.text}
          population={population}
        />
      </Box>
    </TitleCard>
  );
};

export default Vaccine;
