import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">Home</Link>
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
      </ul>
    </nav>
  )
}