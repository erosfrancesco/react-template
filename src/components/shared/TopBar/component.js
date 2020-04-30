import React from 'react';

import {Typography, Toolbar, AppBar} from '@material-ui/core'

import useStyles from './style'

import BurgerMenu from './BurgerButton'
import SearchItem from './SearchTopBar'


export default function HeaderBar() {
  const classes = useStyles();
  
  return <div className={classes.painted}>
    <AppBar className={classes.painted} position="static">
      <Toolbar className={classes.painted}>
        <BurgerMenu />
        <Typography className={classes.title} variant="h6" noWrap>
          Material-UI Top Bar
        </Typography>
        <SearchItem />
      </Toolbar>
    </AppBar>
  </div>
}