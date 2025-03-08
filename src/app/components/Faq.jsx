import React from 'react'
import SmoothReveal from './SmoothReveal';

const Faq = ({ language, translations }) => {

    const { faqTitle, faq1Q, faq1A, faq2Q, faq2A, faq3Q, faq3A, faq4Q, faq4A,
    } = translations[language];

    return (
        <section id='faq' className="px-7 py-12 lg:px-20 bg-[#F2F9FF]">
            <SmoothReveal><h2 className='text-center text-[#0A0D31] font-bold text-3xl leading-[45px] xl:text-5xl xl:leading-[65px]'>{faqTitle}</h2></SmoothReveal>
            <SmoothReveal><div className='space-y-6 py-7'>
                <details
                    className="group border-s-4 border-[#4491E1] bg-[#E5F2FF] p-6 [&_summary::-webkit-details-marker]:hidden"
                    open
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            {faq1Q}
                        </h2>

                        <span className="shrink-0 rounded-full bg-[#E5F2FF] p-1.5 text-gray-900 sm:p-3">
                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        {faq1A}
                    </p>
                </details>

                <details
                    className="group border-s-4 border-[#4491E1] bg-[#E5F2FF] p-6 [&_summary::-webkit-details-marker]:hidden"
                    open
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            {faq2Q}
                        </h2>

                        <span className="shrink-0 rounded-full bg-[#E5F2FF] p-1.5 text-gray-900 sm:p-3">
                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        {faq2A}
                    </p>
                </details>


                <details
                    className="group border-s-4 border-[#4491E1] bg-[#E5F2FF] p-6 [&_summary::-webkit-details-marker]:hidden"
                    open
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            {faq3Q}
                        </h2>

                        <span className="shrink-0 rounded-full bg-[#E5F2FF] p-1.5 text-gray-900 sm:p-3">
                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        {faq3A}
                    </p>
                </details>

                <details
                    className="group border-s-4 border-[#4491E1] bg-[#E5F2FF] p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            {faq4Q}
                        </h2>

                        <span className="shrink-0 rounded-full bg-[#E5F2FF] p-1.5 text-gray-900 sm:p-3">
                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        {faq4A}
                    </p>
                </details>
            </div></SmoothReveal>
        </section>
    )
}

export default Faq

{/* < li >
    <a
        className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
        href="#"
    >
        <span className="text-gray-700 transition group-hover:text-gray-700/75">
            Live Chat
        </span>

        <span className="relative flex size-2">
            <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
            ></span>
            <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
        </span>
    </a>
                                    </ > */}