import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRoute, faMagnifyingGlassLocation, faCircleInfo, faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Sidebar from './Sidebar'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => setMenuOpen(!menuOpen)

  return (
    <nav>
      <FontAwesomeIcon 
        icon={faBars} 
        className='nav-burguer' 
        onClick={handleMenuToggle}
        aria-label='Abrir menú de navegación'
        tabIndex={0}
        role='button'
      />
      <Sidebar open={menuOpen} onClose={handleMenuToggle}>
        <ul className="sidebar-list">
          <li><a href="#home"><FontAwesomeIcon icon={faHouse} /> Inicio</a></li>
          <li><a href="#Routes"><FontAwesomeIcon icon={faRoute} /> Mis Rutas</a></li>
          <li><a href="#Explore"><FontAwesomeIcon icon={faMagnifyingGlassLocation} /> Explorar</a></li>
          <li><a href="#about"><FontAwesomeIcon icon={faCircleInfo} /> Acerca de</a></li>
          <li><button type="Session">Iniciar Sesión</button></li>
        </ul>
      </Sidebar>
      <div className="nav-background">
        <a href="https://makuva-gold.vercel.app/" target='_blank'>
          <img
            src="/ChatGPT Image 17 may 2025, 18_00_01.png"
            alt="Logo de la aplicación"
          />
        </a>
      </div>
      {/* El menú horizontal puede ocultarse en mobile si lo deseas */}
      <ul className={`nav-list${menuOpen ? ' nav-list--open' : ''}`}>
        <li><a href="#home"><FontAwesomeIcon icon={faHouse} /> Inicio</a></li>
        <li><a href="#Routes"><FontAwesomeIcon icon={faRoute} /> Mis Rutas</a></li>
        <li><a href="#Explore"><FontAwesomeIcon icon={faMagnifyingGlassLocation} /> Explorar</a></li>
        <li><a href="#about"><FontAwesomeIcon icon={faCircleInfo} /> Acerca de</a></li>
        <li><button type="Session">Iniciar Sesión</button></li>
      </ul>
    </nav>
  )
}