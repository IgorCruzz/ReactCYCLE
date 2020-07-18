import axios from 'axios'

const api = axios.create({
  baseURL: 'https://reactcycle.herokuapp.com'
})

export default api