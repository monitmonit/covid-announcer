import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import HomeMenu from './HomeMenu';
import MenuItem from './MenuItem';

import type { Countries } from '../../types';
const countries: Countries[] = ['korea', 'usa', 'india', 'brazil', 'france', 'uk'];

const Header: React.VFC = () => {
  const mapCountries = (countries: Countries[]) => {
    return countries.map((country) => <MenuItem key={country} country={`${country}`} />);
  };

  return (
    <Box width="100%" zIndex="1">
      <AppBar position="static" color="transparent" elevation={0}>
        <Box display="flex" py={2} px={4} justifyContent="space-between">
          <HomeMenu />
          {mapCountries(countries)}
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
