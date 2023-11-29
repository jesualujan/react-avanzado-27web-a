import './songlist.css'

const SongList = () => {

  return (
    <section className='row-container'>
      {
            loading
              ? <h2>Cargando...</h2>
              : list.map((song) => (
                <article
                  key={song.id}
                  className='row-song'
                >
                  <h3>{song.title}</h3>
                  <h3>{song.artist}</h3>
                </article>
              ))
        }
    </section>
  )
}

export default SongList
