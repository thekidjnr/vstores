import React from 'react'
const data = [
    {question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a, integer leo morbi facilisis ut leo. Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a, mi.", answer:"Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a"},
    {question:"Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a", answer:"Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a"},
    {question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a, integer leo morbi facilisis ut leo. Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a, mi.", answer:"Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a"},
    {question:"Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a", answer:"Sapien neque fermentum dolor facilisi nulla sem. Congue viverra sed erat consectetur at a"}
]
export const Questions = () => {
    return (
        <div className='pt-[125px] bg-body h-full w-full'>
            <div className='justify-center items-center w-11/12 m-auto max-w-[1400px]'>
                <div className='flex items-center justify-center flex-col '>
                    <h1 className='font-Poppins font-medium text-[30px] leading-[45px] text-center '>Frequently Asked Questions</h1>
                    <div className='w-[76px] h-[4px] bg-black'></div>
                </div>
                <div className='mt-[35px] pb-[35px] bg-[#FFCE6F] '>
                   <div className='ml-[49px] flex flex-col mr-[52px]'>
                   {data.map(d=>{
                        return (
                            <div className='flex flex-col pl-[30px] bg-white mt-[49px] rounded-[10px]'>
                                <h1 className='flex mt-[25px]'> 
                                <h1 className=' mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>Q:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>{d.question}</p>
                                </h1>
                                <h1 className='flex mt-[22px] '> 
                                <h1 className='mr-[18px] font-Poppins font-semibold text-[25px] leading-[37.5px] text-black'>A:</h1>
                                <p className='w-[989px] font-Poppins font-normal text-[25px] leading-[37.5px]'>{d.answer}</p>
                                </h1>
                            </div>
                        )
                    })}
                   </div>
                </div>
            </div>
        </div>
    )
}
