import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import HomeMenu from './HomeMenu';
import MenuItem from './MenuItem';

const countries = ['korea', 'japan', 'china', 'mongolia', 'taiwan'];

const Header: React.VFC = () => {
  const mapcountries = (countries: string[]) => {
    return countries.map((country) => <MenuItem key={country} country={`${country}`} />);
  };

  return (
    <Box width="100%">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <HomeMenu />
          {mapcountries(countries)}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
