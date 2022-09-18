import React from 'react'
import { motion } from "framer-motion";
const FadeOutAnimation = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default FadeOutAnimation