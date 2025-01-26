import { Link, useLocation } from "react-router-dom"
import "./assets/scss/header.scss"

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="d-flex align-items-center justify-content-between container">
        <div className="logo">
          Ashfatul
        </div>
        <nav>
          <ul className="d-flex gap-4">
            <li><Link to="/" className={`${location.pathname === '/' ? 'active' : ''}`}>Intro</Link></li>
            <li><Link to="/about" className={`${location.pathname === '/about' ? 'active' : ''}`}>About</Link></li>
            <li><Link to="/projects" className={`${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link></li>
            <li><Link to="/contact" className={`${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
