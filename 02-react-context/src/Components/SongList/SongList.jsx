import { useEffect, useState } from 'react'
import './songlist.css'
import canciones from '@/assets/listaCanciones.json'

const SongList = () => {
  const [list, setList] = useState([]) // lista de canciones
  const [loading, setLoading] = useState(true)

  // simulamos la llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false) // cambia a false xk ya están cargando las canciones
    }, 2000)
  }, [])

  return (
    <section className='row-container'>
      {
            loading
              ? <h2>Cargando...</h2>
              : list.map((song) => (
                <article key={song.id} className='row-song'>
                  <h3>{song.title}</h3>
                  <h3>{song.artist}</h3>
                </article>
              ))
        }
    </section>
  )
}

export default SongList
