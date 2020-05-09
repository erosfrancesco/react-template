import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';

import useStyle from './style'


export default function Home(props) {  
  const classes = useStyle()
  
  // props.requestLogin({username: 'ciccio', password: 'franco'})
  const fakeLogin = () => props.requestLogin({username: 'ciccio', password: 'franco'})
  return <Paper className={classes.wrapper}>
    <Typography className={classes.content} variant="h2">
      Hello home
    </Typography>

    <Button onClick={props.invalidate}>Invalidate user</Button>
    <Button onClick={fakeLogin}>Foo Login</Button>
  </Paper>
}