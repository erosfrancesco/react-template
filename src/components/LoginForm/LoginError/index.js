import Component from './component'
import {connect} from 'react-redux'

function mapStateToProps(state, props) {
  return { 
    error: state.lastLoginError
  }
}

export default connect(mapStateToProps)(Component);