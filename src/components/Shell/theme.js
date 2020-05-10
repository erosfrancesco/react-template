import { createMuiTheme } from "@material-ui/core/styles";
import { blue, deepOrange } from '@material-ui/core/colors'

export default darkMode => createMuiTheme({
  isDark: darkMode,
  palette: {
    type: darkMode ? 'dark' : 'light',
    primary: darkMode ? deepOrange : blue,
    roundedBackground: darkMode ? deepOrange[500] : blue[500],
    background: darkMode ? 'white' : 'black',
    inverted: darkMode ? '#303030' : 'white',
  }
})