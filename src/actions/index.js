import {themeActions, userActions} from '../constants'

// THEME
export const toggleMode = () => ({ type: themeActions.toggleMode })

// USER
export const saveUser = payload => ({ type: userActions.save, payload })
export const invalidateUser = () => ({ type: userActions.invalidate })

// LOGIN
export const requestLogin = payload => ({ type: userActions.loginRequest, payload })