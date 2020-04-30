import Component from './Home'
import {connect} from 'react-redux'
import {toggleMode} from '../../actions'


// APP LOGIC
function mapStateToProps(state, props) {
  return { 
  };
}

function mapMethodToProps(dispatch, props) {
  return {
    toggleMode: () => dispatch(toggleMode())
  }
}

// EXPORT
const Home = connect(mapStateToProps, mapMethodToProps)(Component);
export default Home;
