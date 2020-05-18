import React, { useMemo } from 'react'
import { Box } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'

import RoutesProvider from '../RoutesProvider'
import HeaderBar from './TopBar'
import Sidenav from './SideNav'

import UserContext from '../UserContext'
import useStyle from './style'

import buildTheme from './theme'

export default function Shell(props) {

  const {darkMode, user} = props
  const classes = useStyle()
  const theme = useMemo(() => buildTheme(darkMode), [darkMode]);

  return <UserContext.Provider value={user}>
    <MuiThemeProvider theme={theme}>

      <Box  display="flex" 
            flexDirection="column" 
            p={0} m={0}
            style={{flex: 'auto'}}
            color={theme.palette.background} 
            bgcolor={theme.palette.inverted}>

        <Box  display="flex" 
              flexDirection="row" 
              p={0} m={0}
              style={{height: '64px'}}
              color={theme.palette.background} 
              bgcolor={theme.palette.primary}>
                <HeaderBar />
        </Box>

        <Box  display="flex" 
              flexDirection="row" 
              p={0} m={0}
              color={theme.palette.background} 
              bgcolor={theme.palette.inverted}>

                <Box  display="flex" 
                      flexDirection="row" 
                      p={0} m={0}
                      style={{maxWidth: '200px', flex: 'auto', display: props.sidenavOpen ? 'flex' : 'none'}}
                      color={theme.palette.background} 
                      bgcolor={theme.palette.primary[500]}>
                        <div style={{
                          flex: 'auto',
                          borderRadius: '0 1.5vh 0 0',
                          background: theme.palette.primary[800]
                          }}>  
                          <Sidenav />
                        </div>
                </Box>

                <Box  display="flex" 
                      flexDirection="row" 
                      p={0} m={0}
                      style={{flex: 'auto'}}
                      bgcolor={theme.palette.primary[500]}>

                      <div className={classes.rounded} style={{flex: 'auto'}}>  
                      <h1> Hello World </h1>
                        {/* <RoutesProvider /> */}
                      </div>
                </Box>
        </Box>
        
      </Box>

    </MuiThemeProvider>
  </UserContext.Provider>
}