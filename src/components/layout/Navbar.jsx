// src/components/ui/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useAuth, SignOutButton } from '@clerk/clerk-react';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const { isSignedIn } = useAuth();

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) closeDropdown();
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) closeMobileMenu();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/Dhwani-logo.png" alt="Dhwani Logo" className="h-14 mr-2" />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700">
            {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/home" className="text-gray-700 hover:text-orange-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-600">About</Link>
          <Link to="/team" className="text-gray-700 hover:text-orange-600">Team</Link>
          <Link to="/contact" className="text-gray-700 hover:text-orange-600">Contact</Link>

          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="text-gray-700 hover:text-orange-600 flex items-center">
              Explore
              <svg className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-64 bg-white border rounded-md shadow-lg">
                <Link to="/ai-translator" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-orange-600">Real-Time Speech</Link>
                <Link to="/legal-translator" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-orange-600">Document Translation</Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-4">
          {isSignedIn ? (
            <SignOutButton>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full">Sign Out</button>
            </SignOutButton>
          ) : (
            <>
              <Link to="/sign-in" className="text-gray-700 hover:text-orange-600">Sign in</Link>
              <Link to="/sign-up" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full">Sign up</Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t shadow-md`}>
        <div className="px-6 py-4">
          <Link to="/home" className="block py-2 text-gray-700 hover:text-orange-600">Home</Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-orange-600">About</Link>
          <Link to="/team" className="block py-2 text-gray-700 hover:text-orange-600">Team</Link>
          <Link to="/contact" className="block py-2 text-gray-700 hover:text-orange-600">Contact</Link>
          <details className="py-2">
            <summary className="text-gray-700 hover:text-orange-600 cursor-pointer">Explore</summary>
            <div className="ml-4">
              <Link to="/ai-translator" className="block py-2 text-gray-700 hover:text-orange-600">Real-Time Speech</Link>
              <Link to="/legal-translator" className="block py-2 text-gray-700 hover:text-orange-600">Document Translation</Link>
            </div>
          </details>

          {isSignedIn ? (
            <SignOutButton>
              <button className="block py-2 text-red-600 hover:bg-red-100 w-full text-left">Sign Out</button>
            </SignOutButton>
          ) : (
            <div className="mt-4 flex justify-around">
              <Link to="/sign-in" className="text-gray-700 hover:text-orange-600">Sign in</Link>
              <Link to="/sign-up" className="text-white bg-orange-600 hover:bg-orange-700 py-1 px-4 rounded-full">Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;