import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LoaderCircle, CircleX } from 'lucide-react';
import Card from './Card';

const AutoScrollingCards = ({data}) => {
  const [show,setShow]=useState(false)
  const loopDuration = 6;
  const [popupData,setPopupData]=useState()
const [index,setIndex]=useState(0)
  useEffect(()=>{
    setPopupData(data[index])
    console.log(popupData)

  },[index,show])

  const marqueeVariants = (direction) => ({
    animate: {
      y: [0, direction * 200, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: loopDuration,
          ease: "linear",
        }
      }
    }
  });
  if(data.length==0){
    return(
        <div className='text-white w-full bg-black h-screen text-4xl flex items-center justify-center'>
            <LoaderCircle className='animate-spin mr-2 text-white'/><p>Loading</p>
        </div>
    )
}
  

  return (
    <div className="flex justify-center items-center h-screen bg-black overflow-hidden relative">
      {show===true?<div className='w-full h-full absolute top-0 left-0 bg-zinc-800/40 flex items-center justify-center z-10'>
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
        <div onClick={()=>setShow(false)} className='cursor-pointer'>
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
                    {popupData?.from}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    To
                </dt>
                <dd className="mt-1 text-xs md:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {popupData?.to}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Hash
                </dt>
                <dd className="mt-1 text-xs md:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {popupData?.hash}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Timestamp
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {popupData?.timeStamp}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Error
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {popupData?.isError=="1"?`Error`:`Success`}
                </dd>
            </div>
            {popupData?.isError=="1"? <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Error code
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {popupData?.errCode}
                </dd>
            </div>:null}
        </dl>
    </div>
</div>

                            </div>:null}
      <div className="flex space-x-4 items-center justify-center overflow-hidden relative">
        {[1, -1, 1].map((direction, index) => (
          <motion.div
            key={index}
            variants={marqueeVariants(direction)}
            animate="animate"
            className="flex flex-col space-y-4"
          >
            {[...data, ...data].map((data, idx) => (
              <Card key={idx} data={data} setShow={setShow} index={idx} setIndex={setIndex}/>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollingCards;
