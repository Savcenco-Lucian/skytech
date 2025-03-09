import React from 'react'
import SmoothReveal from './SmoothReveal';

const Stages_Demo = ({ language, translations }) => {

    const {
        stage1Title, stage1Par, stage1_2Par, stage1_3Par, stage1_4Par, stage1_5Par,
    stage2Title, stage2Par, stage2_2Par, stage2_3Par, stage2_4Par, stage2_5Par,
    stage3Title, stage3Par, stage3_2Par, stage3_3Par, stage3_4Par, stage3_5Par,
    stage4Title, stage4Par, stage4_2Par, stage4_3Par, stage4_4Par, stage4_5Par,
    stageTitle, stageSubtitle, stageSubtitle2, stageSubtitle3, stageSubtitle4, stageSubtitle2_2, stagePar} = translations[language];

  return (
    <section className='flex flex-col gap-4 bg-[#F2F9FF] px-7 py-20 lg:px-20'>
            <div className='flex flex-col justify-between xl:items-center xl:flex-row'>
                <div className='flex flex-col gap-4 py-7'>
                    <h3 className='font-medium text-[#0A0D31] text-lg lg:text-xl'>{stageTitle}</h3>
                    <SmoothReveal><h2 className='text-[#0A0D31] font-bold text-3xl leading-[45px] xl:text-5xl xl:leading-[65px]'>{stageSubtitle} <br />
                        {stageSubtitle2_2} <span className='bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent'>{stageSubtitle2} </span>{stageSubtitle3}
                        <span className='bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent'> {stageSubtitle4}</span></h2></SmoothReveal>
                </div>
                <div className=''>
                    <SmoothReveal><p className='xl:w-[650px] text-[#383C5A] text-base xl:text-lg'>{stagePar}
                    </p></SmoothReveal>
                </div>
            </div>

            <div className='flex flex-col justify-between items-center gap-7 mt-4 md:flex-row'>
                <div className='flex flex-col bg-white rounded-lg shadow-lg gap-3 hover:-translate-y-2 transition-transform duration-300 ease-in-out'>
                    <img className='rounded-xl ' src="/images/first-stage-Photoroom.png" alt="" />
                    <hr />
                    <SmoothReveal><h2 className='mt-1 text-center text-xl text-[#0A0D31] font-semibold'>{stage1Title}</h2></SmoothReveal>
                    <SmoothReveal><p className='text-base text-center pb-4'>{stage1Par} <br /> {stage1_2Par} <br />
                        {stage1_3Par} <br /> {stage1_4Par} <br /> {stage1_5Par}</p></SmoothReveal>
                </div>
                <div className='flex flex-col bg-white rounded-lg shadow-lg gap-3 hover:-translate-y-2 transition-transform duration-300 ease-in-out'>
                    <img className='rounded-xl' src="/images/second-stage-Photoroom.png" alt="" />
                    <hr />
                    <SmoothReveal><h2 className='mt-1 text-center text-xl text-[#0A0D31] font-semibold'>{stage2Title}</h2></SmoothReveal>
                    <SmoothReveal><p className='text-base text-center pb-4'>{stage2Par} <br /> {stage2_2Par} <br />
                        {stage2_3Par} <br /> {stage2_4Par} <br /> {stage2_5Par}</p></SmoothReveal>
                </div>
                <div className='flex flex-col bg-white rounded-lg shadow-lg gap-3 hover:-translate-y-2 transition-transform duration-300 ease-in-out'>
                    <img className='rounded-xl' src="/images/third-stage-Photoroom.png" alt="" />
                    <hr />
                    <SmoothReveal><h2 className='mt-1 text-center text-xl text-[#0A0D31] font-semibold'>{stage3Title}</h2></SmoothReveal>
                    <SmoothReveal><p className='text-base text-center pb-4'>{stage3Par} <br /> {stage3_2Par} <br />
                        {stage3_3Par} <br /> {stage3_4Par} <br /> {stage3_5Par}</p></SmoothReveal>
                </div>
                <div className='flex flex-col bg-white rounded-lg shadow-lg gap-3 hover:-translate-y-2 transition-transform duration-300 ease-in-out'>
                    <img className='rounded-xl' src="/images/forth-stage-Photoroom.png" alt="" />
                    <hr />
                    <SmoothReveal><h2 className='mt-1 text-center text-xl text-[#0A0D31] font-semibold'>{stage4Title}</h2></SmoothReveal>
                    <SmoothReveal><p className='text-base text-center pb-4'>{stage4Par} <br /> {stage4_2Par} <br />
                        {stage4_3Par} <br /> {stage4_4Par} <br /> {stage4_5Par}</p></SmoothReveal>
                </div>
            </div>
        </section>
  )
}

export default Stages_Demo
