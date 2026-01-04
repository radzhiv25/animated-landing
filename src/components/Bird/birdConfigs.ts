import type { Transition } from 'framer-motion'

// Animation configuration presets for birds
export const createBirdAnimation = (
  xPath: string[],
  yPath: number[],
  rotatePath: number[],
  durations: { x: number; y: number; rotate: number },
  delay?: number
): {
  x: string[]
  y: number[]
  rotate: number[]
  transition: Transition
} => ({
  x: xPath,
  y: yPath,
  rotate: rotatePath,
  transition: {
    x: {
      duration: durations.x,
      repeat: Infinity,
      ease: "linear" as const,
      ...(delay && { delay })
    },
    y: {
      duration: durations.y,
      repeat: Infinity,
      ease: [0.4, 0, 0.6, 1] as const
    },
    rotate: {
      duration: durations.rotate,
      repeat: Infinity,
      ease: [0.4, 0, 0.6, 1] as const
    }
  } as Transition
})

// Hero section bird configurations
export const heroBirdConfigs = [
  {
    src: 'SimpleBird',
    alt: 'Bird',
    className: 'fixed top-[250px] left-5 w-8 h-8 md:w-12 md:h-12 opacity-60 pointer-events-none hidden sm:block',
    animation: createBirdAnimation(
      ["-100px", "calc(15vw - 100px)"],
      [0, 20, 0, 50, 0],
      [0, 5, -5, 5, 0],
      { x: 15, y: 3, rotate: 2 }
    )
  },
  {
    src: 'UpBirdMess',
    alt: 'Bird with message',
    className: 'fixed top-[280px] right-5 w-10 h-10 md:w-16 md:h-16 opacity-70 pointer-events-none hidden sm:block',
    animation: createBirdAnimation(
      ["calc(85vw + 100px)", "100vw"],
      [0, 10, 0, 30, 0],
      [0, -5, 5, -5, 0],
      { x: 18, y: 4, rotate: 2.5 }
    )
  },
  {
    src: 'DownBirdMess',
    alt: 'Bird with message',
    className: 'fixed top-[300px] left-8 w-9 h-9 md:w-14 md:h-14 opacity-65 pointer-events-none hidden sm:block',
    animation: createBirdAnimation(
      ["-80px", "calc(18vw - 80px)"],
      [0, 40, 0, 10, 0],
      [0, 3, -3, 3, 0],
      { x: 20, y: 3.5, rotate: 2.2 },
      2
    )
  },
  {
    src: 'SimpleBird',
    alt: 'Bird',
    className: 'fixed top-[320px] left-5 w-7 h-7 md:w-10 md:h-10 opacity-55 pointer-events-none hidden sm:block',
    animation: createBirdAnimation(
      ["-50px", "calc(15vw - 50px)"],
      [0, 10, 0, 30, 0],
      [0, 4, -4, 4, 0],
      { x: 12, y: 2.8, rotate: 1.8 },
      1
    )
  },
  {
    src: 'UpBirdMess',
    alt: 'Bird with message',
    className: 'fixed top-[340px] right-5 w-9 h-9 md:w-13 md:h-13 opacity-60 pointer-events-none hidden sm:block',
    animation: createBirdAnimation(
      ["calc(85vw + 50px)", "100vw"],
      [0, 5, 0, 25, 0],
      [0, -4, 4, -4, 0],
      { x: 14, y: 3.2, rotate: 2.1 },
      0.5
    )
  },
  {
    src: 'DownBirdMess',
    alt: 'Bird with message',
    className: 'fixed top-[360px] left-8 w-7 h-7 md:w-11 md:h-11 opacity-50 pointer-events-none hidden sm:block',
    animation: createBirdAnimation(
      ["-60px", "calc(18vw - 60px)"],
      [0, 35, 0, 5, 0],
      [0, 2.5, -2.5, 2.5, 0],
      { x: 16, y: 3.8, rotate: 2.4 },
      1.5
    )
  },
  {
    src: 'SimpleBird',
    alt: 'Bird',
    className: 'fixed top-[380px] right-8 w-8 h-8 md:w-12 md:h-12 opacity-58 pointer-events-none hidden sm:block',
    animation: createBirdAnimation(
      ["calc(85vw + 60px)", "100vw"],
      [0, 5, 0, 20, 0],
      [0, -3, 3, -3, 0],
      { x: 13, y: 2.6, rotate: 1.9 },
      2.5
    )
  },
  {
    src: 'UpBirdMess',
    alt: 'Bird with message',
    className: 'fixed top-[400px] left-12 w-6 h-6 md:w-9 md:h-9 opacity-52 pointer-events-none hidden sm:block',
    animation: createBirdAnimation(
      ["-40px", "calc(18vw - 40px)"],
      [0, 5, 0, 28, 0],
      [0, 3.5, -3.5, 3.5, 0],
      { x: 17, y: 3.4, rotate: 2.3 },
      3
    )
  }
]

