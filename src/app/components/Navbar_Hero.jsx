'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'
import Typewriter from 'typewriter-effect';
import CountUp from "react-countup";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { usePathname, useRouter } from "next/navigation";
import SmoothReveal from './SmoothReveal';

const Navbar_Hero = ({ language, handleLanguageChange, translations }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter();
  const pathname = usePathname();

  const { about, services, portfolio, prices, requestQuote, contactUs, products, heroTitle, heroTitle2,
    heroTitle3, heroTitle4, heroTitle5, heroTitle6, heroText, heroText2, heroText3, stat1, stat2, stat3 } = translations[language];

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigation = (e, id) => {
    e.preventDefault();

    if (pathname === "/") {
      handleScroll(e, id);
    } else {
      router.push("/").then(() => {
        setTimeout(() => handleScroll(e, id), 300);
      });
    }
  };

  return (
    //NAVBAR
    <div className='bg-[#0E162C]'> {/*#111C37 */}
      <header className="fixed z-50 top-0 w-full bg-[#0E162C]">

        <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-20">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="/images/Sky-logo.webp"  // Ensure your logo is inside the /public/images/ folder
                className="h-8 w-auto" width={100} // Set an appropriate width
                height={40} // Set an appropriate height
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">{mobileMenuOpen ? "Close main menu" : "Open main menu"}</span>
              {mobileMenuOpen ? (
                <XMarkIcon aria-hidden="true" className="size-7 text-[#F2F9FF] transition-transform duration-300" />
              ) : (
                <img src='/images/heroicons--bars-3-bottom-right.svg' aria-hidden="true" className="size-7 text-[#F2F9FF] transition-transform duration-300" />
              )}
            </button>

          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">

            <Link href="/" onClick={(e) => handleScroll(e, 'despre-noi')} className="text-sm/6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full font-semibold text-[#F2F9FF]">
              {about}
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-x-1 text-sm/6 font-semibold text-[#F2F9FF]">
                {services}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400 transition-transform duration-200 group-hover:rotate-180"
                />
              </button>

              {/* Dropdown Content */}
              <div className="absolute top-full left-0 z-10 mt-3 w-screen max-w-[300px] overflow-hidden rounded-3xl bg-[#F2F9FF] ring-1 shadow-lg ring-gray-900/5 
                  opacity-0 invisible transition-all duration-200 ease-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-1">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-4 p-4 text-sm hover:bg-[#4491E1] hover:rounded-lg"
                    >
                      <div key={item.icon} className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 ">
                        <Image src={item.icon} alt='icon' width={30} height={30} />
                      </div>
                      <div className="flex-auto">
                        <Link href={`#${item.id}`}
                          onClick={(e) => handleNavigation(e, item.id)} className="block font-semibold text-[#0A0D31] hover:font-bold">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-[#0A0D31]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/" onClick={(e) => handleScroll(e, 'portofoliu')} className="text-sm/6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full  font-semibold text-[#F2F9FF]">
              {portfolio}
            </Link>
            <Link href="/" onClick={(e) => handleScroll(e, 'prices')} className="text-sm/6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
    after:bg-gradient-to-r after:from-[#4491E1] after:via-[#4491E1] after:to-[#5D72D9] after:transition-all after:duration-300 hover:after:w-full font-semibold text-[#F2F9FF]">
              {prices}
            </Link>

            <div className='flex justify-between gap-3 items-center'>
              <button onClick={() => handleLanguageChange('ro')}>
                <Image width={100} height={100} className="size-6" src="/images/romania-flag-round-circle-icon.webp" alt="Romanian Flag" />
              </button>
              <div className="w-[1px] h-6 bg-[#E5F2FF]"></div>
              <button onClick={() => handleLanguageChange('ru')}>
                <Image width={100} height={100} className="size-6" src="/images/russia-flag-round-circle-icon.webp" alt="Russian Flag" />
              </button>
            </div>

          </PopoverGroup>
          <div className="hidden xl:flex lg:flex-1 lg:justify-end gap-4">
            <Link href="/" onClick={(e) => handleScroll(e, 'contact')} className="text-sm/6 transform hover:-translate-y-1 transition duration-400 font-semibold text-[#F2F9FF] px-4 py-2 rounded-lg bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9]">
              {requestQuote}
            </Link>
            <Link href="tel:+37360300553" className="text-sm/6 transform hover:-translate-y-1 transition duration-400 font-semibold border border-[#F2F9FF] px-4 py-2 rounded-lg text-[#F2F9FF] hover:bg-[#F2F9FF] hover:text-[#0E162C] hover:transition hover:duration-200">
              {contactUs}
            </Link>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed bg-[#0E162C] inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  alt=""
                  src="/images/Sky-logo.webp"  // Ensure your logo is inside the /public/images/ folder
                  className="h-8 w-auto" width={100} // Set an appropriate width
                  height={40} // Set an appropriate height
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6 text-[#F2F9FF]" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link href="/despre-noi" onClick={(e) => {
                    handleScroll(e, 'despre-noi');
                    setMobileMenuOpen(false);
                  }}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#F2F9FF]">
                    {about}
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#F2F9FF]">
                      {services}
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none transition-transform duration-200 group-hover:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 ml-3 space-y-2 border-l-2 border-[#4491E1]">
                      {[...products].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={`#${item.id}`}
                          onClick={(e) => {
                            handleNavigation(e, item.id);
                            setMobileMenuOpen(false);
                          }}

                          className="block rounded-lg py-2 pr-3 pl-8 text-sm/7 font-semibold text-[#F2F9FF]"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Link href="/" onClick={(e) => {
                    handleScroll(e, 'portofoliu');
                    setMobileMenuOpen(false);
                  }} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#F2F9FF]">
                    {portfolio}
                  </Link>
                  <Link href="/" onClick={(e) => {
                    handleScroll(e, 'prices');
                    setMobileMenuOpen(false);
                  }} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#F2F9FF]">
                    {prices}
                  </Link>
                  <div className='flex pt-4 gap-3 items-center'>
                    <button
                      onClick={() => {
                        handleLanguageChange('ro');
                        setMobileMenuOpen(false);
                      }}
                    >
                      <img
                        className="size-6"
                        src="/images/romania-flag-round-circle-icon.webp"
                        alt="Romanian Flag"
                      />
                    </button>

                    <div className="w-[1px] h-6 bg-[#E5F2FF]"></div>
                    <button
                      onClick={() => {
                        handleLanguageChange('ru');
                        setMobileMenuOpen(false);
                      }}
                    >
                      <img
                        className="size-6"
                        src="/images/russia-flag-round-circle-icon.webp"
                        alt="Russian Flag"
                      />
                    </button>
                  </div>
                </div>

                <div className='py-6 px-3 flex gap-12'>
                  <Link href="/" className="-mx-3 block hover:-translate-y-1 transition duration-400 rounded-lg text-sm/7 font-semibold text-[#F2F9FF] px-4 py-2 rounded-lg bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9]">
                    {requestQuote}
                  </Link>
                  <Link href="tel:+37360300553" className="-mx-3 block hover:-translate-y-1 transition duration-400 rounded-lg text-sm/7 font-semibold border border-[#F2F9FF] px-4 py-2 rounded-lg text-[#F2F9FF]">
                    {contactUs}
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className='flex flex-col h-[500px] md:h-[300px] lg:h-[350px] xl:h-[350px] justify-between items-center gap-4 px-7 py-24 md:pb-12 md:flex-row lg:px-20 xl:py-40'>
        <div className="relative xl:mt-32 flex">
          {/* Ellipse Background Image */}
          <Image
            alt="Background Ellipse"
            src="/images/Ellipse 1.webp"
            width={300}
            height={100}
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-[70%] md:w-[60%] lg:w-[60%] xl:w-[60%]"
          />
          <h1 className="text-[1.7rem] font-bold text-[#E5F2FF] md:text-[2.1rem] md:leading-relaxed xl:leading-normal lg:text-[2.9rem] xl:text-[3.5rem] xl:w-[800px] xl:py-8">
            {heroTitle} <span className='bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent'>{heroTitle2}</span> <span className="hidden xl:inline"> {heroTitle3}</span> {" "}

            {" "} {heroTitle4}  <span className='bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent'>{heroTitle5}</span> {" "}
            {heroTitle6}{" "}
            <span className="">
              {language === "ro" ? (
                <Typewriter
                  options={{
                    strings: [
                      "generează vânzări",
                      "cresc vizibilitatea",
                      "atrag clienți",
                      "susțin eficiența",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 50,
                  }}
                />
              ) : (
                " " // Empty space or a static text if you want
              )}

            </span>
          </h1>
        </div>

        <div className='hidden w-[1px] h-20 bg-[#E5F2FF] md:flex md:-translate-x-5 md:-translate-y-8 lg:-translate-x-2 lg:h-28 xl:translate-x-2 xl:translate-y-5 xl:h-32'></div>

        <div className='flex flex-col justify-between items-center xl:mt-32 gap-8 md:gap-16'>
          <SmoothReveal><p className='w-80 lg:w-64 xl:w-[520px] text-[#E5F2FF] py-2 text-base md:translate-y-12 xl:translate-y-5 xl:text-lg xl:pl-10 xl:leading-loose'>{heroText}<span className="hidden xl:inline"></span> {/* <span className="hidden xl:inline">Adaptăm <br /> fiecare proiect  la nevoile și obiectivele afacerii tale</span> */}
          </p></SmoothReveal>
          <div className='flex justify-between items-center gap-4 xl:pl-4'>
            <div>
              <span className='text-[#F2F9FF] text-2xl xl:text-3xl'><CountUp start={0} end={20} duration={3} /></span> <span className='text-xl font-bold bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent'>+</span>
              <SmoothReveal><p className='text-[#E5F2FF] pt-2'>{stat1}</p></SmoothReveal>
            </div>
            <div>
              <span className='text-[#F2F9FF] text-2xl xl:text-3xl'><CountUp start={0} end={30} duration={3} /></span> <span className='text-xl font-bold bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent'>+</span>
              <SmoothReveal><p className='text-[#E5F2FF] pt-2'>{stat2}</p></SmoothReveal>
            </div>
            <div>
              <span className='text-[#F2F9FF] text-2xl xl:text-3xl'><CountUp start={0} end={100} duration={3} /></span> <span className='text-xl font-bold bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent'>+</span>
              <SmoothReveal><p className='text-[#E5F2FF] pt-2'>{stat3}</p></SmoothReveal>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center px-7 lg:px-20'>
        <Image width={1200} height={600} className='w-full h-[200px] translate-y-12 lg:translate-y-12 xl:translate-y-24 md:h-[300px] lg:h-[500px] object-cover rounded-2xl md:rounded-3xl' src="/images/hero_img.webp" alt="" />
      </div>
    </div>
  )
}
export default Navbar_Hero