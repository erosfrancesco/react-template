import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  painted: {
    flexGrow: 1,
    justifyContent: 'center',
    display: 'none',
    background: theme.palette.primary,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  background: {
    background: theme.palette.inverted,
  },

  resized: {
    margin: 'auto'
  },

  wrapper: {
    display: 'grid',
    justifyContent: 'center',
    height: 'calc(100vh - 62px)',
    background: theme.palette.inverted,
  }
}));