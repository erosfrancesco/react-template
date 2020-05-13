import React from 'react';

import {Typography, Toolbar, AppBar} from '@material-ui/core'

import useStyles from './style'

import BurgerMenu from './BurgerButton'
import SearchItem from './SearchTopBar'
import DarkModeToggle from './DarkModeToggle'
import UserContext from '../../UserContext'

export default function HeaderBar() {
  const classes = useStyles();
  
  return <AppBar className={classes.painted} position="static" elevation={0}>
    <Toolbar className={classes.painted}>
      <BurgerMenu />
      <Typography className={classes.title} variant="h6" noWrap>
        
        <UserContext.Consumer>
          {
            user => {
              if (user.user && user.user.username) {
                return 'Hello, ' + user.user.username
              } 
              return 'React Boilerplate'
            }
          }
        </UserContext.Consumer>
        
      </Typography>
      <DarkModeToggle />
      <SearchItem />
    </Toolbar>
  </AppBar>
}