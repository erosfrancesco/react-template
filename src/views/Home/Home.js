import React from 'react';
import { Paper, Button, Typography } from '@material-ui/core';

import useStyle from './style'


function Home(props) {  
  const classes = useStyle()
  
  // eslint-disable-next-line no-sequences
  return <Paper className={classes.background, classes.wrapper}>
    <Typography className={classes.background} 
                variant="h1" 
                noWrap>
      Hello home
    </Typography>

    <Button className={classes.resized} 
            onClick={props.toggleMode} 
            color="primary" 
            variant="contained"> 
            Toggle dark mode 
    </Button>
  </Paper>
}

export default Home;
