import Component from './component'
import {connect} from 'react-redux'

function mapStateToProps(state, props) {
  return { 
  };
}

function mapMethodsToProps(dispatch, props) {
  return {
    login: (username, password) => console.log("Loggin with ", username, password)
  };
}

export default connect(mapStateToProps, mapMethodsToProps)(Component)
