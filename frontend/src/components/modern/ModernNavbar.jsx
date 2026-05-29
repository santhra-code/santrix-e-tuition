import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

export const ModernNavbar = () => {
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-2xl transform group-hover:scale-110 transition-transform"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">Santrix</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-primary-dark transition-colors font-medium">Courses</Link>
            <Link to="/" className="text-gray-600 hover:text-primary-dark transition-colors font-medium">Teachers</Link>
            <Link to="/" className="text-gray-600 hover:text-primary-dark transition-colors font-medium">About</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark"></div>
                  <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                  <FiChevronDown size={16} />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-soft-lg py-2 z-50 backdrop-blur-sm">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-primary/10 rounded-lg text-accent font-medium transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="px-6 py-2 text-primary-dark font-semibold hover:text-accent transition-colors">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-dark to-accent text-white font-semibold hover:shadow-glow transition-all hover:scale-105">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-dark"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-up">
            <Link to="/" className="block px-4 py-2 hover:bg-primary/10 rounded-lg text-gray-600 font-medium">Courses</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-primary/10 rounded-lg text-gray-600 font-medium">Teachers</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-primary/10 rounded-lg text-gray-600 font-medium">About</Link>
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="block px-4 py-2 hover:bg-primary/10 rounded-lg text-gray-600 font-medium">Login</Link>
                <Link to="/signup" className="block px-4 py-2 bg-gradient-to-r from-primary-dark to-accent text-white rounded-lg font-medium text-center">Sign Up</Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-50 rounded-lg text-red-600 font-medium"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
