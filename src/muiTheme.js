import { createMuiTheme } from '@material-ui/core/styles';
import { green, teal } from '@material-ui/core/colors';

const muiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: teal,
    primary: {
      ...green,
      contrastText: '#FFF',
    },
  },
});

export default muiTheme;
