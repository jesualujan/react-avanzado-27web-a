import logo from '../../assets/react.svg'
import { useState } from 'react'

const SimpleForm = () => {
 //* TODA NUESTRA LÓGICA VA AQUÍ PARA QUE FUNCIONE NUESTRO FORM 
 //? PASO #2: CREAR LOS ESTADOS DONDE GUARDARÉ LA INFORMACIÓN TECLEADA     
   const [email, setEmail] = useState ('')
   const [password, setPassword] = useState('')

   //? PASO #4: Crear la función que se ejecutara al hacer click en el botón de enviar del formulario
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Email: ' ,email ,'Password: ' , password)
    }

  return (
    //? PASO #1: CREAR EL FORMULARIO BASE JSX
    <div className='login'>
    <div className='login-container'>
   <br />
    <img src={logo} alt='logo' />  
      <form onSubmit={handleSubmit}>
        {/* PASO #3: GUARDAR LA INFORMACION EN EL ESTADO DE  */}
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          placeholder='correo@mail.com'
          id='simple-email'
          onChange={(event) => setEmail(event.target.value) }
          value={email}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='simple-password'
          onChange={(event) => setPassword(event.target.value) }
          value={password}
        />
        
        <button type='submit'>
          Iniciar Sesion
        </button>
        
      </form>
    </div>
  </div>
  )
}

export default SimpleForm