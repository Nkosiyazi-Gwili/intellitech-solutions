import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">IT</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">IntelliTech</h2>
              <span className="text-primary-600 font-medium text-sm">Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Contact
            </a>
            <Link 
              href="/dashboard" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Dashboard
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 pb-6' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-4">
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Contact
            </a>
            <Link 
              href="/dashboard" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300"
            >
              Dashboard Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}