import './Nav.css'

export default function Nav() {
  return (
    <nav>
      <div className="nav-background">
        <a href="https://makuva-gold.vercel.app/" target='_blank'>
          <img
            src="/ChatGPT Image 17 may 2025, 18_00_01.png"
            alt="Logo de la aplicación"
          />
        </a>
      </div>
      <ul className='nav-list'>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#Routes">Mis Rutas</a></li>
        <li><a href="#Explore">Explorar</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><button type="Session">Iniciar Sesión</button></li>
      </ul>
    </nav>
  )
}