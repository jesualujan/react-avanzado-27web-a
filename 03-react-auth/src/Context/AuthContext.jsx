// LA RECETA ES LA MISMA O SIMILAR A LO QUE VIMOS EN LA SESIÓN 02-react-context
// useState -> un estado que me diga si estoy logeado
// useEffecct -> para revisar si hay un token y me lo cargue a mi estado
import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// * 1) Crear el contexto
const AuthContext = createContext() // va a empezar vacío mi contexto

//* 2). Crear el proveedor del contexto, es decir maneja de donde se obtiene la información
// El proveedor es un componente que va a envolver a todos los componentes

// eslint-disable-next-line react/prop-types
function AuthProvider ({ children }) {
  const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado/logeado? si o no
  // ¿Como decodificamos el payload?
  const [userPayload, setUserPayload] = useState(null) // jwt payload decodificado - datos del usuario

  const login = (token) => {
    // guardamos el token en el localStorage del navegador
    // este dato permance aún si el navegador se cierra y se vuelve a abrir.
    localStorage.setItem('token', token)
    const decode = jwtDecode(token) // decodifica el payload del token
    setUserPayload(decode)
    setIsAuth(true) // ya iniciamos sesión? SI
  }

  const logout = () => {
    // Eliminamos el token del localStorage del navegador
    localStorage.removeItem('token')
    setUserPayload(null) // borro el payload del estado
    setIsAuth(false) // Cerramos sesión / estoy deslogeado.
  }

  useEffect(() => {
    // RECUPERAR EL TOKEN DEL LOCALSTORAGE, si no existe devolvera null
    const token = localStorage.getItem('token') // para cuperar token es getItem, para guardar es setItem
    if (token) {
      const decode = jwtDecode(token) // decodifica el payload del token
      setUserPayload(decode)
      setIsAuth(true)
    }
  }, [])

  // mandamos el objeto
  const data = {
    isAuth,
    userPayload,
    login,
    logout
  }

  // el provider es un componente que envuelve a otros componentes
  return (
  // return de un componente
  // value es el contexto que va a compartir entre todos los componentes
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
