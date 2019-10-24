import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      black: 'rgba(74, 74, 74, 1)',
      white: 'rgba(255, 255, 255, 1)',
    },
    background: {
      paper: 'rgba(247, 247, 247, 1)',
      default: 'rgba(255, 255, 255, 1)',
    },
    primary: {
      light: 'rgba(255, 140, 51, 1)',
      main: 'rgba(255, 112, 0, 1)',
      dark: 'rgba(178, 78, 0, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(153, 144, 147, 1)',
      main: 'rgba(128, 117, 121, 1)',
      dark: 'rgba(89, 81, 84, 1)',
      contrastText: '#fff',
    },
    error: {
      light: 'rgba(216, 67, 21, 1)',
      main: 'rgba(216, 67, 21, 1)',
      dark: 'rgba(191, 54, 12, 1)',
      contrastText: '#fff',
    },
    text: {
      primary: '#363838',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    overrides: {
      MuiButton: {
        text: {
          '&:hover': {
            backgroundColor: '#BF360C',
          },
        },
      },
    },
  },
});

export { theme };
