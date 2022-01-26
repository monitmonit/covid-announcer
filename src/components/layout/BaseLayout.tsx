import React from 'react';

import MuiSwitch from './Muiswitch';
import { Box, Container } from '@mui/material';

import Header from './Header';

interface BaseLayoutProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ darkMode, setDarkMode, children }) => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: '960px', minWidth: '768px' }}>
      <Box display="flex" alignItems="center" flexDirection="column" height="100vh">
        <Header />
        <Container sx={{ flexGrow: '1', py: 3 }}>{children}</Container>
      </Box>
      <MuiSwitch checked={darkMode} onChange={() => setDarkMode((p) => !p)} />
    </Container>
  );
};

export default BaseLayout;
