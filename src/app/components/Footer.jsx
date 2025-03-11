'use client'

import React, {useState, useEffect} from 'react'
import Link from 'next/link';

const Footer = ({ language, translations }) => {

    const { fotterPar, aboutBtn, about, services, prices, portfolio, ecomTitle, corpTitle, markTitle, webTitle,
        footerLink1, footerLink2, footerLink3, footerLink4, footerLink5, copyright
    } = translations[language];

    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    return (
        <div className='flex flex-col gap-4 bg-[#0E162C] px-7 py-20 lg:px-20'>
            <footer className="w-full">
                <div className="">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                        <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                            <Link href="/" className="flex justify-center w-1/2 md:w-1/4 lg:w-1/2 lg:justify-start">
                                <img src="/images/Sky-logo.webp" alt="skytech logo" />
                            </Link>
                            <p className="py-8 text-base text-[#E5F2FF] lg:max-w-xs lg:text-left">{fotterPar}</p>
                            <Link href="tel:+37360300553" className="py-3 px-5 transform hover:-translate-y-1 transition duration-400 h-11 w-fit bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] rounded-full shadow-sm text-base text-white mx-auto lg:mx-0">
                                {aboutBtn}
                            </Link>
                        </div>
                        <div className="lg:mx-auto text-left ">
                            <h4 className="text-lg text-[#E5F2FF] font-bold mb-6">SkyTech</h4>
                            <ul className="text-base  transition-all duration-500">
                                <li className="mb-6"><Link href="/despre-noi" onClick={(e) => handleScroll(e, 'despre-noi')}  className="text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">{about}</Link></li>
                                <li className="mb-6"><Link href="/services" onClick={(e) => handleScroll(e, 'services')} className=" text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">{services}</Link></li>
                                <li className="mb-6"><Link href="/portofoliu" onClick={(e) => handleScroll(e, 'portofoliu')} className=" text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">{portfolio}</Link></li>
                                <li><Link href="/prices" onClick={(e) => handleScroll(e, 'prices')} className=" text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">{prices}</Link></li>
                            </ul>
                        </div>
                        <div className="lg:mx-auto text-left ">
                            <h4 className="text-lg text-[#E5F2FF] font-bold mb-6">{services}</h4>
                            <ul className="text-base  transition-all duration-500">
                                <li className="mb-6"><Link href="/landing-page" onClick={(e) => handleScroll(e, 'landing-page')} className="text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">Landing Page</Link></li>
                                <li className="mb-6"><Link href="/magazin-online" onClick={(e) => handleScroll(e, 'magazin-online')} className=" text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">{ecomTitle}</Link></li>
                                <li className="mb-6"><Link href="/site-corporativ" onClick={(e) => handleScroll(e, 'site-corporativ')} className=" text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">{corpTitle}</Link></li>
                                <li className="mb-6"><Link href="/web-design" onClick={(e) => handleScroll(e, 'web-design')} className=" text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">{webTitle}</Link></li>
                                <li><Link href="/marketing-digital" onClick={(e) => handleScroll(e, 'marketing-digital')} className=" text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">{markTitle}</Link></li>
                            </ul>
                        </div>
                        <div className="lg:mx-auto text-left">
                            <h4 className="text-lg text-[#E5F2FF] font-bold mb-6">{footerLink3}</h4>
                            <ul className="text-base  transition-all duration-500">
                                <li className="mb-6"><Link href="/faq" onClick={(e) => handleScroll(e, 'faq')} className="text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">FAQ</Link></li>
                                <li className="mb-6"><Link href="/contact" onClick={(e) => handleScroll(e, 'contact')} className=" text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">{footerLink1}</Link></li>
                            </ul>
                        </div>
                        <div className="lg:mx-auto text-left">
                            <h4 className="text-lg text-[#E5F2FF] font-bold mb-6">{footerLink2}</h4>
                            <ul className="text-base  transition-all duration-500">
                                <li className="mb-6"><Link href="tel:+37360300553" className="text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">{footerLink4}</Link></li>
                                <li className="mb-6"><Link href="mailto:skytechcompany4@gmail.com" className="text-[#E5F2FF] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E5F2FF]">{footerLink5}</Link></li>
                                <li className="mb-6">{/* Scroll to Top Button */}
                                    {showScrollTop && (
                                        <button
                                            onClick={scrollToTop}
                                            className="w-12 h-12 hover:-translate-y-1 transition duration-400 text-white flex items-center justify-center bg-[#4491E1] rounded-full shadow-lg transition-all duration-300 hover:bg-[#5D72D9]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10 4a1 1 0 01.7.3l5 5a1 1 0 01-1.4 1.4L10 6.4l-4.3 4.3a1 1 0 01-1.4-1.4l5-5A1 1 0 0110 4z" clipRule="evenodd" />
                                            </svg>
                                            
                                        </button>
                                    )}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-7 border-t border-gray-200">
                        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                            <span className="text-sm text-[#E5F2FF] ">©<a href="https://pagedone.io/">SkyTech</a> {copyright}</span>
                            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                                <Link href="https://www.instagram.com/skytech.moldova/" className="w-9 h-9 hover:-translate-y-1 transition duration-400 rounded-full bg-transparent border border-[#F2F9FF] flex justify-center items-center hover:bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="#F2F9FF" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>

                                </Link>
                                <Link href="https://www.facebook.com/profile.php?id=61573691114800" className="w-9 h-9 hover:-translate-y-1 transition duration-400 rounded-full bg-transparent border border-[#F2F9FF] flex justify-center items-center hover:bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="#F2F9FF" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg>
                                </Link>
                                <Link href="https://wa.me/+37360300553" className="w-9 h-9 hover:-translate-y-1 transition duration-400 rounded-full bg-transparent border border-[#F2F9FF] flex justify-center items-center hover:bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#F2F9FF" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
                                </Link>
                                <Link href="https://t.me/skytech1301" className="w-9 h-9 hover:-translate-y-1 transition duration-400 rounded-full bg-transparent border border-[#F2F9FF] flex justify-center items-center hover:bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F2F9FF" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
