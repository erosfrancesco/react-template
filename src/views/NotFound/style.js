import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    display: 'grid',
    justifyContent: 'center',
    height: 'calc(100vh - 62px)',
    background: theme.palette.inverted,
    borderRadius: '1.3vh 1.3vh 0 0'
  },
  content: {
    flexGrow: 1,
    margin: 'auto'
  },
  button: {
    margin: 'auto'
  }
}));