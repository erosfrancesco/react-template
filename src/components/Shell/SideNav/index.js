import Component from './component'
import {connect} from 'react-redux'
import {closeSidenav, openSidenav, toggleSidenav} from '../../../actions'

function mapStateToProps(state, props) {
  return {
    isOpen: state.sidenavOpen,
  };
}

function mapMethodToProps(dispatch, props) {
  return {
    close: () => dispatch(closeSidenav()),
    open: () => dispatch(openSidenav()),
    toggle: () => dispatch(toggleSidenav())
  }
}



export default connect(mapStateToProps, mapMethodToProps)(Component);