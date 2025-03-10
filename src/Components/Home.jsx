import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Vicky</h1>
          <h2 className="text-2xl text-gray-700 mb-6">Computer Science Student</h2>
          
          <div className="mb-8">
            <img 
              src="/vivky.jpg" 
              alt="Vicky" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
          
          <p className="text-lg text-gray-600 mb-6">
            Welcome to my personal website! I'm a freshman studying Computer Science at 
            Weber State University, passionate about technology and software development.
          </p>
          
          <div className="flex gap-4">
            <Link to="/about" className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
              Learn More About Me
            </Link>
            <Link to="/contact" className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© {new Date().getFullYear()} Vicky - Computer Science Student at Weber State University</p>
      </footer>
    </div>
  );
};

export default Home;