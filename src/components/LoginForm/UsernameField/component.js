import React from 'react';
import { Input, InputLabel } from '@material-ui/core';

//import useStyle from './style'


export default function UsernameField(props) {
  const id = "username"

  return <div style={{display: 'grid'}}>
    <InputLabel htmlFor={id}>Username</InputLabel>
    <Input id={id}
           autoFocus
           type='text'
           value={props.value}
           onInput={e => props.setValue(e.target.value)}
    />
  </div>
}