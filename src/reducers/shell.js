import { shellActions } from '../constants'

const initialState = {
  darkMode: false
}

export default function ShellReducer(state = initialState, action) {

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
    // DEFAULT
    default: {
      return state;
    }
  }
}