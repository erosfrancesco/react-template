import Component from './component'
import {connect} from 'react-redux'

function mapStateToProps(state, props) {
  const {shell, user} = state
  const {darkMode, sidenavOpen} = shell

  return { 
    darkMode, 
    sidenavOpen,
    user
  };
}

export default connect(mapStateToProps)(Component);