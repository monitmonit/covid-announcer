import React from 'react';
import { useTheme } from '@emotion/react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import styled from '@emotion/styled';

import { LastDays } from './History';

interface LastDaysButtonsProps {
  lastDays: LastDays;
  setLastDays: React.Dispatch<React.SetStateAction<LastDays>>;
}

const LastDaysButtons: React.VFC<LastDaysButtonsProps> = ({ lastDays, setLastDays }) => {
  const theme = useTheme();
  const { Year, Month, Week } = LastDays;

  return (
    /*eslint-disable @typescript-eslint/no-unsafe-call*/
    /*eslint-disable @typescript-eslint/no-unsafe-assignment*/
    <Box position="absolute" top={theme.spacing(1.5)} right={theme.spacing(1.5)}>
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
  color: ${({ lastDays, unit }) => lastDays === unit && '#fff'};
  background-color: ${({ lastDays, unit, theme }) =>
    lastDays === unit && theme.palette.primary.main};
  &:hover {
    background-color: ${({ lastDays, unit, theme }) =>
      lastDays === unit && theme.palette.primary.main};
  }
`;
export default LastDaysButtons;
