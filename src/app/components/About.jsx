import React from 'react'
import Link from 'next/link';
import SmoothReveal from './SmoothReveal';


const About = ({ language, translations }) => {

  const { aboutTitle, aboutSubtitle, aboutSubtitle2, aboutSubtitle3, aboutPar, aboutPar2, aboutPar3, aboutBtn } = translations[language];

  return (
    <section id='despre-noi' className='bg-[#F2F9FF] flex flex-col-reverse justify-between items-center px-7 py-20 xl:flex-row lg:px-20 xl:pt-20'>
      <div className=''>
        <img className='w-[100%] xl:w-[90%] h-auto rounded-2xl' src="/images/about_img.webp" alt="about us" />
      </div>
      <div className='flex flex-col gap-4 py-7'>
        <h3 className='font-medium text-[#0A0D31] text-lg lg:text-xl'>{aboutTitle}</h3>
        <SmoothReveal><h2 className='text-[#0A0D31] font-bold text-3xl leading-[45px] xl:text-5xl xl:leading-[60px]'>{aboutSubtitle} <span className='bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent'>{aboutSubtitle2} </span>{aboutSubtitle3}</h2></SmoothReveal>
        <SmoothReveal><p className='py-4 text-[#383C5A] text-base xl:text-lg'>{aboutPar} <span className='bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent font-medium'>{aboutSubtitle2} </span>, {aboutPar2} <span className='bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent font-medium'>SkyTech </span> {aboutPar3}</p></SmoothReveal>
        <div className='flex gap-3'>
            <Link href="tel:+37360300553" className='text-base bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent font-semibold xl:text-lg'>{aboutBtn} </Link>
            <img src="/images/arrow-right.svg" alt="arrow icon" />
        </div>
      </div>
    </section>
  )
}

export default About
