import React, { useState } from 'react';
import { InputAdornment, Input, InputLabel } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


export default function PasswordField(props) {

  // const [password, setPassword] = useState(props.value)
  const [showPass, setShowPass] = useState(false)
  const id = "password"

  // adornment
  const handleClickShowPassword = () => setShowPass(!showPass);
  const handleMouseDownPassword = e => e.preventDefault();
  const togglePassVisibility = <InputAdornment position="end">
    <IconButton aria-label="toggle password visibility"
      onClick={handleClickShowPassword}
      onMouseDown={handleMouseDownPassword}
    >
      {showPass ? <Visibility /> : <VisibilityOff />}
    </IconButton>
  </InputAdornment>

  return <div style={{display: 'grid'}}>
    <InputLabel htmlFor={id}>Password</InputLabel>
    <Input id={id}
           type={showPass ? 'text' : 'password'}
           value={props.value}
           onInput={e => props.setValue(e.target.value)}
           endAdornment={togglePassVisibility}
    />
  </div>
}