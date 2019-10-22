import { createMuiTheme } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: { main: deepOrange[500] },
    secondary: { main: grey[700] },
    type: 'light',
  },
});

export { theme };
