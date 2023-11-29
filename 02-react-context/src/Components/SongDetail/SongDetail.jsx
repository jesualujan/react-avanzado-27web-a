import { useSongContext } from '@/Hook/useSongContext'

const SongDetail = () => {
  const { selectedSong } = useSongContext()
  return (
    <>
      {
        selectedSong.title
          ? (
            <div>
              <img src={`https://picsum.photos/seed/${selectedSong.id}/300/300`} alt='Portada del Disco' />
              <h4>{selectedSong.title}</h4>
              <h5>{selectedSong.artist}</h5>
              <h6>{selectedSong.year}</h6>
            </div>
            )
          : <h1>Selecciona una canción...</h1>
      }
    </>
  )
}

export default SongDetail
