import React from 'react'
import { motion } from "framer-motion";

const ScaleInAnimation = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 40, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, y: 40, scale: 0.8 }}
        >
            {children}
        </motion.div>
    )

}

export default ScaleInAnimation