import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddPlayer from '../componentes/AddPlayer';
import EditPlayer from '../componentes/EditPlayer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPlayer />} />
        <Route path="/edit/:id" element={<EditPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;

