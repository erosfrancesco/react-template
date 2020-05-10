import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import useStyle from './style'

export default function Sidebar() {
  const classes = useStyle()

  return <List disablePadding dense className={classes.wrapper}>
    <ListItem button>
      <ListItemText>Home</ListItemText>
    </ListItem>
    <ListItem button>
      <ListItemText>Login</ListItemText>
    </ListItem>
  </List>
}