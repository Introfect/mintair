"use client"
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import TransactionHistort from './TransactionHistort'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
const DashboardPage = () => {
      const router = useRouter()
  useEffect(() => {
    const data= localStorage.getItem('wagmi.recentConnectorId')
    if(!data){
      router.push("/")
    }
  }, [])

  const getData = async ({ pageParam = 1 }) => {
    const response = await axios.get(`https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3&startblock=0&endblock=2702578&page=${pageParam}&offset=10&sort=asc&apikey=CP2G1IC56U7WR35CZEJBE48SK8MGGHPH97`)
    return response.data
  }

  const {
    data,
    status,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['transaction'],
    queryFn: getData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.result?.length ? allPages.length + 1 : undefined
    },
  })

  const Tdata = data?.pages?.flatMap(page => page.result) || []

  return (
    <div><TransactionHistort data={Tdata} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage}/></div>
  )
}

export default DashboardPage