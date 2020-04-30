import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    painted: {
      flexGrow: 1,
      background: theme.palette.primary
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    }
}));