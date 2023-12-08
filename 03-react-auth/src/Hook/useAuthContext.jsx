//* 3) CREAR UN HOOK PARA USAR EL CONTEXTO Y CONSUMIR MI CONTEXTO
import { useContext } from 'react'
import { AuthContext } from '@/Context/AuthContext'

// hago el export de una función
export const useAuthContext = () => {
  const context = useContext(AuthContext) // quiero usar mi contexto y esto lo guardo en context
  // si no se crea el contexto manda un error, si es undefined (vacío) lanza un error.
  if (!context) {
    throw new Error('useAuthContext debe ser usado dentro de SongProvider')
  }
  return context
}
