import React, { useState } from 'react'
import { CircleX } from 'lucide-react'
const Card = ({data, setShow,index,setIndex}) => {
  
function handleClick(){
    setIndex(index)
    setShow(true)
}
  return (
    <div>
       <div onClick={handleClick} className="bg-cyan-900 cursor-pointer rounded-xl shadow-md shadow-gray-500/40 text-white p-4 m-2 w-60 overflow-hidden h-56 flex items-center justify-center">
    <div className="overflow-hidden">
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        From
                    </dt>
                    <dd className="mt-1 text-xs text-gray-100 sm:mt-0 sm:col-span-2 text-wrap">
                        {data.from}
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        To
                    </dt>
                    <dd className="mt-1 text-xs text-gray-100 sm:mt-0 sm:col-span-2 line-clamp-3">
                        {data.to}
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Value
                    </dt>
                    <dd className="mt-1 text-xs text-gray-100 sm:mt-0 sm:col-span-2">
                        {data.value}
                    </dd>
                </div>
            </dl>
        </div>
    </div>
      </div>

    </div>
    
    
  )
}

export default Card