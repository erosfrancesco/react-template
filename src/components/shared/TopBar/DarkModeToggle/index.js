import Component from './component'
import {connect} from 'react-redux'
import {toggleMode} from '../../../../actions'


function mapStateToProps(state, props) {
  return {};
}

function mapMethodToProps(dispatch, props) {
  return {
    toggleMode: () => dispatch(toggleMode())
  }
}

export default connect(mapStateToProps, mapMethodToProps)(Component);
