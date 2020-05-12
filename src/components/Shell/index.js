import Component from './component'
import {connect} from 'react-redux'

function mapStateToProps(state, props) {
  const { darkMode, user, sidenavOpen } = state
  return { darkMode, user, sidenavOpen };
}

export default connect(mapStateToProps)(Component);