import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '20px' }}>About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

	<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

