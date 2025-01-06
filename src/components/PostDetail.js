import React from 'react'
import imgone from '../images/bl.jpeg'

export const PostDetail = () => {
  return (
    <div className='flex justify-center py-20'>
        <div className='w-[800px]'>
            <img src={imgone} className='w-[800px]'/>
            <div className='py-4 flex items-center gap-4'>
                <img src={imgone} className='w-20 h-20 rounded-full'/>
                <p>Otmane Aroussi</p>
                <p>Date: 01/06/2025</p>
            </div>
            <div className='text-left'>
                <p className='py-4 font-bold text-2xl'>Lorem Ipsum is simply dummy text of the printing</p>
                <h1>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h1>
            </div>
        </div>
    </div>
  )
}
