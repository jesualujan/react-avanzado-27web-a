import SongList from '@/Components/SongList/SongList'
import SongDetail from '@/Components/SongDetail/SongDetail'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='left'>
        <p>lado Izquierdo</p>
        <SongList />
      </div>
      <div className='right'>
        <p>lado Derecho</p>
        <SongDetail />
      </div>
    </div>
  )
}

export default Home
