import React from 'react'

export const Platorm = ({platformData}) => {
    const PlatormItem = ({data}) => {
        return (
            <div className='flex flex-col gap-3'>
                <p className='capitalize font-semibold'>{data.title}</p>
                <div className='rounded-full h-2 bg-[#f5f5f5]'>
                    <div
                    style={{width: `${data.progress}%`, background: data.color}}    className='w-1/2 h-full bg-[#6160dc] rounded-full'></div>
                </div>
                <div className='flex justify-between text-sm'>
                    <p>${ data.amount}</p>
                    <p>+{ data.percent}%</p>
                </div>
            </div>
      )
    }
    
  return (
    <div className=" text-[#26282c] w-full">
          <div className="p-4 border rounded-2xl bg-[#fff] flex flex-col gap-6 ">
              <div className="flex items-center justify-between">
          <p className="capitalize text-[#26282c] text-lg font-semibold">top platforms</p>
            <p>see all</p>
              </div>
              <div className='flex flex-col gap-4'>
                  {platformData.map((data, index) => <PlatormItem key={index} data={ data} />)}
                  

          </div></div></div>
  )
}
