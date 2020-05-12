import { createMuiTheme } from "@material-ui/core/styles"
import {mdarkice, mlightteal} from './palette'

export default darkMode => createMuiTheme({
  isDark: darkMode,
  palette: {
    type: darkMode ? 'dark' : 'light',
    primary: darkMode ? mlightteal : mdarkice,
    roundedBackground: darkMode ? mlightteal[500] : mdarkice[500],
    background: darkMode ? 'white' : 'black',
    inverted: darkMode ? '#373737' : 'white',
    secondaryBackground: darkMode ? '#404040' : '#f5f5f5',
  }
})