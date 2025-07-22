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
      title: "Paiements Sécurisés",
      description: "L'intégration WooCommerce garantit un traitement sécurisé et fiable des paiements pour tous les achats."
    },
    {
      icon: Eye,
      title: "Indétectable", 
      description: "Nos produits sont indétectables et sûrs à utiliser, avec des mises à jour régulières pour maintenir la sécurité."
    },
    {
      icon: Clock,
      title: "Support 24/7",
      description: "Notre équipe de support dédiée est disponible 24h/24 pour vous aider avec toutes vos questions ou préoccupations."
    },
    {
      icon: Zap,
      title: "Livraison Instantanée",
      description: "Le système de livraison automatisé garantit que vous recevez votre achat immédiatement après confirmation du paiement."
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
            Fonctionnalités <span className="text-accent">Avancées</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez un service premium avec notre suite complète de fonctionnalités conçues pour rendre votre 
            expérience d'achat fluide et sécurisée.
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