'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-secondary/80 border-t border-gray-800/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="text-center space-y-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">castrounlocks</h3>
            <p className="text-gray-400 text-lg">Premium gaming enhancement solutions</p>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            <motion.a
              href="#"
              whileHover={{ color: '#ff080b' }}
              className="text-gray-400 hover:text-accent transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#ff080b' }}
              className="text-gray-400 hover:text-accent transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#ff080b' }}
              className="text-gray-400 hover:text-accent transition-colors duration-300"
            >
              Support
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#ff080b' }}
              className="text-gray-400 hover:text-accent transition-colors duration-300"
            >
              Discord
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-800/50"
          >
            <p className="text-gray-500 text-sm mb-4">
              © {currentYear} Castrounlocks. All rights reserved.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-between items-center pt-6 border-t border-gray-800/30"
        >
          <p className="text-gray-500 text-sm">Powered by the community</p>
          
          <motion.a
            href="https://barkie.dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              color: '#ff080b'
            }}
            className="text-gray-500 text-sm hover:text-accent transition-colors duration-300 flex items-center"
          >
            Made with <span className="text-accent mx-1">❤️</span> by barkie.dev
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 