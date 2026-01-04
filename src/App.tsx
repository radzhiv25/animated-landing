import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ScrollIndicator from './components/ScrollIndicator'
import CloudBirds from './components/CloudBirds'
import HeroImage from './assets/Cloud.png'

function App() {
  // Cloud animation - popping up from below
  const cloudVariants = {
    hidden: {
      y: 200,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1] as const, // Custom easing for bounce effect
        delay: 0.8
      }
    }
  }

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-[#007AFF]/10 to-white/90 px-2 py-4 md:py-10 text-center flex flex-col items-center justify-start relative overflow-hidden">
        <Navbar />
        <Hero />

        <ScrollIndicator />
        <CloudBirds />

        <motion.img
          src={HeroImage}
          alt="Hero Image"
          className="w-full absolute bottom-0 left-0"
          variants={cloudVariants}
          initial="hidden"
          animate="visible"
          style={{ zIndex: 10 }}
        />
      </div>
    </>
  )
}

export default App
