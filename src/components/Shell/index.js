import Component from './component'
import {connect} from 'react-redux'

function mapStateToProps(state, props) {
  const { darkMode, user } = state
  return { darkMode, user };
}

export default connect(mapStateToProps)(Component);