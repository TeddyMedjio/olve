"use client";

import { motion } from "framer-motion";

export function FadeUp({ children, delay = 0, duration = 0.5 }) {
  return (
    <motion.div
      variants={{
        hidden: {
          filter: "blur(10px)",
          opacity: 0,
          y: 12,
        },
        visible: {
          filter: "blur(0)",
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay, type: "spring", duration }}
    >
      {children}
    </motion.div>
  );
}
