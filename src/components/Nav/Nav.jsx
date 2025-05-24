import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRoute, faMagnifyingGlassLocation, faCircleInfo, faBars} from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <nav>
      <FontAwesomeIcon icon={faBars} className='nav-burguer' />
      <div className="nav-background">
        <a href="https://makuva-gold.vercel.app/" target='_blank'>
          <img
            src="/ChatGPT Image 17 may 2025, 18_00_01.png"
            alt="Logo de la aplicación"
          />
        </a>
      </div>
      <ul className='nav-list'>
        <li><a href="#home"><FontAwesomeIcon icon={faHouse} /> Inicio</a></li>
        <li><a href="#Routes"><FontAwesomeIcon icon={faRoute} /> Mis Rutas</a></li>
        <li><a href="#Explore"><FontAwesomeIcon icon={faMagnifyingGlassLocation} /> Explorar</a></li>
        <li><a href="#about"><FontAwesomeIcon icon={faCircleInfo} /> Acerca de</a></li>
        <li><button type="Session">Iniciar Sesión</button></li>
      </ul>
    </nav>
  )
}