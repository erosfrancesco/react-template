import React, {useState} from 'react';

import { Paper, Button, Typography } from '@material-ui/core';

import useStyle from './style'
import { Redirect } from 'react-router-dom';

function NotFound(props) {
  const classes = useStyle()
  const [mustRedirect, setRedirect] = useState(false)
  const goHome = () => setRedirect(true)

  return <Paper className={classes.wrapper} elevation={0}>

    {mustRedirect ? <Redirect to="/" /> : null}

    <Typography className={classes.content} variant="h2" noWrap>
      404
    </Typography>
    
    <Typography className={classes.content} variant="h6" noWrap>
        John Travolta is looking around, confused
    </Typography>
    
    <Button className={classes.content, classes.button} 
            onClick={goHome} 
            color="primary" 
            variant="contained"> 
            Send him Home
    </Button>
  </Paper>
}

export default NotFound;
