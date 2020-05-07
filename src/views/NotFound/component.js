import React from 'react';

import { Paper, Typography } from '@material-ui/core';
import useStyle from './style'
import GoHome from '../../components/GoHome'

export default function NotFound(props) {
  const classes = useStyle()

  return <Paper className={classes.wrapper} elevation={0}>
    <Typography className={classes.content} variant="h2" noWrap>
      404
    </Typography>
    
    <Typography className={classes.content} variant="h6" noWrap>
        John Travolta is looking around, confused
    </Typography>
    
    <GoHome label="Send him home" />
  </Paper>
}