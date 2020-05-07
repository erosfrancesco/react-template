import React from 'react';
import { 
  Paper
} from '@material-ui/core';

import useStyle from './style'
import UserContext from '../../components/UserContext'
import LoginForm from '../../components/LoginForm'
import GoHome from '../../components/GoHome'

export default function Login(props) {  
  const classes = useStyle()
  
  return <Paper className={classes.wrapper}>
    <UserContext.Consumer>
          {
            user => {
              if (user && user.token) {
                return <div>
                  <h4>You're logged</h4>
                  <GoHome />
                </div>
              } 

              return <LoginForm />
            }
          }
        </UserContext.Consumer>
     
  </Paper>
}
