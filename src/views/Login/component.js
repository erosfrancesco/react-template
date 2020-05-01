import React from 'react';
import { 
  Paper
} from '@material-ui/core';


import useStyle from './style'
import LoginForm from '../../components/LoginForm'


export default function Login(props) {  
  const classes = useStyle()
  
  return <Paper className={classes.wrapper}>
    <LoginForm />   
  </Paper>
}
