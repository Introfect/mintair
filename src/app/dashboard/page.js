'use client'
import Transction from '@/components/Transction'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect,useState } from 'react'


const page = () => {
  const router=useRouter()
  useEffect(()=>{
const data= localStorage.getItem('wagmi.recentConnectorId')
if(!data){
  router.push("/")
}
  },[])
    const [tranasction, setTranasction]=useState()
    const getData=async()=>{
      const response= await axios.get('https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=CP2G1IC56U7WR35CZEJBE48SK8MGGHPH97')
    console.log(response.data,"ether")
    response && setTranasction(response.data)
    }
    useEffect(()=>{
        getData()
    },[])
 
  return (
    <div>
    <ConnectButton/>
    <Transction data={tranasction}/>
    </div>
  )
}

export default page