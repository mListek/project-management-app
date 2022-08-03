import Navbar from './Navbar';
import Files from './pages/Files';
import Gantt from './pages/Gantt';
import Home from './pages/Home';
import Kanban from './pages/Kanban';
import Settings from './pages/Settings';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="kanban" element={<Kanban />} />
          <Route path="gantt" element={<Gantt />} />
          <Route path="files" element={<Files />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
