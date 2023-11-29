import SongList from '@/Components/SongList/SongList'
import SongDetail from '@/Components/SongDetail/SongDetail'
import './home.css'
import { SongProvider } from '@/Context/SongContext'

const Home = () => {
  return (
    <SongProvider>
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
    </SongProvider>
  )
}

export default Home
