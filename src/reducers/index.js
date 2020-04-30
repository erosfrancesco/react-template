import { themeActions } from '../constants'

import Home from '../views/Home'
import NotFound from '../views/NotFound'

const initialState = {
  darkMode: false,
  routes: [{path: '/', view: Home}, {path: '*', view: NotFound}]
}

export default (state = initialState, action) => {
    switch (action.type) {
      case themeActions.toggleMode: {
        const {darkMode} = state
        const toggled = !darkMode
        return {
          ...state,
          darkMode: toggled
        }
      }
      default: {
        return state;
      }
    }
  }