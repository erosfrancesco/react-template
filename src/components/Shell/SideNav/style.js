import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  content: {
    zIndex: 999,
    position: 'absolute',
    
    maxWidth: '200px',
    height: '100vh',
    
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: theme.palette.primary[700]
  }
}));