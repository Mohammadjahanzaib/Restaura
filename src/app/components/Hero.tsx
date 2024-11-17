import Image from 'next/image'
import React from 'react'
import logo from "@/src/app/components/assets/logo.png"

const Hero = () => {
  return (
    <section className='relative flex h-screen items-center justify-center'>
    <div className='absolute inset-0 -z-20 h-full w-full overflow-hidden'>
        <video
            src="/video.mp4"
            className='h-full w-full object-cover'
            muted autoPlay loop playsInline
          poster='Hero'>
          </video>
    </div>
    <div className='absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black'>
    </div>
      <div className='relative z-20 flex h-screen flex-col justify-end pb-20'>
        <Image
          src={logo} alt="restaura" className='w-full p-4'/>
        <p className='p-4 text-lg tracking-tighter text-white'>Paris</p>
      </div>
    </section>
  )
}

export default Hero
console.log(logo)