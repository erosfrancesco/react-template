import Component from './component'
import {connect} from 'react-redux'
import {invalidateUser, protectedTest} from '../../actions'

function mapStateToProps(state, props) {
  return { 
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    invalidate: () => dispatch(invalidateUser()),
    fetchData: () => dispatch(protectedTest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)