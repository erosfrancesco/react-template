import Component from './component'
import {connect} from 'react-redux'


// APP LOGIC
function mapStateToProps(state, props) {
  return { 
    darkMode: state.darkMode
  };
}


// EXPORT
export default connect(mapStateToProps)(Component);