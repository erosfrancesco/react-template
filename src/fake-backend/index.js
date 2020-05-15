import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import API from './api-mock'

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/users').reply(200, {
  users: API.getUsers()
})
// Mock any POST request to /users/login
.onPost('/users/login').reply(200, {
  user: API.getUser()
});
  
export default mock