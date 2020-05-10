import Component from './component'
import {connect} from 'react-redux'

import {requestLogin} from '../../actions'

function mapStateToProps(state, props) {
  return { 
  }
}

function mapMethodsToProps(dispatch, props) {
  return { 
    login: user => dispatch(requestLogin(user))
  }
}

export default connect(mapStateToProps, mapMethodsToProps)(Component);