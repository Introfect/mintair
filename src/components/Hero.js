import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from "framer-motion"

const isAuth=false

const Hero = () => {
  return (
    <div className="w-screen min-h-screen ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          
          <div
           animate={{
            x: 0,
            backgroundColor: "#000",
            boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
            position: "fixed",
            transitionEnd: {
              display: "none",
            },
          }}
          className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold text-white">Connect Your Wallet to get Started</h1>
            
          </div>


          <p className="max-w-xl mt-1 text-lg text-slate-400">
            Connect your wallets and view all transctions details with stored data 
          </p>

          <div className="w-full mt-4">
          
              <p>Click on the button below to get started
              </p>
              
          </div>
          <ConnectButton/>  

        </div>
      </div>
    </div>
  )
}

export default Hero