import {protectedStub} from '../constants'

const initialState = {
  data: []
}

export default function ProtectedReducer(state = initialState, action) {
  switch (action.type) {
    //  THEME
    case protectedStub.fetch: {
      return {
        ...state
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