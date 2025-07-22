'use client'

import { motion } from 'framer-motion'

const ProductsSection = () => {
  const products = [
    {
      name: "BO6/WZ External Chair",
      price: "€6.99",
      description: "External Chair for BO6/WZ with a click of a button.",
      image: "/products/dayz-pro.jpg",
      features: ["Premium Support", "Advanced Features", "Priority Updates"]
    },
    {
      name: "BO6/WZ Unlock All External", 
      price: "€34.99",
      description: "Unlock All External for BO6/WZ with a click of a button.",
      image: "/products/dayz-lite.jpg",
      features: ["Core Features", "Regular Updates", "Basic Support"]
    },
    {
      name: "BO6/WZ Drone Permanent",
      price: "€4.99", 
      description: "Permanent Drone for BO6/WZ with a click of a button.",
      image: "/products/dark-darker.jpg",
      features: ["Dungeon Features", "Loot Detection", "PvP Assistance"]
    },
    {
      name: "Steam & Battlenet Account Generator",
      price: "€3.99",
      description: "Generate Steam & Battlenet Accounts with a click of a button.",
      image: "/products/flea-bot.jpg", 
      features: ["Auto Trading", "Profit Tracking", "Market Analysis"]
    }
  ]

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            FEATURED <span className="text-accent">PRODUCTS</span>
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              className="group"
            >
              <div className="bg-secondary/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 flex flex-col">
                {/* Product Image */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/20">{product.name.split(' ')[0]}</div>
                  </div>
                  <div className="absolute top-4 right-4 text-xs bg-black/50 px-2 py-1 rounded">
                    ★ Castrounlocks
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-gray-400 mr-2">Starting at</span>
                    <span className="text-2xl font-bold text-accent">{product.price}</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {product.description}
                  </p>

                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: 'rgba(255, 8, 11, 0.1)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 border border-accent/50 text-accent font-medium rounded-lg hover:border-accent transition-all duration-300 flex items-center justify-center group mt-auto"
                  >
                    View Details
                    <motion.span 
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection 