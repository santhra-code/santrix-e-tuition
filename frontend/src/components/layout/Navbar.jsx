import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../common/Button'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

export const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">Santrix</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Courses</Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Teachers</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                >
                  {user?.name}
                  <FiChevronDown size={18} />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100 rounded">Courses</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100 rounded">Teachers</Link>
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 rounded">Login</Link>
                <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100 rounded">Sign Up</Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded text-red-600"
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
