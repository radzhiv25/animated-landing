import { motion } from 'framer-motion'

interface BirdProps {
  src: string
  alt: string
  className?: string
  animationConfig: {
    x: string[]
    y: number[]
    rotate: number[]
    transition: {
      x: {
        duration: number
        repeat: number
        ease: string | readonly [number, number, number, number]
        delay?: number
      }
      y: {
        duration: number
        repeat: number
        ease: readonly [number, number, number, number]
      }
      rotate: {
        duration: number
        repeat: number
        ease: readonly [number, number, number, number]
      }
    }
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
        rotate: animationConfig.rotate,
        transition: animationConfig.transition
      }}
      style={{ zIndex }}
    />
  )
}

export default Bird

