import React from 'react'
import rev from './images/rev.png';
import mic from './images/mic.png';
export const Reviews = () => {
    const reviews = [
    {id:1, rev:rev, image:mic, name:"Michael Odjidja",  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing"},
    {id:2, rev:rev, image:mic, name:"Michael Odjidja",  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing"},
    {id:3, rev:rev, image:mic, name:"Michael Odjidja",  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing"},
]
  return (
    <div className='pt-[46px] bg-body h-full w-full pb-[146px]'>
        <div className='justify-center items-center w-11/12 m-auto max-w-[1400px]'>
        <div className='flex items-center justify-center flex-col mb-[59px]'>
        <h1 className='font-Poppins font-medium text-[30px] leading-[45px] text-center '>Reviews</h1>
        <div className='w-[76px] h-[4px] bg-black'></div>
        </div>
            <div className='flex justify-between mt-[71px]'>
            {reviews.map(rev=>{
                return (
                    <div className='flex flex-col items-center'>
                        <img className='w-[90px] h-[72px]' src={rev.rev} alt=""  />
                        <p className='mt-[50px] font-Poppins font-normal text-[20px] leading-[30px] text-center text-black w-[344px]'>{rev.desc}</p>
                        <img className='rounded-[50%] w-[83px] h-[83px] mt-[27px]' src={rev.image} alt="" />
                        <h1 className='font-Poppins font-bold text-[22px] leading-[33px] text-center text-black mt-[17px] mb-[94px] '>{rev.name}</h1>
                    </div>
                )
            })}
            </div>

            <div className='bg-[#588197] h-[439px] w-[1346px] ml-[-56px] mb-[200px]'></div>
    </div>
    </div>
  )
}
