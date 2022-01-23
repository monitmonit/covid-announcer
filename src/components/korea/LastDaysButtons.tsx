import React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

import { LastDays } from './History';

interface LastDaysButtonsProps {
  lastDays: LastDays;
  setLastDays: React.Dispatch<React.SetStateAction<LastDays>>;
}

const LastDaysButtons: React.VFC<LastDaysButtonsProps> = ({ lastDays, setLastDays }) => {
  const { Year, Month, Week } = LastDays;

  return (
    <Box position="absolute" top="12px" right="12px">
      <MyButton size="small" lastDays={lastDays} unit={Year} onClick={() => setLastDays(Year)}>
        년
      </MyButton>
      <MyButton size="small" lastDays={lastDays} unit={Month} onClick={() => setLastDays(Month)}>
        월
      </MyButton>
      <MyButton size="small" lastDays={lastDays} unit={Week} onClick={() => setLastDays(Week)}>
        주
      </MyButton>
    </Box>
  );
};

const MyButton = styled(Button)<{ lastDays: LastDays; unit: LastDays }>`
  color: ${(props) => props.lastDays === props.unit && 'white'};
  background-color: ${(props) => props.lastDays === props.unit && props.theme.palette.primary.main};
  &:hover {
    background-color: ${(props) =>
      props.lastDays === props.unit && props.theme.palette.primary.main};
  }
`;
export default LastDaysButtons;
