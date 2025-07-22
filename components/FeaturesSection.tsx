'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Eye, 
  Clock, 
  Zap 
} from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "WooCommerce integration ensures secure, reliable payment processing for all purchases."
    },
    {
      icon: Eye,
      title: "Undetected", 
      description: "Our products are undetected and safe to use, with regular updates to maintain security."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions or concerns."
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Automated delivery system ensures you receive your purchase immediately after payment confirmation."
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
            Advanced <span className="text-accent">Features</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Experience premium service with our comprehensive suite of features designed to make your 
            shopping experience seamless and secure.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10
              }}
              className="group"
            >
              <div className="bg-secondary/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
                {/* Icon */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-accent" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 