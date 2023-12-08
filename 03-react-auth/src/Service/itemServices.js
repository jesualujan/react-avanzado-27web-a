import axios from 'axios'

const BASE_URL = 'http://localhost:3000' // esta la podemos cambiar si subimos el github a render =)

const getAllItemsService = () => axios.get(`${BASE_URL}/items`)
const getOneItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)
const createItemService = (data, jwtToken) => axios.post(`${BASE_URL}/items`, data,
  { headers: { Authorization: `Bearer ${jwtToken}` } })

export {
  getAllItemsService,
  getOneItemService,
  createItemService
}
