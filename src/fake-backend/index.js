import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import API from './api-mock'

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/users')
.reply(status => {
   
  // check jwt
  const token = API.validateUserToken()
  if (token && status.headers.Authorization === 'Bearer ' + token) {
    return [200, API.getUsers()]
  }

  return [401, 'Unauthorized']
})
// Mock any POST request to /users/login
.onPost('/users/login').reply(200, API.getUser());  


export default mock