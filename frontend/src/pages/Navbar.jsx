import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <div className="text-2xl font-bold text-green-600">KrishiMitra</div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</Link>
            <Link to="/soil" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Soil</Link>
            <Link to="/scheme" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Schemes</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-600 focus:outline-none">
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Home</Link>
          <Link to="/soil" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Soil</Link>
          <Link to="/scheme" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Schemes</Link>
          <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">About</Link>
        </div>
      )}
    </nav>
  );
}
