import { motion } from 'framer-motion'
import type { Transition } from 'framer-motion'

interface BirdProps {
  src: string
  alt: string
  className?: string
  animationConfig: {
    x: string[]
    y: number[]
    rotate: number[]
    transition: Transition
  }
  zIndex?: number
}

const Bird = ({ src, alt, className, animationConfig, zIndex = 0 }: BirdProps) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      animate={{
        x: animationConfig.x,
        y: animationConfig.y,
        rotate: animationConfig.rotate
      }}
      transition={animationConfig.transition}
      style={{ zIndex }}
    />
  )
}

export default Bird

