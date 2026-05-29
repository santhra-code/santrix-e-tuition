import React from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { motion } from 'framer-motion'

export const ModernFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-2xl"></div>
              <span className="text-2xl font-bold">Santrix</span>
            </div>
            <p className="text-gray-400">Transforming education through personalized learning experiences.</p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <motion.button whileHover={{ scale: 1.2 }} className="text-primary hover:text-accent transition-colors">
                <FiFacebook size={20} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} className="text-primary hover:text-accent transition-colors">
                <FiTwitter size={20} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} className="text-primary hover:text-accent transition-colors">
                <FiLinkedin size={20} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} className="text-primary hover:text-accent transition-colors">
                <FiInstagram size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Courses</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Teachers</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Pricing</Link></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3 hover:text-accent transition-colors cursor-pointer">
                <FiMail size={18} className="text-primary" />
                support@santrix.com
              </li>
              <li className="flex items-center gap-3 hover:text-accent transition-colors cursor-pointer">
                <FiPhone size={18} className="text-primary" />
                +1 (555) 000-0000
              </li>
              <li className="flex items-center gap-3 hover:text-accent transition-colors cursor-pointer">
                <FiMapPin size={18} className="text-primary" />
                123 Learning St, NY
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 mb-12 border border-primary/20"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">Get exclusive tips, courses, and updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-dark to-accent text-white font-semibold hover:shadow-glow transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Santrix E-Tuitions. All rights reserved. | Crafted with ❤️ for education.</p>
        </div>
      </div>
    </footer>
  )
}
