import {combineReducers} from 'redux'
import user from './user'
import shell from './shell'
import fooFetch from './fooFetch'

// import Home from '../views/Home'
// import Login from '../views/Login'
// import NotFound from '../views/NotFound'
// routesMap: [
//   {path: '/', view: Home, isProtected: true}, 
//   {path: '/login', view: Login}, 
//   {path: '*', view: NotFound}
// ]

export default combineReducers({shell, user, fooFetch})