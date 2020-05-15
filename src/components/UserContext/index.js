import {createContext} from 'react'

export default createContext({
  user: {token: null},
  // getToken: () => this.user.token
})