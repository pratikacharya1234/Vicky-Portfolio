import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-6">About Me</h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-1">
              <img 
                src="/vivky.jpg" 
                alt="Vicky" 
                className="rounded-full w-full shadow-md object-cover aspect-square"
              />
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Vicky</h2>
              <p className="text-gray-600 mb-4">
                Freshman at Weber State University
              </p>
              <p className="text-gray-600">
                Computer Science Major
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Education</h3>
            <div className="pl-4 border-l-4 border-purple-500">
              <p className="font-medium">Weber State University</p>
              <p className="text-gray-600">Bachelor of Science in Computer Science</p>
              <p className="text-gray-500">2024 - Present</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Skills & Interests</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Programming</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Web Development</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">DataBase</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Programming Language's</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">HTML</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">CSS</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">JavsScript</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Java</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">C</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Link to="/" className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
              Back to Home
            </Link>
            <Link to="/contact" className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
              Contact Me
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

export default About;