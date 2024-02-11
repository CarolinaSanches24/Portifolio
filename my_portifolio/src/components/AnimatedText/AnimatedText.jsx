import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ children }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.h1>
  );
};

export default AnimatedText;
