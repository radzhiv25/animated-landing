import Bird from './Bird'
import { heroBirdConfigs } from './Bird/birdConfigs'
import SimpleBird from '../assets/SimpleBird.svg'
import UpBirdMess from '../assets/UpBirdMess.svg'
import DownBirdMess from '../assets/DownBirdMess.svg'

const birdImages: Record<string, string> = {
  SimpleBird,
  UpBirdMess,
  DownBirdMess
}

const HeroBirds = () => {
  return (
    <>
      {heroBirdConfigs.map((config, index) => {
        const src = birdImages[config.src] || SimpleBird
        return (
          <Bird
            key={`hero-bird-${index}`}
            src={src}
            alt={config.alt}
            className={config.className}
            animationConfig={config.animation}
            zIndex={0}
          />
        )
      })}
    </>
  )
}

export default HeroBirds

