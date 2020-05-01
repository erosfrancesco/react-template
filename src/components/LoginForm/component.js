import React, {useState} from 'react';

import {Button, Paper} from '@material-ui/core';

import useStyle from './style'
import PasswordField from './PasswordField'
import UsernameField from './UsernameField';

export default function LoginForm(props) { 
  const classes = useStyle()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const submit = e => {
    e.preventDefault();
    props.login({password, username})
  }

  return <Paper variant="outlined" className={classes.wrapper}>
    <Paper className={classes.inner} elevation={0}>
      <form onSubmit={submit} className={classes.content}>
        <UsernameField value={username} setValue={setUsername}className={classes.content} />
        <br/>
        <PasswordField value={password} setValue={setPassword} className={classes.content} />
        <br/>

        <Button className={classes.button} 
                color="primary" 
                type="submit"
                variant="outlined"
        > login </Button>
      </form>
    </Paper>

  </Paper>
}