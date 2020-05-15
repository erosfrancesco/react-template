import {protectedStub} from '../constants'
import axios from 'axios'

const initialState = {
  data: []
}

export default async function ProtectedReducer(state = initialState, action) {
  switch (action.type) {
    //  THEME
    case protectedStub.fetch: {
      // do things
      try {
        const {token} = action
        const dataUrl = '/users'
        const res = await axios.get(dataUrl, {
          headers: { 'Authorization': 'Bearer ' + token }
        })

        const {data, status} = res;

        if(status === 401) {
          throw new Error('Unauthorized')
        }

        
        console.log("Ok", data)

        return {
          ...state,
          data
        }
      } catch(err) {
        console.error(err)
        // dispatch ??
        return {...state}
      } 
    }

    // DEFAULT
    default: {
      return {
        ...state
      }
    }
  }
}