import './App.css'
import { Home, Dashboard, Login, Secret, Signup } from '@/Pages'
import Header from '@/Components/Header'

function App () {
  return (
    <>
      <Header />
      <p> React Auth</p>
      <Home />
      <Dashboard />
      <Login />
      <Secret />
      <Signup />
    </>
  )
}

export default App
