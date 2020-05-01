import React from 'react';

import {Typography, Toolbar, AppBar} from '@material-ui/core'

import useStyles from './style'

// import BurgerMenu from './BurgerButton'
import SearchItem from './SearchTopBar'
import DarkModeToggle from './DarkModeToggle'


export default function HeaderBar() {
  const classes = useStyles();
  
  return <AppBar className={classes.painted} position="static" elevation={0}>
    <Toolbar className={classes.painted}>
      {/* <BurgerMenu /> */}
      <Typography className={classes.title} variant="h6" noWrap>
        React Boilerplate
      </Typography>
      <DarkModeToggle />
      <SearchItem />
    </Toolbar>
  </AppBar>
}