import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#fff',
          backgroundColor: '#000',
        },
      },
    },
  },
});

export default theme;
