"use client"
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from "framer-motion"
import { AuroraBackground } from './ui/aurora-background';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const isAuth=false

const Hero = () => {
  const router=useRouter()

  return (
<AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
      <h2 className="text-white text-5xl md:text-6xl font-bold text-center">
        Connect Your Wallet to get Started
        </h2>

        
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        Connect your wallets and view all transctions details with stored data
        </p>
        <div className="relative inline-flex  group flex-col sm:flex-row items-center gap-4 mt-6">
        <div
            class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-7xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
          <a href="#" className="relative inline-flex items-center justify-center text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
           <ConnectButton/>
          </a>

        </div>
        </motion.div>
        </AuroraBackground>
  )
}

export default Hero