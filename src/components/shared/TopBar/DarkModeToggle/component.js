import React from 'react';
import {IconButton} from '@material-ui/core'
import Brightness6Icon from '@material-ui/icons/Brightness6';


export default function DarkModeToggle(props) {
  return <IconButton onClick={props.toggleMode} aria-label="toggle dark mode">
    <Brightness6Icon />
  </IconButton>
}
