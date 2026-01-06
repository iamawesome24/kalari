"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-100 to-red-100 overflow-hidden">
      {/* CONTINUOUS OUTWARD RAY 1 */}
      <motion.div
        className="absolute w-56 h-56 rounded-full"
        animate={{
          scale: [0.6, 2.2],
          opacity: [0.45, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(251,146,60,0.45) 0%, rgba(251,146,60,0.25) 35%, rgba(251,146,60,0.1) 55%, rgba(251,146,60,0) 70%)",
        }}
      />

      {/* CONTINUOUS OUTWARD RAY 2 */}
      <motion.div
        className="absolute w-72 h-72 rounded-full"
        animate={{
          scale: [0.7, 2.6],
          opacity: [0.35, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
          ease: "easeOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.4) 0%, rgba(249,115,22,0.2) 40%, rgba(249,115,22,0.08) 60%, rgba(249,115,22,0) 75%)",
        }}
      />

      {/* CONTINUOUS OUTWARD RAY 3 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        animate={{
          scale: [0.8, 3],
          opacity: [0.25, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 2,
          ease: "easeOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,140,0,0.35) 0%, rgba(255,140,0,0.18) 45%, rgba(255,140,0,0.06) 65%, rgba(255,140,0,0) 80%)",
        }}
      />

      {/* CORE DOT → LOGO */}
      <motion.div
        className="relative z-10 w-48 h-48"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
      >
        <img
          src="/logo.png"
          alt="Ayodhyam Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
}
