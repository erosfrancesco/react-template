import React, { useMemo } from 'react';
import RoutesProvider from '../RoutesProvider';
import HeaderBar from '../shared/TopBar'

import UserContext from '../UserContext';
import useStyle from './style'

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, deepOrange } from '@material-ui/core/colors';

export default function Shell(props) {

  const {darkMode, user} = props
  const classes = useStyle()
  const theme = useMemo(
    () => createMuiTheme({
      isDark: darkMode,
      palette: {
        type: darkMode ? 'dark' : 'light',
        primary: darkMode ? deepOrange : blue,
        background: darkMode ? 'white' : 'black',
        inverted: darkMode ? '#303030' : 'white'
      }
    }),
    [darkMode],
  );

  return <MuiThemeProvider theme={theme}>
    <UserContext.Provider value={user}>
      <div className={classes.colored}>
        <HeaderBar />

        <div className={classes.rounded}>
          <RoutesProvider />
        </div>
      </div>
    </UserContext.Provider>
  </MuiThemeProvider>
}