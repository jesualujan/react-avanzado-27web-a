import './header.scss'
import { NavLink } from 'react-router-dom'
// Documentación de NavLink: https://reactrouter.com/en/main/components/nav-link
// NavLink es un tipo especial de link, que me permite gestionar estilos en función de la ruta activa (isActive)

const Header = () => {
  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }

  return (
    // BEM PARA NOMBRAR O ASIGNAR UN NOMBRE A NUESTRA className
    <nav className='header'> {/* Bloque */}
      <NavLink className='header__logo' to='/'>Logo</NavLink>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/'>Home</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/dashboard'>Dashboard</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/secret'>Secret</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/login'>Loging</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/signup'>Signup</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
