"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-blue-800 font-bold text-2xl">日本語</span>
          <span className="ml-2 font-semibold text-gray-800">Nippon CE</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">
            Courses
          </a>
          <a href="#community" className="text-gray-700 hover:text-blue-600 transition-colors">
            Community
          </a>
          <Link to="/home" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-2 px-4 bg-white/80 backdrop-blur-md border-t">
          <div className="flex flex-col space-y-3">
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#courses"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Courses
            </a>
            <a
              href="#community"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Community
            </a>
            <Link
              to="/home"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

