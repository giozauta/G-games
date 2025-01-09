import React from 'react'

const Hero:React.FC = () => {
  return (
    <div className='flex   justify-between overflow-y-hidden h-[950px]  bg-gradient-to-b from-[#c6540a] to-[#480a01] relative bottom-40 '>

      <div className='border-none  flex h-[1300px] border w-[43%] relative bottom-28  rounded-r-[50%] bg-gradient-to-br from-[#1b0a03] to-[#020100]'></div>
         <div className=' absolute top-[350px] left-[40%] z-50 '>
          <img src="/public/images/call.webp" alt="call" className='w-[500px] h-[600px] '/>
         </div>
      <div className='border-none flex h-[1300px] border w-[43%] relative bottom-28  rounded-l-[50%] bg-gradient-to-tr from-[#030500] to-[#0c1800] '></div>
      
    </div>
  )
}

export default Hero
