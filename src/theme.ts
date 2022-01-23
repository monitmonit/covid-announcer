import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2F74C0',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: '#fff',
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: '#3178C6',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans KR"',
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#D285D7',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans KR", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#EFF3F9',
        },
        a: {
          color: '#000',
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#D285D7',
        },
      },
    },
  },
});

declare module '@emotion/react' {
  interface Theme {
    palette: {
      mode: string;
      primary: {
        main: string;
      };
    };
  }
}
