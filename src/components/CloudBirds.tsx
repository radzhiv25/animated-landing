import { motion } from 'framer-motion'
import { cloudBirdConfigs } from './Bird/birdConfigs'
import SimpleBird from '../assets/SimpleBird.svg'
import UpBirdMess from '../assets/UpBirdMess.svg'
import DownBirdMess from '../assets/DownBirdMess.svg'

const birdImages: Record<string, string> = {
  SimpleBird,
  UpBirdMess,
  DownBirdMess
}

const CloudBirds = () => {
  return (
    <>
      {cloudBirdConfigs.map((config, index) => {
        const src = birdImages[config.src] || SimpleBird
        return (
          <motion.img
            key={`cloud-bird-${index}`}
            src={src}
            alt={config.alt}
            className={config.className}
            initial={config.initial}
            animate={config.animation}
            style={{ zIndex: 15 }}
          />
        )
      })}
    </>
  )
}

export default CloudBirds

