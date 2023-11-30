// CONTEXT tiene que ver con el manejo de estados globlaes en React
// Es decir, podemos compartir LA MISMA información entre componentes
// de diferente jerarquia en el árbol de componentes

import { createContext, useState, useEffect } from 'react'
import canciones from '@/assets/listaCanciones.json'

// * 1) Crear el contexto
const SongContext = createContext() // va a empezar vacío mi contexto

//* 2) Crear el proveedor del contexto, es decir maneja de donde se obtiene la información
//* y como se comparte.
//* El proveedor es un componente que va a envolver a todos los componentes que quieran
//* consumir el contexto.

// eslint-disable-next-line react/prop-types
function SongProvider ({ children }) {
  const [list, setList] = useState([]) // lista de canciones
  const [loading, setLoading] = useState(true) // ¿está cargando?
  const [selectedSong, setSelectedSong] = useState({}) // canción seleccionada
  const [search, setSearch] = useState('') // Identifica la palabra que pongo en el buscador

  // simulamos la llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false) // cambia a false xk ya están cargando las canciones
    }, 2000)
  }, [])

  // mandamos un objeto
  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong,
    search,
    setSearch
  }

  // el provider es un componente que envuelve a otros componentes
  return (
    // return de un componente
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

export { SongContext, SongProvider }
