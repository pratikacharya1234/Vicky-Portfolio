import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-purple-800 text-white shadow-md">
          <div className="container mx-auto py-4 px-6">
            <nav className="flex justify-between items-center">
              <div className="text-xl font-bold">Vicky</div>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="hover:text-purple-200 transition">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-purple-200 transition">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-purple-200 transition">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;