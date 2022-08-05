import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link--home">Home</Link>
      <ul>
        <li>
          <NavLink to="kanban" activeClassName="active">Kanban</NavLink>
        </li>
        <li>
          <NavLink to="gantt" activeClassName="active">Gantt</NavLink>
        </li>
        <li>
          <NavLink to="files" activeClassName="active">Files</NavLink>
        </li>
        <li>
          <NavLink to="settings" activeClassName="active">Settings</NavLink>
        </li>
        <li>
          <NavLink to="login" activeClassName="active">Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}