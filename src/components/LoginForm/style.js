import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    margin: 'auto',
    display: 'flex'
  },
  header: {
    borderRadius: '0',
    margin: 'auto',
    flexGrow: 1,
    height: '30px',
    width: '-webkit-fill-available'
  },
  content: {
    margin: '17px'
  },
  button: {
    width: '-webkit-fill-available'
  }
}));