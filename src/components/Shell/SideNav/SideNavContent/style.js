import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingLeft: 18,
    // fontSize: '0.8rem',
    background: theme.palette.primary.main,
    color: theme.palette.background,
  },
  // item: {
  //   flex: 1,
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  // }
}));