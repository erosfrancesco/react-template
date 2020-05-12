import Component from './component'
import {connect} from 'react-redux'
import {toggleSidenav} from '../../../../actions'

function mapStateToProps(state, props) {
  return {};
}

function mapMethodToProps(dispatch, props) {
  return {
    toggle: () => dispatch(toggleSidenav())
  }
}

export default connect(mapStateToProps, mapMethodToProps)(Component);
