import '../../assets/styles/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar({ open, onClose }) {
  // Simulación de datos de usuario
  const user = {
    nombre: 'Julian Gutierrez',
    email: 'julian@email.com',
    fecha: new Date().toLocaleDateString(),
  }

  return (
    <aside className={`sidebar${open ? ' sidebar--open' : ''}`}>
      <button className="sidebar__close" onClick={onClose} aria-label="Cerrar menú lateral"><FontAwesomeIcon icon={faClose}/></button>
      <div className="sidebar__user-info">
        <div className="sidebar__avatar">{user.nombre[0]}</div>
        <div>
          <div className="sidebar__user-name">{user.nombre}</div>
          <div className="sidebar__user-email">{user.email}</div>
        </div>
      </div>
      <div className="sidebar__date">{user.fecha}</div>
      <div className="sidebar__search">
        <input type="text" placeholder="Buscar..." />
      </div>
      <div className="sidebar__actions">
        <button className="sidebar__action">Editar perfil</button>
        <button className="sidebar__action">Configurar</button>
        <button className="sidebar__action">Mis rutas</button>
        <button className="sidebar__action">Explorar rutas</button>
        <button className="sidebar__action">Favoritos</button>
        <button className="sidebar__action">Ayuda</button>
      </div>
      <div className="sidebar__divider">
        <button className="sidebar__logout">Cerrar sesión</button>
        <div className="sidebar__info">
          <small>Versión 1.0 · Proyecto React · {user.fecha}</small>
        </div>
      </div>
    </aside>
  )
}
