import React from 'react'
import {IoIosArrowDown} from "react-icons/io"
import {AiOutlinePlusCircle} from "react-icons/ai"
import { useState } from 'react'
export const Questions = () => {
   const [state, setState]= useState(false);
   const [state1, setState1]= useState(false);
   const [state2, setState2]= useState(false);
   const [state3, setState3]= useState(false);


   const handle1 =()=>{
    setState(state=>!state)
   }
   const handle2 =()=>{
    setState1(state1=>!state1)
   }
   const handle3 =()=>{
    setState2(state2=>!state2)
   }
   const handle4 =()=>{
    setState3(state3=>!state3)
   }
   
    return (
        <div className='pt-[125px] bg-body h-full w-full'>
            <div className='justify-center items-center w-11/12 m-auto max-w-[1400px]'>
                <div className='flex items-center justify-center flex-col '>
                    <h1 className='font-Poppins font-medium text-[30px] leading-[45px] text-center '>Frequently Asked Questions</h1>
                    <div className='w-[76px] h-[4px] bg-black'></div>
                </div>
                <div className='mt-[35px] pb-[35px] bg-[#FFCE6F] '>
                   <div className='ml-[49px] flex flex-col mr-[52px]'>
              
                            <div className='flex flex-col pl-[30px] bg-white mt-[49px] rounded-[10px]'>
                            {state?<div className='flex'>
                                <h1 className='flex mt-[25px]'> 
                                <h1 className=' mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>Q:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a, integer leo morbi facilisis ut leo. Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a, mi.</p>
                                </h1>
                                <AiOutlinePlusCircle onClick={handle1} fontSize={40} className=" cursor-pointer " style={{marginTop:"30px", marginLeft:"5px"}}/></div>:
                                <div>
                                <h1 className='flex mt-[25px]'> 
                                <h1 className=' mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>Q:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a, integer leo morbi facilisis ut leo. Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a, mi.</p>
                                </h1>
                                <h1 className='flex mt-[22px] '> 
                                <h1 className='mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>A:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a</p>
                                <IoIosArrowDown className=" cursor-pointer " onClick={handle1} fontSize={40}/>
                                </h1></div>}
                              
                            </div>

                            <div className='flex flex-col pl-[30px] bg-white mt-[49px] rounded-[10px]'>
                            {state1?<div>
                                <h1 className='flex mt-[25px]'> 
                                <h1 className=' mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>Q:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a, integer leo morbi facilisis ut leo. Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a, mi.</p>
                                </h1>
                                <h1 className='flex mt-[22px] '> 
                                <h1 className='mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>A:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a</p>
                                <IoIosArrowDown className=" cursor-pointer " onClick={handle2} fontSize={40}/>
                                </h1></div>:<div className='flex'>
                                <h1 className='flex mt-[25px]'> 
                                <h1 className=' mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>Q:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a, integer leo morbi facilisis ut leo. Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a, mi.</p>
                                </h1>
                                <AiOutlinePlusCircle className=" cursor-pointer " onClick={handle2} fontSize={40} style={{marginTop:"30px", marginLeft:"5px"}}/></div>}
                              
                            </div>


                            <div className='flex flex-col pl-[30px] bg-white mt-[49px] rounded-[10px]'>
                            {state2?<div>
                                <h1 className='flex mt-[25px]'> 
                                <h1 className=' mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>Q:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a, integer leo morbi facilisis ut leo. Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a, mi.</p>
                                </h1>
                                <h1 className='flex mt-[22px] '> 
                                <h1 className='mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>A:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a</p>
                                <IoIosArrowDown className=" cursor-pointer " onClick={handle3} fontSize={40}/>
                                </h1></div>:<div className='flex'>
                                <h1 className='flex mt-[25px]'> 
                                <h1 className=' mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>Q:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a, integer leo morbi facilisis ut leo. Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a, mi.</p>
                                </h1>
                                <AiOutlinePlusCircle className=" cursor-pointer " onClick={handle3} fontSize={40} style={{marginTop:"30px", marginLeft:"5px"}}/></div>}
                              
                            </div>


                            <div className='flex flex-col pl-[30px] bg-white mt-[49px] rounded-[10px]'>
                            {state3?<div>
                                <h1 className='flex mt-[25px]'> 
                                <h1 className=' mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>Q:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a, integer leo morbi facilisis ut leo. Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a, mi.</p>
                                </h1>
                                <h1 className='flex mt-[22px] '> 
                                <h1 className='mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>A:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a</p>
                                <IoIosArrowDown className=" cursor-pointer " onClick={handle4} fontSize={40}/>
                                </h1></div>:<div className='flex'>
                                <h1 className='flex mt-[25px]'> 
                                <h1 className=' mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>Q:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a, integer leo morbi facilisis ut leo. Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a, mi.</p>
                                </h1>
                                <AiOutlinePlusCircle className=" cursor-pointer " onClick={handle4} fontSize={40} style={{marginTop:"30px", marginLeft:"5px"}}/></div>}
                            </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
