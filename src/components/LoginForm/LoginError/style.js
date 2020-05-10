import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  content: {
    margin: 'auto',
    display: 'table',
    color: theme.isDark ? 'deeppink' : 'red'
  }
}));