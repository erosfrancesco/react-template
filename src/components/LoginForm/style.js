import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    margin: 'auto',
    display: 'flex'
  },
  header: {
    borderRadius: '0',
    paddingTop: '8%',
    background: theme.palette.primary.main
  },
  contentWrapper: {
    background: theme.palette.secondaryBackground
  },
  content: {
    margin: 'auto',
    padding: '17px'
  },
  button: {
    width: '-webkit-fill-available'
  }
}));