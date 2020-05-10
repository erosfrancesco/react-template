import React, { useMemo } from 'react'
import RoutesProvider from '../RoutesProvider'
import HeaderBar from './TopBar'
import Sidebar from './SideNav'

import UserContext from '../UserContext'
import useStyle from './style'

import { MuiThemeProvider } from "@material-ui/core/styles";
import buildTheme from './theme'

export default function Shell(props) {

  const {darkMode, user} = props
  const classes = useStyle()
  const theme = useMemo(() => buildTheme(darkMode), [darkMode]);

  return <UserContext.Provider value={user}>
    <MuiThemeProvider theme={theme}>
      <div style={{background: theme.palette.roundedBackground}}>
        
        <Sidebar />
        <HeaderBar />

        <div className={classes.rounded}>
          <RoutesProvider />
        </div>
      </div>
    </MuiThemeProvider>
  </UserContext.Provider>
}