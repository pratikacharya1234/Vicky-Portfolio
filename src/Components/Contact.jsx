import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-6">Contact Me</h1>
          
          <div className="text-center py-8">
            <h2 className="text-2xl font-semibold mb-6">Wanna be partners?</h2>
            
            <p className="text-lg text-gray-700 mb-4">
              Let's create something great by becoming partners
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Let's get connected
            </p>
            
            <div className="inline-block bg-purple-100 rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-2">
                <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                  <span className="text-purple-600">📧</span>
                </div>
                <span className="text-lg font-medium">Email me at:</span>
              </div>
              
              <a 
                href="mailto:vivekkapar@mail.weber.edu" 
                className="text-xl text-purple-700 hover:text-purple-900 font-semibold transition"
              >
                vivekkappar@mail.weber.edu
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/" className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
              Back to Home
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

export default Contact;