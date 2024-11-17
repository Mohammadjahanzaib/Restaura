"use client"
import Image from 'next/image'
import React from 'react'
import about from "../assets/about.jpeg"
import {ABOUT} from "@/src/app/constants/index"
import {motion} from "framer-motion"

const About = () => {
  return (
    <section className='container mx-auto mb-8 text-white' id="about">
        <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>About us</h2>
        <div className='flex flex-wrap'>
            <div className='w-full p-4 lg:w-1/2'>
            <Image
            src={about}
            alt="about" className='rounded-3xl lg:-rotate-3'/>
        </div>
        <div className='w-full px-2 lg:w-1/2'>
        <motion.h2
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration: 0.6, delay:0.2}}
        className='text-4xl tracking-tighter lg:text-6xl'>
            {ABOUT.header}
        </motion.h2>
        <div className='mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3'>
        </div>
        <p className='m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl'>
            {ABOUT.content}
        </p>
        </div>

        </div>

    </section>
  )
}

export default About