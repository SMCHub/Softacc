'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(window.innerWidth >= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const projects = [
    { id: 1, title: 'Projekt 1', description: 'Beschreibung des ersten Projekts' },
    { id: 2, title: 'Projekt 2', description: 'Beschreibung des zweiten Projekts' },
    { id: 3, title: 'Projekt 3', description: 'Beschreibung des dritten Projekts' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-black origin-left z-50"
        style={{ scaleX }}
      />
      <header className="bg-white shadow-sm p-4 sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <h1 className="text-2xl font-bold text-black">Softacc</h1>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-black">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li><a href="#home" className="hover:text-gray-600 transition duration-300">Home</a></li>
              <li><a href="#projects" className="hover:text-gray-600 transition duration-300">Projekte</a></li>
              <li><a href="#contact" className="hover:text-gray-600 transition duration-300">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="home" className="bg-gray-100 text-black py-20">
          <div className="container mx-auto text-center px-4">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Willkommen bei meinen IT Projekten
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Entdecken Sie meine innovativen Lösungen und technischen Errungenschaften in einer Welt voller Möglichkeiten.
            </motion.p>
            <motion.a 
              href="#projects" 
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Projekte ansehen
            </motion.a>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-black">Meine Projekte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div 
                  key={project.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-100 py-20">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8 text-black">Kontaktieren Sie mich</h2>
            <p className="mb-8 max-w-2xl mx-auto">Haben Sie Fragen oder möchten Sie zusammenarbeiten? Ich freue mich von Ihnen zu hören!</p>
            <a 
              href="mailto:kontakt@example.com" 
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
            >
              E-Mail senden
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Meine IT Projekte. Alle Rechte vorbehalten.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400 transition duration-300"><Github /></a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300"><Linkedin /></a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300"><Mail /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
