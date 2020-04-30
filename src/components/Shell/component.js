import React, { useMemo } from 'react';
import RoutesProvider from '../RoutesProvider';
import HeaderBar from '../shared/TopBar'

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { 
  blue, deepOrange
} from '@material-ui/core/colors';


function Main(props) {
  const {darkMode} = props

  const theme = useMemo(
    () => createMuiTheme({
      isDark: darkMode,
      palette: {
        type: darkMode ? 'dark' : 'light',
        primary: darkMode ? deepOrange : blue,
        background: darkMode ? 'white' : 'black',
        inverted: darkMode ? 'black' : 'white'
      }
    }),
    [darkMode],
  );

  return <div> 
    <MuiThemeProvider theme={theme}>
      <HeaderBar />
      <RoutesProvider />
    </MuiThemeProvider>
  </div>
}

export default Main;