import { motion } from 'framer-motion'
import { BsApple } from "react-icons/bs"
import HeroBirds from './HeroBirds'

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1] as const
            }
        }
    }

    return (
        <div className="relative w-full">
            {/* Animated Birds - positioned relative to viewport, well below navbar */}
            <HeroBirds />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10"
            >
                <motion.div
                    variants={itemVariants}
                    className="my-6 md:my-10 w-max mx-auto bg-white rounded-full py-1.5 px-2 flex items-center gap-2"
                >
                    <motion.div
                        className="bg-[#007AFF] text-white p-2 border flex items-center gap-1 rounded-full"
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <span className="bg-white size-1 rounded-full"></span>
                        <span className="bg-white size-1 rounded-full"></span>
                        <span className="bg-white size-1 rounded-full"></span>
                    </motion.div>

                    <p className="text-[#007AFF] text-xs md:text-sm lg:text-base">#1 iMessage Automation tool</p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="w-full md:w-2/3 lg:w-1/2 mx-auto space-y-5 px-4"
                >
                    <motion.p
                        className="text-3xl md:text-4xl lg:text-5xl font-semibold"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <motion.strong
                            initial={{ color: "#000" }}
                            animate={{ color: "#007AFF" }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            iMessage
                        </motion.strong>{" "}
                        Automation for Teams and AI Workflows
                    </motion.p>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 text-sm md:text-base"
                    >
                        Coup lets your team, or AI workflows, send iMessage directly from your phone number, running secretly on your Mac or Mac Mini.
                    </motion.p>

                    <motion.span
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row justify-center items-center gap-3 px-4"
                    >
                        <motion.button
                            className="bg-[#007AFF] text-white px-6 py-3 rounded-3xl w-full sm:w-auto text-sm md:text-base"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 30px rgba(0, 122, 255, 0.4)",
                                y: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                y: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <span className="flex items-center justify-center gap-2 divide-x divide-black border border-black rounded-3xl px-4 py-2.5 w-full sm:w-auto text-sm md:text-base">
                                <BsApple className="size-4 md:size-5" />
                                <p className="pl-2">Download for Mac</p>
                            </span>
                        </motion.button>
                    </motion.span>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero