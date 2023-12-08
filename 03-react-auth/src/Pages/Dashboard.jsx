import { useState, useEffect } from 'react'
import { getMeUserServices } from '@/Service/userServices'

const Dashboard = () => {
  // en el estado
  const [userData, setUserData] = useState({}) // vacío
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMeUserServices(token)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Dashboard', error)
      }
    }
    fetchUserData()
  }, [token])

  return (
    <>
      <h3>Bienvido a tu perfil</h3>
      <p> Aca ustedes pueden agregar estilos bootstrap, scss para crearle un card al usuario </p>
      {
        userData?.first_name && <p>{userData.first_name}</p>
      }
      {
        userData?.last_name && <p>{userData.last_name}</p>
      }
      {
        userData?.gender && <p>{userData.gender}</p>
      }
      {
        userData?.email && <p>{userData.email}</p>
      }
      {
        userData?.role && <p>{userData.role}</p>
      }
    </>
  )
}

export default Dashboard
