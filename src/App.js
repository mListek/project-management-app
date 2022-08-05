import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Files from './pages/Files/Files';
import Gantt from './pages/Gantt/Gantt';
import Home from './pages/Home/Home';
import Kanban from './pages/Kanban/Kanban';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import './App.css';

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="kanban" element={<Kanban />} />
        <Route path="gantt" element={<Gantt />} />
        <Route path="files" element={<Files />} />
        <Route path="settings" element={<Settings />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}