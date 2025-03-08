import React from 'react'

const LogoCarousel = () => {
  return (
    <section className='hidden md:flex justify-between items-center gap-4 bg-[#F2F9FF] px-7 pt-24 xl:pt-52 lg:px-20'>
      <div>
        <img className='w-[100%] md:w-[90%] xl:w-[75%] h-auto' src="/images/grande_logo.webp" alt="" />
      </div>
      <div>
        <img className='w-[100%] md:w-[90%] xl:w-[75%] h-auto' src="/images/activ_logo.webp" alt="" />
      </div>
      <div>
        <img className='w-[100%] md:w-[90%] xl:w-[75%] h-auto' src="/images/secondy_logo.webp" alt="" />
      </div>
      <div>
        <img className='w-[100%] md:w-[90%] xl:w-[75%] h-auto' src="/images/pulsefit_logo.webp" alt="" />
      </div>
      <div>
        <img className='w-[100%] md:w-[90%] xl:w-[75%] h-auto' src="/images/medpro_logo.webp" alt="" />
      </div>
    </section>
  )
}

export default LogoCarousel
