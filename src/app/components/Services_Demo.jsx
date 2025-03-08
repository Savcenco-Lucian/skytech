'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SmoothReveal from './SmoothReveal';

const Services_Demo = ({ language, translations }) => {

    const { serviceTitle, serviceSub, serviceSub2, serviceSub3, servicePar,
    landingPar, landingBen1, landingBen2, landingBen3, landingBen4, landingBen5, landingBen6, landingBtn,
    ecomTitle, ecomPar, ecomBen1, ecomBen2, ecomBen3, ecomBen4, ecomBen5, ecomBen6, 
    corpTitle, corpPar, corpBen1, corpBen2, corpBen3, corpBen4, corpBen5, corpBen6,
    webTitle, webPar, webBen1, webBen2, webBen3, webBen4, webBen5, webBen6,
    markTitle, markPar, markBen1, markBen2, markBen3, markBen4, markBen5, markBen6,
    } = translations[language];

    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };


    return (
        <section id='services' className='flex flex-col gap-4 bg-[#0E162C] px-7 py-20 lg:px-20'>
            <div className="relative">
                {/* Ellipse Background Image */}
                <Image
                    alt="Background Ellipse"
                    src="/images/Ellipse 1.webp"
                    width={300}
                    height={100}
                    className="absolute"
                />
                <div className='flex flex-col justify-between xl:items-center xl:flex-row'>
                    <div className='flex flex-col gap-4 py-7'>
                        <h3 className='font-medium text-[#BBC7D9] text-lg lg:text-xl'>{serviceTitle}</h3>
                        <SmoothReveal><h2 className='text-[#E5F2FF] font-bold text-3xl leading-[45px] xl:text-5xl xl:leading-[65px]'>{serviceSub} <span className='bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent'>{serviceSub2} </span> <br /> {serviceSub3}</h2></SmoothReveal>
                    </div>
                    <div id='landing-page' className=''>
                        <SmoothReveal><p className='xl:w-[650px] text-[#E5F2FF] text-base xl:text-lg'>{servicePar}
                        </p></SmoothReveal>
                    </div>
                </div>

                <div className='flex flex-col gap-4 py-7'>
                    <details id='magazin-online'
                        className="group [&_summary::-webkit-details-marker]:hidden"

                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <SmoothReveal><h2 className='text-[#A7B2CE] font-medium text-3xl leading-[45px] xl:text-5xl xl:leading-[65px]'>Landing Page</h2></SmoothReveal>
                            <span className="shrink-0 rounded-full text-gray-900">

                                <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-300 size-12 xl:size-16 group-open:-rotate-45" viewBox="0 0 50 50"><path fill="#E5F2FF" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15" />
                                    <path fill="#E5F2FF" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" />
                                    <path fill="#E5F2FF" d="M16 24h17v2H16z" /></svg>
                            </span>
                        </summary>

                        <div className="mt-4 mb-3 leading-relaxed text-base xl:text-lg text-[#E5F2FF] xl:w-[1000px]">
                            <p>{landingPar}</p>
                            <ul className="list-disc list-inside grid grid-cols-1 mt-2 space-y-1">
                                <li>{landingBen1}</li>
                                <li>{landingBen2}</li>
                                <li>{landingBen3}</li>
                                <li>{landingBen4}</li>
                                <li>{landingBen5}</li>
                                <li>{landingBen6}</li>
                            </ul>
                        </div>

                        <div className='flex gap-3'>
                            <Link href="/contact" onClick={(e) => handleScroll(e, 'contact')} className='text-base bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent font-semibold xl:text-lg'>{landingBtn} </Link>
                            <img src="/images/arrow-right.svg" alt="" />
                        </div>
                    </details>
                    <div className='mt-4 w-full bg-[#A7B2CE] h-0.5'></div>
                    <details id='site-corporativ'
                        className="group [&_summary::-webkit-details-marker]:hidden"

                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <SmoothReveal><h2 className='text-[#A7B2CE] font-medium text-3xl leading-[45px] xl:text-5xl xl:leading-[65px]'>{ecomTitle}</h2></SmoothReveal>
                            <span className="shrink-0 rounded-full text-gray-900">

                                <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-300 size-12 xl:size-16 group-open:-rotate-45" viewBox="0 0 50 50"><path fill="#E5F2FF" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15" /><path fill="#E5F2FF" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" /><path fill="#E5F2FF" d="M16 24h17v2H16z" /></svg>
                            </span>
                        </summary>

                        <div className="mt-4 mb-3 leading-relaxed text-base xl:text-lg text-[#E5F2FF] xl:w-[1000px]">
                            <p>{ecomPar}</p>
                            <ul className="list-disc list-inside grid grid-cols-1 mt-2 space-y-1">
                                <li>{ecomBen1}</li>
                                <li>{ecomBen2}</li>
                                <li>{ecomBen3}</li>
                                <li>{ecomBen4}</li>
                                <li>{ecomBen5}</li>
                                <li>{ecomBen6}</li>
                            </ul>
                        </div>
                        <div className='flex gap-3'>
                            <Link href="/contact" onClick={(e) => handleScroll(e, 'contact')} className='text-base bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent font-semibold xl:text-lg'>{landingBtn} </Link>
                            <img src="/images/arrow-right.svg" alt="" />
                        </div>
                    </details>
                    <div className='mt-4 w-full bg-[#A7B2CE] h-0.5'></div>
                    <details id='web-design'
                        className="group [&_summary::-webkit-details-marker]:hidden"

                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <SmoothReveal><h2 className='text-[#A7B2CE] font-medium text-3xl leading-[45px] xl:text-5xl xl:leading-[65px]'>{corpTitle}</h2></SmoothReveal>
                            <span className="shrink-0 rounded-full text-gray-900">

                                <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-300 size-12 xl:size-16 group-open:-rotate-45" viewBox="0 0 50 50"><path fill="#E5F2FF" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15" /><path fill="#E5F2FF" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" /><path fill="#E5F2FF" d="M16 24h17v2H16z" /></svg>
                            </span>
                        </summary>

                        <div className="mt-4 mb-3 leading-relaxed text-base xl:text-lg text-[#E5F2FF] xl:w-[1000px]">
                            <p>{corpPar}</p>
                            <ul className="list-disc list-inside grid grid-cols-1 mt-2 space-y-1">
                                <li>{corpBen1}</li>
                                <li>{corpBen2}</li>
                                <li>{corpBen3}</li>
                                <li>{corpBen4} </li>
                                <li>{corpBen5}</li>
                                <li>{corpBen6}</li>  
                            </ul>
                        </div>
                        <div className='flex gap-3'>
                            <Link href="/contact" onClick={(e) => handleScroll(e, 'contact')} className='text-base bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent font-semibold xl:text-lg'>{landingBtn} </Link>
                            <img src="/images/arrow-right.svg" alt="" />
                        </div>
                    </details>
                    <div className='mt-4 w-full bg-[#A7B2CE] h-0.5'></div>
                    <details id='marketing-digital'
                        className="group [&_summary::-webkit-details-marker]:hidden"

                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <SmoothReveal><h2 className='text-[#A7B2CE] font-medium text-3xl leading-[45px] xl:text-5xl xl:leading-[65px]'>{webTitle}</h2></SmoothReveal>
                            <span className="shrink-0 rounded-full text-gray-900">

                                <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-300 size-12 xl:size-16 group-open:-rotate-45" viewBox="0 0 50 50"><path fill="#E5F2FF" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15" /><path fill="#E5F2FF" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" /><path fill="#E5F2FF" d="M16 24h17v2H16z" /></svg>
                            </span>
                        </summary>

                        <div className="mt-4 mb-3 leading-relaxed text-base xl:text-lg text-[#E5F2FF] xl:w-[1000px]">
                            <p>{webPar}</p>
                            <ul className="list-disc list-inside grid grid-cols-1 mt-2 space-y-1">
                                <li>{webBen1}</li>
                                <li>{webBen2}</li>
                                <li>{webBen3}</li>
                                <li>{webBen4} </li>
                                <li>{webBen5}</li>
                                <li>{webBen6}</li>  
                            </ul>
                        </div>
                        <div className='flex gap-3'>
                            <Link href="/contact" onClick={(e) => handleScroll(e, 'contact')} className='text-base bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent font-semibold xl:text-lg'>{landingBtn} </Link>
                            <img src="/images/arrow-right.svg" alt="" />
                        </div>
                    </details>
                    <div className='mt-4 w-full bg-[#A7B2CE] h-0.5'></div>
                    <details
                        className="group [&_summary::-webkit-details-marker]:hidden"

                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <SmoothReveal><h2 className='text-[#A7B2CE] font-medium text-3xl leading-[45px] xl:text-5xl xl:leading-[65px]'>{markTitle}</h2></SmoothReveal>
                            <span className="shrink-0 rounded-full text-gray-900">

                                <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-300 size-12 xl:size-16 group-open:-rotate-45" viewBox="0 0 50 50"><path fill="#E5F2FF" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15" /><path fill="#E5F2FF" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" /><path fill="#E5F2FF" d="M16 24h17v2H16z" /></svg>
                            </span>
                        </summary>

                        <div className="mt-4 mb-3 leading-relaxed text-base xl:text-lg text-[#E5F2FF] xl:w-[1000px]">
                            <p>{markPar}</p>
                            <ul className="list-disc list-inside grid grid-cols-1 mt-2 space-y-1">
                                <li>{markBen1}</li>
                                <li>{markBen2}</li>
                                <li>{markBen3}</li>
                                <li>{markBen4} </li>
                                <li>{markBen5}</li>
                                <li>{markBen6}</li>  
                            </ul>
                        </div>
                        <div className='flex gap-3'>
                            <Link href="/contact" onClick={(e) => handleScroll(e, 'contact')} className='text-base bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent font-semibold xl:text-lg'>{landingBtn} </Link>
                            <img src="/images/arrow-right.svg" alt="" />
                        </div>
                    </details>
                    <div className='mt-4 w-full bg-[#A7B2CE] h-0.5'></div>
                </div>
            </div>
        </section>
    )
}

export default Services_Demo