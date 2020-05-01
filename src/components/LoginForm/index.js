import Component from './component'
import {connect} from 'react-redux'


// APP LOGIC
function mapStateToProps(state, props) {
  return { 
  };
}

function mapMethodsToProps(dispatch, props) {
  return { 
    login: (e) => {
      try {
        console.log(e)
        alert("Logged in");
      } catch (e) {
        alert(e.message);
      }
    }
  };
}

// EXPORT
export default connect(mapStateToProps, mapMethodsToProps)(Component);