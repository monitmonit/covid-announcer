import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import HomeMenu from './HomeMenu';
import MenuItem from './MenuItem';

//TODO Countires 타입의 요소만 올 수 있도록 바꾸기
const countries = ['KOREA', 'USA', 'INDIA', 'BRAZIL', 'FRANCE', 'UK'];

const Header: React.VFC = () => {
  const mapcountries = (countries: string[]) => {
    return countries.map((country) => <MenuItem key={country} country={`${country}`} />);
  };

  return (
    <Box width="100%">
      <AppBar position="static" color="transparent" elevation={0}>
        <Box display="flex" py={2} px={4} justifyContent="space-between">
          <HomeMenu />
          {mapcountries(countries)}
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
