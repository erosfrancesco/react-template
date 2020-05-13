import { userActions } from '../constants'

const initialState = {
  lastLoginError: null,
  // user: {}
}

export default (state = initialState, action) => {

  switch (action.type) {

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
    // case userActions.loginRequest: {
    //   return {
    //     ...state
    //   }
    // }

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