import { useState } from 'react'
import { motion } from 'framer-motion'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero.jsx'
import Pricing from './components/Pricing.jsx'
import Price from './components/Price.jsx'
import Footer from './components/Footer.jsx'
import Steps from './components/Steps.jsx'
function App() {
  const [count, setCount] = useState(0)

  // Animation variants with smoother transition
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }

  // Scroll-triggered animations with improved viewport settings
  return (
    <>
      <div className="app-container">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={fadeInUp}
          className="section"
        >
          <Hero />
        </motion.section>
        
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={fadeInUp}
          className="section"
        >
          <Pricing />
        </motion.section>
        
        <motion.section
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={fadeInUp}
          className="section"
        >
          <Price />
        </motion.section>
        
        <motion.section
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={fadeInUp}
          className="section"
        >
          <Steps/>
          <motion.section
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={fadeInUp}
          className="section"
        ></motion.section>
          <Footer />
        </motion.section>
      </div>
    </>
  )
}

export default App