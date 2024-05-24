import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LoaderCircle, CircleX } from 'lucide-react';
import Card from './Card';

// const Card = ({ data }) => (
//   <div className="bg-cyan-900 rounded-xl shadow-md shadow-gray-200/40 text-white p-4 m-2 w-60 overflow-hidden h-56 flex items-center justify-center">

// <div className="overflow-hidden">
//     <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
//         <dl className="sm:divide-y sm:divide-gray-200">
//             <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">
//                     From
//                 </dt>
//                 <dd className="mt-1 text-xs text-gray-100 sm:mt-0 sm:col-span-2 text-wrap">
//                     {data.from}
//                 </dd>
//             </div>
//             <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">
//                     To
//                 </dt>
//                 <dd className="mt-1 text-xs text-gray-100 sm:mt-0 sm:col-span-2 line-clamp-3">
//                     {data.to}
//                 </dd>
//             </div>
//             <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">
//                     Value
//                 </dt>
//                 <dd className="mt-1 text-xs text-gray-100 sm:mt-0 sm:col-span-2">
//                     {data.value}
//                 </dd>
//             </div>
//         </dl>
//     </div>
// </div>
    
//     {console.log(data,"card")}
//   </div>

// );

const AutoScrollingCards = ({data}) => {
  const loopDuration = 6; // duration of one loop in seconds

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
    <div className="flex justify-center items-center h-screen bg-black overflow-hidden">
      <div className="flex space-x-4 items-center justify-center overflow-hidden relative">
        {[1, -1, 1].map((direction, index) => (
          <motion.div
            key={index}
            variants={marqueeVariants(direction)}
            animate="animate"
            className="flex flex-col space-y-4"
          >
            {[...data, ...data].map((data, idx) => (
              <Card key={idx} data={data} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollingCards;
