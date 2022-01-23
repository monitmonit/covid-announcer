import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Header from './Header';

interface BaseLayoutProps {
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ setTheme, children }) => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: '960px', minWidth: '768px' }}>
      <Box display="flex" alignItems="center" flexDirection="column" height="100vh">
        <Header />
        <Container sx={{ flexGrow: '1', py: 3 }}>{children}</Container>
      </Box>
      <button
        style={{ position: 'absolute', bottom: ' 32px', right: '32px' }}
        onClick={() => setTheme((p) => !p)}
      >
        on/off
      </button>
    </Container>
  );
};

export default BaseLayout;
