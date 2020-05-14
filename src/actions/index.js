import {shellActions, userActions, protectedStub} from '../constants'

// SHELL
export const toggleMode = () => ({ type: shellActions.toggleMode })
export const closeSidenav = () => ({ type: shellActions.closeSidenav })
export const openSidenav = () => ({ type: shellActions.openSidenav })
export const toggleSidenav = () => ({ type: shellActions.toggleSidenav })

// USER
export const saveUser = payload => ({ type: userActions.save, payload })
export const invalidateUser = () => ({ type: userActions.invalidate })

// LOGIN
export const requestLogin = payload => ({ type: userActions.loginRequest, payload })
export const loginFailed = payload => ({ type: userActions.loginFailed, payload })


// PROTECTED
export const protectedTest = () => ({ type: protectedStub.fetch })