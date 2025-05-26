import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1 className="text-2xl text-center mt-5">🏠 Home Page</h1>;
}

function About() {
  return <h1 className="text-2xl text-center mt-5">📖 About Page</h1>;
}

function App() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
