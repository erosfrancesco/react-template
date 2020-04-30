import React from 'react';
import {IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style'


export default function BurgerMenu() {
  const classes = useStyles();

  return <IconButton edge="start" className={classes.burger} aria-label="open drawer">
    <MenuIcon />
  </IconButton>
}
