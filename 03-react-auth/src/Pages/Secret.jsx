import { useAuthContext } from '@/Hook/useAuthContext'

const Secret = () => {
// lo ocupamos puesto que tiene el token decodificado
  const { userPayload } = useAuthContext()
  return (
    <>
      <h1>Mensaje de Bienvenida</h1>
      {
      userPayload?.role === 'ADMIN'
        ? <h2>Hola Admin</h2>
        : <h2>Hola</h2>
    }
      {userPayload?.role === 'ADMIN' && <h2> Saludos Admin</h2>}
      {userPayload?.role === 'CUSTOMER' && <h2> Saludos Customer</h2>}
    </>
  )
}

export default Secret
