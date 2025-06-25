import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';

function Home() {
  return <h1 className="text-2xl text-center mt-5">🏠 Home Page</h1>;
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
