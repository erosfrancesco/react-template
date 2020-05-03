import Component from './component'
import {connect} from 'react-redux'

import {saveUser} from '../../actions'

function mapStateToProps(state, props) {
  return { 
  }
}

function mapMethodsToProps(dispatch, props) {
  return { 
    login: ({password, username}) => dispatch(saveUser({password, username}))
  }
}

export default connect(mapStateToProps, mapMethodsToProps)(Component);