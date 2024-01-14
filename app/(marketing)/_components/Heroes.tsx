import Image from 'next/image'
import React from 'react'

function Heroes() {
    return (
        <div className='flex flex-col item-center justify-center max-w-5xl '>
            <div className='flex items-center '>
                <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px] border-black '>
                    <Image src='/ada-1.png' fill className='object-contain ml-10' alt='Documents'/>
                </div>
            </div>
        </div>
    );
}

export default Heroes;