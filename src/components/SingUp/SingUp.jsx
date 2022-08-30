import React from 'react'
import {FcGoogle} from "react-icons/fc"
import {TiDelete} from "react-icons/ti"
export const SingUp = ({setState, state}) => {
  const handleState =()=>{
    setState(state=1)
  }
  const removeState =()=>{
    setState(state=0)
  }
  return (
    <div style={{"textAlign":"-webkit-center"}}>
    <div className='mt-[-27%] z-10 self-center flex flex-col bg-white w-[496px] h-[594px] rounded-[33px] pl-[58px] pt-[2px]' style={{"textAlign":"-webkit-left"}} >
        <div style={{"textAlign":"-webkit-center"}} >
            <TiDelete fontSize={40} onClick={removeState} />
        </div>
        <h1 className='font-semibold font-Poppins text-[30px] leading-[45px] text-black '>Let’s get you signed up</h1>
        <p className='font-Poppins font-light text-[18px] leading-[27px] text-[#966507]'>Kindly provide your details below</p>
        <label htmlFor="email" className='font-Poppins font-medium text-[20px] leading-[30px] text-black mt-[20px]  mb-[9px] '>Email</label>
        <input type="email" placeholder='Enter your email' className='w-[376px] h-[47px] rounded-[5px] border px-[13px] border-[#966507] text-[18px] font-light font-Poppins leading-[27px] text-black' />

        <label htmlFor="email" className='font-Poppins font-medium text-[20px] leading-[30px] mt-[13px]  text-black mb-[9px] '>Password</label>
        <input type="password" placeholder="● ● ● ● ● ● ● ●" className='w-[376px] h-[47px] rounded-[5px] border px-[13px] border-[#966507] text-[18px] font-light font-Poppins leading-[27px] text-black' />
        <label htmlFor="email" className='font-Poppins font-medium text-[20px] leading-[30px] mt-[13px]  text-black mb-[9px] '>Confirm Password</label>
        <input type="password" placeholder="● ● ● ● ● ● ● ●" className='w-[376px] h-[47px] rounded-[5px] border px-[13px] border-[#966507] text-[18px] font-light font-Poppins leading-[27px] text-black' />

        <div className='cursor-pointer flex mt-[14px] w-[376px] bg-[#966507] rounded-[5px] h-[47px] text-center text-white font-Poppins font-medium text-[20px] leading-[30px] items-center justify-center'><h1>Sign in</h1></div>
        <div className='cursor-pointer flex items-center justify-center mt-[15px] w-[376px] bg-white rounded-[5px] border border-[#966507] h-[47px] text-center text-black font-Poppins font-medium text-[20px] leading-[30px]'>
            <FcGoogle fontSize={40}/>
        <h1 className='ml-[5.64px]'>Sign in with Google</h1>
        </div>

        <div className='mt-[10px]'>
       <span className=' font-Poppins font-light text-[16px] leading-[24px] text-black '>Already have an account?</span><span className='cursor-pointer ml-[5.64px] font-Poppins font-bold text-[16px] leading-[24px]  text-[#966507] ' onClick={handleState}>Sign in</span>
        </div>
    </div>
    </div>
  )
}

