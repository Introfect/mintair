import React, { useRef, useEffect,useState } from 'react'
import {LoaderCircle, CircleX} from 'lucide-react'
import { motion } from 'framer-motion'

const TransactionHistort = ({ data, fetchNextPage, hasNextPage, isFetchingNextPage }) => {
    const tableBodyRef = useRef(null)
    const [popupSwitch,setPopupSwitch]=useState(false)
    const [popupData,setPopupData]=useState()
    useEffect(() => {
     
        const tableBodyElement = tableBodyRef.current
     

        if (!tableBodyElement) return

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = tableBodyElement
            if (scrollTop + clientHeight >= scrollHeight - 10 && hasNextPage) {
                fetchNextPage()
            }
        }

        tableBodyElement.addEventListener('scroll', handleScroll)

        return () => {
            tableBodyElement.removeEventListener('scroll', handleScroll)
        }
    }, [fetchNextPage, hasNextPage])
    const handleClick=(index)=>{
        setPopupData(data[index])
        setPopupSwitch(true)
        console.log(popupSwitch,"inside")
    
    }
    if(data.length==0){
        return(
            <div className='text-black-500 w-full h-screen text-4xl flex items-center justify-center'>
                <LoaderCircle className='animate-spin mr-2 text-slate-400'/><p>Loading</p>
            </div>
        )
    }
    return (
        <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-4 items-center justify-center px-4"
      >
        <section className="py-24">
             {popupSwitch?(
                            <div className='w-full h-full absolute top-0 left-0 bg-slate-700/50  flex items-center justify-center'>
                                <div class="bg-white overflow-hidden shadow rounded-lg border">
    <div class="px-4 py-5 sm:px-6 flex justify-between">
        <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
           Transaction Data
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the transaction
        </p>
        </div>
        <div onClick={()=>setPopupSwitch(false)} className='cursor-pointer'>
            <CircleX/>
        </div>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    From
                </dt>
                <dd className="mt-1 text-xs md:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {popupData.from}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    To
                </dt>
                <dd className="mt-1 text-xs md:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {popupData.to}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Hash
                </dt>
                <dd className="mt-1 text-xs md:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {popupData.hash}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Timestamp
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {popupData.timeStamp}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Error
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {popupData.isError=="1"?`Error`:`Success`}
                </dd>
            </div>
            {popupData.isError=="1"? <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Error code
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {popupData.errCode}
                </dd>
            </div>:null}
        </dl>
    </div>
</div>

                            </div>
                           ):(null)}

            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
                    Transaction History
                </h2>
                <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
                    Click on any one of the transaction to view details
                </p>
                <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full overflow-y-scroll
                 h-[600px]" ref={tableBodyRef}>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                        <div className="data">
                            <p className="font-semibold text-base leading-7 text-black">Order Id: <span className="text-indigo-600 font-medium">#10234987</span></p>
                            <p className="font-semibold text-base leading-7 text-black mt-4">Order Payment: <span className="text-gray-400 font-medium"> 18th March 2021</span></p>
                        </div>
                        <button className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                            Track Your Order
                        </button>
                    </div>
                    {data?.map((item, index) => (
                        <div key={index} className="w-full px-3 min-[400px]:px-6">
                            <div onClick={()=>{handleClick(index)}} className="flex flex-col lg:flex-row items-center cursor-pointer py-6 border-b border-gray-200 gap-6 w-full">
                              
                                <div className="flex flex-row items-center w-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                        <div className="flex items-center">
                                            <div>
                                                <h2 className="font-semibold text-xl leading-8 text-black mb-3">Block Number: {item.blockNumber}</h2>
                                                <p className="font-normal text-lg leading-8 text-gray-500 mb-3"><span className='text-black'>From: </span>{item.from}</p>
                                                <p className="font-normal text-lg leading-8 text-gray-500 mb-3">To: {item.to}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:items-end gap-5">
                                            <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                                <div className="flex gap-3 items-center justify-center">
                                                    <p className="font-medium text-sm leading-7 text-black">Value:</p>
                                                    <p className=" font-medium text-sm leading-7 text-indigo-600">{item.value}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="col-span-5 lg:col-span-2 flex items-center">
                                                <div className="flex gap-3 items-center justify-center">
                                                    <p className="font-medium text-sm leading-7 text-black">Status</p>
                                                    <p className={`font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full  ${item.isError==1?`text-red-600 bg-red-100`:`text-emerald-600 bg-emerald-100`} `}>{item.isError==1?`Error`:`Succesfull`}</p>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                           <div className='flex items-center justify-center w-full'>

{isFetchingNextPage?<div className='flex items-center'><LoaderCircle className='animate-spin mr-2 text-black'/> <p className='text-black'>Loading more</p></div>:null}
    </div>
                </div>
            </div>
        </section>
        </motion.div>
    )
}

export default TransactionHistort