import React from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg"></div>
              <span className="text-xl font-bold">Santrix</span>
            </div>
            <p className="text-gray-400">Learn from the best tutors online</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/" className="hover:text-white transition">Courses</Link></li>
              <li><Link to="/" className="hover:text-white transition">Teachers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <FiMail size={18} />
                support@santrix.com
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={18} />
                +1 (555) 000-0000
              </li>
              <li className="flex items-center gap-2 mt-2">
                <FiMapPin size={18} />
                123 Learning St, NY 10001
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Santrix E-Tuitions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
