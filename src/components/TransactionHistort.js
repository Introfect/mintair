import React, { useRef, useEffect } from 'react'

const TransactionHistort = ({ data, fetchNextPage, hasNextPage }) => {
    const tableBodyRef = useRef(null)

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

    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
                    Transaction History
                </h2>
                <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
                    Thanks for making a purchase you can check our order summary from below
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
                            <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                              
                                <div className="flex flex-row items-center w-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                        <div className="flex items-center">
                                            <div>
                                                <h2 className="font-semibold text-xl leading-8 text-black mb-3">Block Number: {item.blockNumber}</h2>
                                                <p className="font-normal text-lg leading-8 text-gray-500 mb-3"><span className='text-black'>From: </span>{item.from}</p>
                                                <p className="font-normal text-lg leading-8 text-gray-500 mb-3">To: {item.to}</p>
                                                {/* <div className="flex items-center">
                                                    <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">Size: <span className="text-gray-500">100 ml</span></p>
                                                    <p className="font-medium text-base leading-7 text-black">Qty: <span className="text-gray-500">2</span></p>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-5">
                                            <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                                <div className="flex gap-3 lg:block">
                                                    <p className="font-medium text-sm leading-7 text-black">Value:</p>
                                                    <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">{item.value}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                                <div className="flex gap-3 lg:block">
                                                    <p className="font-medium text-sm leading-7 text-black">Status</p>
                                                    <p className={`font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3  ${item.isError==1?`text-red-600 bg-red-100`:`text-emerald-600 bg-emerald-100`} `}>{item.isError==1?`Error`:`Succesfull`}</p>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TransactionHistort
