// AQUÍ HACEMOS LA LLAMADA A LA API Y USAMOS AXIOS
// LE PASAREMOS UN ENDPOINT PARA QUE TRAIGA LA DATA
//* 1) IMPORTAR AXIOS
import axios from 'axios'

// endpoint
const BASE_URL = 'http://localhost:3000' // esta la podemos cambiar si subimos el github a render =)

// ocupamos mandar información
// registrar un usuario
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
// login
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)

export {
  registerUserService,
  loginUserService
}
