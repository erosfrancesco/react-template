import React, {useState} from 'react';

import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import useStyle from './style'


export default function GoHome(props) {
  const classes = useStyle()
  const [holdOn, setRedirect] = useState(false)
  const goHome = () => setRedirect(true)

  if(holdOn) {
    return <Redirect to="/" />
  }

  return <Button className={classes.content} 
    onClick={goHome} 
    color="primary" 
    variant="contained"> 
    {props.label}
  </Button>
}
