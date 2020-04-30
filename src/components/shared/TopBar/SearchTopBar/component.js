import React from 'react';

import {InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style'


export default function BurgerMenu() {
  const classes = useStyles();

  return <div className={classes.search}>
    <div className={classes.searchIcon}>
      <SearchIcon />
    </div>

    <InputBase placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
    />
  </div>
}
