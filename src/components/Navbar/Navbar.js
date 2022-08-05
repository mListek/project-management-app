import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link--home">Home</Link>
      <ul>
        <li>
          <NavLink to="kanban">Kanban</NavLink>
        </li>
        <li>
          <NavLink to="gantt">Gantt</NavLink>
        </li>
        <li>
          <NavLink to="files">Files</NavLink>
        </li>
        <li>
          <NavLink to="settings">Settings</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}