import React from 'react'
import {CONTACT} from "@/src/app/constants/index"
const Contact = () => {
  return (
    <section className='container mx-auto py-16 text-white' id="contact">
        <h2 className='mb-8 text-center text-3xl lg:text-4xl'>Contact Us</h2>
        <div className='text-neutral-400'>
            {CONTACT.map((detail) => (
                <p key={detail.key} className='my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-tighter text-white lg:text-3xl'>
                {detail.value}
                </p>
            ))}
        </div>
    </section>
  )
}

export default Contact