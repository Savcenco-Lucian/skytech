import React from 'react'
import SmoothReveal from './SmoothReveal';

const Portofolio = ({ language, translations }) => {

    const { portTitle, portSub, portSub2, portSub3, portPar,
    port1Title, port1Par, port2Title, port2Par, port3Title, port3Par,
        } = translations[language];

    return (
        <section id='portofoliu' className='px-7 pb-20 bg-[#F2F9FF] lg:px-20'>
            <div className='flex flex-col justify-between xl:items-center xl:flex-row'>
                <div className='flex flex-col gap-4 py-7'>
                    <h3 className='font-medium text-[#0A0D31] text-lg lg:text-xl'>{portTitle}</h3>
                    <SmoothReveal><h2 className='text-[#0A0D31] font-bold text-3xl leading-[45px] xl:text-5xl xl:leading-[65px]'>{portSub} <span className='bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent'>{portSub2} </span> {portSub3}</h2></SmoothReveal>
                </div>
                <div className=''>
                    <SmoothReveal><p className='xl:w-[650px] text-[#383C5A] text-base xl:text-lg'>{portPar}
                    </p></SmoothReveal>
                </div>
            </div>

            <div className='flex flex-col justify-between items-center gap-7 mt-4 md:flex-row'>
                <div className='flex flex-col gap-3 hover:-translate-y-2 transition-transform duration-300 ease-in-out'>
                    <img className='rounded-xl ' src="/images/macbook 1.webp" alt="mockup" />
                    <SmoothReveal><h2 className='mt-1 text-xl text-[#0A0D31] font-semibold'>{port1Title}</h2></SmoothReveal>
                    <SmoothReveal><p className='text-[#383C5A] text-base'><span className='font-medium'>PulseFit</span> {port1Par}</p></SmoothReveal>
                </div>
                <div className='flex flex-col gap-3 hover:-translate-y-2 transition-transform duration-300 ease-in-out'>
                    <img className='rounded-xl' src="/images/macbook 2.webp" alt="mockup" />
                    <SmoothReveal><h2 className='mt-1 text-xl text-[#0A0D31] font-semibold'>{port2Title}</h2></SmoothReveal>
                    <SmoothReveal><p className='text-[#383C5A] text-base'><span className='font-medium'>Secondy</span> {port2Par}</p></SmoothReveal>
                </div>
                <div className='flex flex-col gap-3 hover:-translate-y-2 transition-transform duration-300 ease-in-out'>
                    <img className='rounded-xl' src="/images/mockup 3.webp" alt="mockup" />
                    <SmoothReveal><h2 className='mt-1 text-xl text-[#0A0D31] font-semibold'>{port3Title}</h2></SmoothReveal>
                    <SmoothReveal><p className='text-[#383C5A] text-base'><span className='font-medium'>Activ Imobil</span> {port3Par}</p></SmoothReveal>
                </div>
            </div>
        </section>
    )
}

export default Portofolio
