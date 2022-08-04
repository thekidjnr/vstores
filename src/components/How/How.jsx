import React from 'react'
import bangle from './images/bangle.png'
import how from './images/how.png'
const data = [
    {id:1, text:"Sign up  and set up your personal profile"},
    {id:2, text:"Upload your products and specify it’s description with their prices"},
    {id:3, text:"Receive your store link to share with your customers"}
]
export const How = () => {
  return (
    <div className='pt-[46px] bg-body h-full w-full pb-[146px]'>
        <div className='justify-center items-center w-11/12 m-auto max-w-[1400px]'>
        <div className='flex items-center justify-center flex-col mb-[59px]'>
        <h1 className='font-Poppins font-medium text-[30px] leading-[45px] text-center '>How it works</h1>
        <div className='w-[76px] h-[4px] bg-black'></div>
        </div>
        <div className='flex mt-[28px]'>
            <div className='ml-[94px] mr-[54px] flex flex-col'>
                {data.map(d=>{
                    return(
                        <div className='flex flex-col w-[500px]  items-center justify-center mt-[61px]'>
                             <div className='bg-[#E1CE8B] text-black w-[40px] h-[39px] font-Poppins font-bold text-[25px] leading-[37.5px] text-center'>{d.id}</div>
                             <div className='text-black font-Poppins font-medium text-[25px] leading-[37.5px] text-center'>{d.text}</div>
                        </div>
                    )
                })}
            </div>
            <div className='flex' >
                <img className='z-10 w-[491px] h-[583px] ' src={how} alt="How it works" />
                <img className='z-0 ml-[-246px] w-[317px] h-[281px] mt-[-59px]' src={bangle} alt="How it works" />
            </div>
        </div>
        </div>
    </div>
  )
}
