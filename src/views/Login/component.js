import React from 'react';
import { 
  Paper, Button
} from '@material-ui/core';

import useStyle from './style'
import UserContext from '../../components/UserContext'
import LoginForm from '../../components/LoginForm'
import GoHome from '../../components/GoHome'

export default function Login(props) {  
  const classes = useStyle()
  
  return <Paper className={classes.content}>
    <UserContext.Consumer>
          {
            user => {
              console.log(user)
              if (user.user && user.user.token) {
                return <div>
                  <h4>You're logged</h4>
                  <GoHome />
                  <Button onClick={props.invalidate}>Log out</Button>
                </div>
              } 

              return <LoginForm />
            }
          }
        </UserContext.Consumer>
     
  </Paper>
}
