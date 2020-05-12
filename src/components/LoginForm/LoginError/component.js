import React from 'react';

// import { Typography} from '@material-ui/core';

import useStyle from './style'

export default function LoginError(props) { 
  // const classes = useStyle()
  
  if (!props.error || !props.submitted) {
    return null
  }

  return null
  // <Typography className={classes.content} variant="h5">{props.error}</Typography>
}