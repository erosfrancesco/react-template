import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import useStyle from './style'


function Home(props) {  
  const classes = useStyle()
  
  return <Paper className={classes.wrapper}>
    <Typography className={classes.content} variant="h2">
      Hello home
    </Typography>
  </Paper>
}

export default Home;
