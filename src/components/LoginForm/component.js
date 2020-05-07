import React, {useState} from 'react';

import {Button, Paper, Card} from '@material-ui/core';

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

  return <Card className={classes.wrapper}>
    <Paper elevation={0} variant="outlined" className={classes.header}>
      <Paper elevation={0} className={classes.contentWrapper}>
        <form onSubmit={submit} className={classes.content}>
          <UsernameField value={username} setValue={setUsername}className={classes.content} />
          <br/>
          <PasswordField value={password} setValue={setPassword} className={classes.content} />
          <br/>

          <Button className={classes.button} 
                  color="primary" 
                  type="submit"
                  variant="outlined"
          > Log In </Button>
        </form>
      </Paper>
    </Paper>
  </Card>
}