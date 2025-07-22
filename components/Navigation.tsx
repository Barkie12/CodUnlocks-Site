'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Navigation = () => {
  const navItems = [
    'ACCUEIL',
    'PRODUITS', 
    'STATUT',
    'DISCORD',
    'CGU'
  ]

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-6 py-4 bg-primary/90 backdrop-blur-md border-b border-gray-800/50 fixed top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <Image 
            src="/logo.png"
            alt="Logo" 
            width={40} 
            height={40}
            className="mr-3"
          />
          <span className="text-xl font-bold text-white">castrounlocks</span>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.1,
                color: '#ff080b'
              }}
              className="text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
        </div>


      </div>
    </motion.nav>
  )
}

export default Navigation 