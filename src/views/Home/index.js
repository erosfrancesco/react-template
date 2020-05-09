import Component from './component'
import {connect} from 'react-redux'
import {invalidateUser, requestLogin} from '../../actions'

function mapStateToProps(state, props) {
  return { 
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    requestLogin: (payload) => dispatch(requestLogin(payload)),
    invalidate: () => dispatch(invalidateUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)