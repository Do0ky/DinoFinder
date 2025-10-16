/* REACT */
import { Routes, Route, Link, useLocation } from 'react-router-dom';
/* PAGES */
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  
  // Get current location to conditionally render header and footer
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="App" id="top">

      {!isLanding && (
        <header className="App-header">
          <div className="App-title">Dino Finder 🦕</div>
          <nav className="App-menu">
            <Link to="/">Landing</Link>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <a href="#">Dinoletter</a>
          </nav>
        </header>
      )}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      {!isLanding && (
        <footer className="App-footer">
          <a href="#top" className="Footer-link">Back to top ↑</a>
          <p>© 2025 Claire Peyre. All rights reserved.</p>
          <p className="Footer-note">Built with React + TypeScript</p>
        </footer>
      )}

    </div>
  );
}

export default App;