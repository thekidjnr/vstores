import React from 'react'
import {FcGoogle} from "react-icons/fc"
import {TiDelete} from "react-icons/ti"
export const SingIn = ({setState, state}) => {
  const handleState =()=>{
    
    setState(state=2)
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
        <h1 className='font-semibold font-Poppins text-[30px] leading-[45px] text-black '>Hey, welcome back</h1>
        <p className='font-Poppins font-light text-[18px] leading-[27px] text-[#966507]'>Let’s get started by logging in</p>
        <label htmlFor="email" className='font-Poppins font-medium text-[20px] leading-[30px] text-black mt-[25px]  mb-[9px] '>Email</label>
        <input type="email" placeholder='Enter your email' className='w-[376px] h-[47px] rounded-[5px] border px-[13px] border-[#966507] text-[18px] font-light font-Poppins leading-[27px] text-black' />

        <label htmlFor="email" className='font-Poppins font-medium text-[20px] leading-[30px] mt-[20px]  text-black mb-[9px] '>Password</label>
        <input type="password" placeholder="● ● ● ● ● ● ● ●" className='w-[376px] h-[47px] rounded-[5px] border px-[13px] border-[#966507] text-[18px] font-light font-Poppins leading-[27px] text-black' />
        <div className='flex mt-[10px] justify-between w-[376px]'>
        <div className='flex'>
        <input type="checkbox" name="remember" id="remember" /> 
        <h1 className='ml-[3px] font-Poppins font-medium text-[16px] leading-[24px] text-black '>Remember Me</h1>
        </div>
        <h1 className='cursor-pointer font-Poppins font-medium text-[16px] leading-[24px] text-[#966507] '>Forgot Password?</h1>
        </div>

        <div className='cursor-pointer flex mt-[43px] w-[376px] bg-[#966507] rounded-[5px] h-[47px] text-center text-white font-Poppins font-medium text-[20px] leading-[30px] items-center justify-center'><h1>Sign in</h1></div>
        <div className='cursor-pointer flex items-center justify-center mt-[17px] w-[376px] bg-white rounded-[5px] border border-[#966507] h-[47px] text-center text-black font-Poppins font-medium text-[20px] leading-[30px]'>
            <FcGoogle fontSize={40}/>
        <h1 className='ml-[5.64px]'>Sign in with Google</h1>
        </div>

        <div className='mt-[27px]'>
       <span className=' font-Poppins font-light text-[16px] leading-[24px] text-black '>Don’t have an account?</span><span className='cursor-pointer ml-[5.64px] font-Poppins font-bold text-[16px] leading-[24px]  text-[#966507] ' onClick={handleState}>Sign up</span>
        </div>
    </div>
    </div>
  )
}
