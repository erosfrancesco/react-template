// theme actions
export const shellActions = {
    toggleMode: 'TOGGLE_DARK_MODE',
    closeSidenav: 'CLOSE_SIDE_NAV',
    openSidenav: 'OPEN_SIDE_NAV',
    toggleSidenav: 'TOGGLE_SIDE_NAV'
}

// user actions
export const userActions = {
    save: 'USER_SAVE_TOKEN',
    invalidate: 'INVALIDATE_CURRENT_USER',
    loginRequest: 'USER_SEND_LOGIN_REQUEST',
    loginFailed: 'LOGIN_REQUEST_FAILED'
}

// Protected actions
export const protectedStub = {
    fetch: 'PROTECTED_FETCH_STUB'
}

// store configuration
export const storeConf = {
    persistorKey: 'PERSISTOR-STORAGE-ROOT'
}