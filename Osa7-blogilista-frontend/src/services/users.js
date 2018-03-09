import axios from 'axios'
const baseUrl = '/api/users'

let token = null

const getAll = () => {
  const request = axios.get(baseUrl + '/users')
  return request.then(response => response.data)
}