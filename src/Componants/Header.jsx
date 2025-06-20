import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <header className=" fixed top-0 left-0 right-0 z-50 bg-blue-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        {/* زر التحويل بين Burger و X */}
        <button onClick={toggleSidebar} className="flex flex-col justify-center items-center w-10 h-10 group">
          {isSidebarOpen ? (
            // X icon
            <div className="text-3xl font-bold text-white -mt-2">&times;</div>
          ) : (
            // Burger icon
            <>
              <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300 group-hover:translate-x-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300 group-hover:translate-x-1.5"></div>
              <div className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:translate-x-2"></div>
            </>
          )}
        </button>

        <h1 className="text-2xl font-bold tracking-wide">Scientific Research Library</h1>

        <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-1 rounded-l-lg text-blue-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-blue-900 px-4 py-1 rounded-r-lg hover:bg-gray-100 font-medium"
          >
            Search
          </button>
        </form>

        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>


      </div>
    </header>
  );
};

export default Header;
