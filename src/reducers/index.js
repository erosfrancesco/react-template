import { shellActions, userActions } from '../constants'

// import Home from '../views/Home'
// import Login from '../views/Login'
// import NotFound from '../views/NotFound'

const initialState = {
  darkMode: false,
  lastLoginError: null
  // routesMap: [
  //   {path: '/', view: Home, isProtected: true}, 
  //   {path: '/login', view: Login}, 
  //   {path: '*', view: NotFound}
  // ]
}

export default (state = initialState, action) => {
    switch (action.type) {
      //  THEME
      case shellActions.toggleMode: {
        const {darkMode} = state
        const toggled = !darkMode
        return {
          ...state,
          darkMode: toggled
        }
      }

      // SIDENAV
      case shellActions.openSidenav: {
        const sidenavOpen = true
        return {
          ...state,
          sidenavOpen
        }
      }

      case shellActions.closeSidenav: {
        const sidenavOpen = false
        return {
          ...state,
          sidenavOpen
        }
      }

      case shellActions.toggleSidenav: {
        const {sidenavOpen} = state
        const toggled = !sidenavOpen
        return {
          ...state,
          sidenavOpen: toggled
        }
      }

      // USER
      case userActions.save: {
        const {username, password, token} = action.payload
        const user = {username, password, token}

        return {
          ...state,
          user
        }
      }
      case userActions.invalidate: {
        const user = {}

        return {
          ...state,
          user
        }
      }

      // LOGIN
      case userActions.loginRequest: {
        return {
          ...state
        }
      }

      case userActions.loginFailed: {
        const lastLoginError = action.payload
        return {
          ...state,
          lastLoginError
        }
      }

      // DEFAULT
      default: {
        return state;
      }
    }
  }