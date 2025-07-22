'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Doit-on relancer le unlock à chaque redémarrage du jeu?",
      answer: "Oui, mais vous gardez tout! s'il n'est pas relancé, vous perdrez tout!"
    },
    {
      question: "Y a-t-il des risques de Ban?",
      answer: "Le risque zéro n'existe pas, mais nous n'avons eu aucun ban depuis le début, il est mis à jour h24 ! (Verifier bien le status sur le discord)"
    },
    {
      question: "Comment se passe la mise à jour?",
      answer: "Dès qu'il y a une mise à jour du Unlock, ce sera précisé dans le salon #update sur le discord, pas besoin de télécharger à chaque fois le Unlock, la mise à jour se fait automatiquement."
    },
    {
      question: "Puis-je utiliser le unlock sur plusieurs comptes?",
      answer: "Oui bien sûr autant de comptes que vous le souhaitez!"
    },
    {
      question: "Les autres joueurs voient nos items?",
      answer: "Oui, bien sûr, tout le monde voit vos camouflage, vos opérateurs ainsi que tous les items ajoutés!"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            FREQUENTLY <span className="text-accent">ASKED</span> QUESTIONS
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-600/50"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/20 transition-colors duration-300"
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              >
                <span className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-accent" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection 