'use client'

import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="bg-primary relative pt-24 pb-16" style={{ marginTop: '5px' }}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl lg:text-7xl font-bold leading-tight"
              >
                Unfair <br />
                advantage, <br />
                <span className="text-accent">guaranteed.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-300 max-w-md"
              >
                Stay ahead of the competition with our undetectable software.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px #ff080b'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
              >
                EXPLORE PRODUCTS
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 transition-all duration-300"
              >
                OUR DISCORD
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden bg-secondary/50 backdrop-blur-sm border border-gray-700/50 p-1"
            >
              <div className="aspect-video bg-gray-900 rounded-xl relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 