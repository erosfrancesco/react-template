import Component from './component'
import {connect} from 'react-redux'
import {invalidateUser} from '../../actions'

function mapStateToProps(state, props) {
  return { 
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    invalidate: () => dispatch(invalidateUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)