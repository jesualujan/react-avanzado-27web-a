import logo from '../assets/react.svg'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const ReactHookForm = () => {
    //* NUESTRA LÓGICA | CREACION DEL ESQUEMA DEL FORMULARIO DE USUARIO UTILANZO YUP, PARA VALIDAR NUESTROS CAMPOS 

     const userFormSchema = yup.object({
        firstName: yup.string().required('Escribe tu nombre'),
        lastName: yup.string().required('Escribe tu apellido') ,
        age: yup.number().positive('La edad debe ser un número entero positivo').integer('Ingresa tu edad'),
        password: yup.string().required('No ingresaste una contraseña')
        .min(5, 'La contraseña es muy corta, debe tener al menos 5 caracteres')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/, 
      'La contraseña debe tener al menos 5 caracteres, un número, una letra mayúscula, una letra minúscula y un caracter especial'),
        gender: yup 
        .mixed()
        .oneOf(['M', 'F', 'O'], 'Selecciona tu género')
        .defined(),
     }).required()

  return (
    //* VA TODO NUESTRO FORMULARIO DE REGISTRO EN BASE JSX
    //? Paso #1: Crear el formulario base en JSX
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={() => { }/* HANDLE SUBMIT */}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
        
          <label htmlFor='firstName'>Nombre</label>
          <input
            type='text'
            name='firstName'
            placeholder='Tu Nombre'
            id='firstName'
          />

          <label htmlFor='lastName'>Apellido</label>
          <input
            type='text'
            name='lastName'
            placeholder='Tu Apellido'
            id='lastName'
          />

          <label htmlFor='age'>Edad</label>
          <input
            type='number'
            name='age'
            placeholder='Tu Edad'
            id='age'
          />

          <label htmlFor='gender'>Genero</label>
          <select name='gender' id='gender'>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
          />

          <button type='submit'>
            Registrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReactHookForm


