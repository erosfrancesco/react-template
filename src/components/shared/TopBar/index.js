// THEMING
import Component from './component'
import {connect} from 'react-redux'

// APP LOGIC
function mapStateToProps(state, props) {
  return {};
}


// EXPORT
const HeaderBar = connect(mapStateToProps)(Component);
export default HeaderBar;
