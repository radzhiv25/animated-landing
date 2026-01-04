import { motion } from 'framer-motion'
import Logo from '../assets/Subtract.svg'

const Navbar = () => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-5/6 lg:w-1/2 mx-auto bg-white px-4 md:px-6 py-3 md:py-5 flex justify-between items-center border rounded-full md:rounded-[200px] shadow-md relative z-50"
        >
            <motion.span
                className="flex items-end gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                <img src={Logo} alt="Logo" className="w-6 h-6 md:w-auto md:h-auto" />
                <h1 className="text-xl md:text-2xl font-bold">coup.</h1>
            </motion.span>
            <ul className="hidden md:flex gap-2 lg:gap-4 text-sm lg:text-base font-medium text-[#8C97A8]">
                {["How it Works", "Pricing", "Use Case", "FAQ"].map((item, index) => (
                    <motion.li
                        key={item}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.1, color: "#007AFF" }}
                        className="cursor-pointer"
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
            <motion.button
                className="bg-[#007AFF] text-white px-3 md:px-4 py-1.5 md:py-2.5 rounded-3xl border text-sm md:text-base"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 122, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                <span className="hidden sm:inline">Contact Sales</span>
                <span className="sm:hidden">Contact</span>
            </motion.button>
        </motion.div>
    );
};

export default Navbar;