// Cloud section bird configurations
export const cloudBirdConfigs = [
  {
    src: 'DownBirdMess',
    alt: 'Bird with message',
    className: 'fixed bottom-40 left-1/4 w-10 h-10 md:w-16 md:h-16 opacity-70 pointer-events-none hidden sm:block',
    animation: {
      opacity: 0.7,
      y: [0, -15, 0, 15, 0],
      x: [0, 10, 0, -10, 0],
      rotate: [0, 2, -2, 2, 0],
      transition: {
        opacity: { delay: 1.8, duration: 0.8 },
        y: { duration: 4, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        x: { duration: 5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        rotate: { duration: 3, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }
      }
    },
    initial: { opacity: 0, y: 50 }
  },
  {
    src: 'UpBirdMess',
    alt: 'Bird with message',
    className: 'fixed bottom-36 right-1/3 w-9 h-9 md:w-14 md:h-14 opacity-65 pointer-events-none hidden sm:block',
    animation: {
      opacity: 0.65,
      y: [0, -12, 0, 12, 0],
      x: [0, -8, 0, 8, 0],
      rotate: [0, -2, 2, -2, 0],
      transition: {
        opacity: { delay: 2, duration: 0.8 },
        y: { duration: 3.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        x: { duration: 4.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        rotate: { duration: 2.8, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }
      }
    },
    initial: { opacity: 0, y: 50 }
  },
  {
    src: 'SimpleBird',
    alt: 'Bird',
    className: 'fixed bottom-44 left-1/2 w-8 h-8 md:w-12 md:h-12 opacity-60 pointer-events-none hidden sm:block',
    animation: {
      opacity: 0.6,
      y: [0, -18, 0, 18, 0],
      x: [0, 12, 0, -12, 0],
      rotate: [0, 3, -3, 3, 0],
      transition: {
        opacity: { delay: 2.2, duration: 0.8 },
        y: { duration: 4.2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        x: { duration: 5.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        rotate: { duration: 3.2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }
      }
    },
    initial: { opacity: 0, y: 50 }
  },
  {
    src: 'DownBirdMess',
    alt: 'Bird with message',
    className: 'fixed bottom-38 right-1/4 w-9 h-9 md:w-13 md:h-13 opacity-55 pointer-events-none hidden sm:block',
    animation: {
      opacity: 0.55,
      y: [0, -10, 0, 10, 0],
      x: [0, -15, 0, 15, 0],
      rotate: [0, -1.5, 1.5, -1.5, 0],
      transition: {
        opacity: { delay: 2.4, duration: 0.8 },
        y: { duration: 3.8, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        x: { duration: 4.8, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        rotate: { duration: 2.6, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }
      }
    },
    initial: { opacity: 0, y: 50 }
  },
  {
    src: 'UpBirdMess',
    alt: 'Bird with message',
    className: 'fixed bottom-42 left-1/6 w-7 h-7 md:w-11 md:h-11 opacity-50 pointer-events-none hidden sm:block',
    animation: {
      opacity: 0.5,
      y: [0, -14, 0, 14, 0],
      x: [0, 18, 0, -18, 0],
      rotate: [0, 2.5, -2.5, 2.5, 0],
      transition: {
        opacity: { delay: 2.6, duration: 0.8 },
        y: { duration: 3.6, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        x: { duration: 5.2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        rotate: { duration: 2.9, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }
      }
    },
    initial: { opacity: 0, y: 50 }
  },
  {
    src: 'SimpleBird',
    alt: 'Bird',
    className: 'fixed bottom-32 right-1/5 w-7 h-7 md:w-10 md:h-10 opacity-58 pointer-events-none hidden sm:block',
    animation: {
      opacity: 0.58,
      y: [0, -16, 0, 16, 0],
      x: [0, -12, 0, 12, 0],
      rotate: [0, -2.2, 2.2, -2.2, 0],
      transition: {
        opacity: { delay: 2.8, duration: 0.8 },
        y: { duration: 4.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        x: { duration: 5.8, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        rotate: { duration: 3.1, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }
      }
    },
    initial: { opacity: 0, y: 50 }
  },
  {
    src: 'DownBirdMess',
    alt: 'Bird with message',
    className: 'fixed bottom-46 left-2/3 w-10 h-10 md:w-15 md:h-15 opacity-62 pointer-events-none hidden sm:block',
    animation: {
      opacity: 0.62,
      y: [0, -13, 0, 13, 0],
      x: [0, 14, 0, -14, 0],
      rotate: [0, 1.8, -1.8, 1.8, 0],
      transition: {
        opacity: { delay: 3, duration: 0.8 },
        y: { duration: 3.9, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        x: { duration: 4.9, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const },
        rotate: { duration: 2.7, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }
      }
    },
    initial: { opacity: 0, y: 50 }
  }
]

