'use client'
import React from "react";
import Link from "next/link";
import SmoothReveal from "./SmoothReveal";


const PriceCards = ({ language, translations }) => {

    const { priceTitle, priceSub, priceSub2, priceSub3, pricePar, pricePar2,
    ecomTitle, corpTitle, card1Title, card1Par, card2Par, card3Par,
    card1Ben1, card1Ben2, card1Ben3, card1Ben4, card1Ben5, card1Ben6, card1Ben7,
    card2Ben1, card2Ben2, card2Ben3, card3Ben1, cardBtn
            } = translations[language];

    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

    return (
        <section id="prices" className="bg-[#0E162C] px-7 py-20 lg:px-20 text-white">
            <div className="text-center flex flex-col gap-4 mb-12">
                <h3 className='font-medium text-[#BBC7D9] text-lg lg:text-xl'>{priceTitle}</h3>
                <SmoothReveal><h2 className='text-[#E5F2FF] font-bold text-3xl leading-[45px] xl:text-5xl xl:leading-[65px]'>{priceSub} <span className='bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent'>{priceSub2} </span>{priceSub3}</h2></SmoothReveal>
                <SmoothReveal><p className="mt-3 text-gray-400 max-w-2xl mx-auto">
                    {pricePar} <span className='bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] bg-clip-text text-transparent font-medium'>SkyTech</span> {pricePar2}
                </p></SmoothReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <SmoothReveal><div className="bg-[#111C37] p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h4 className="text-2xl font-semibold">Landing Page</h4>
                    <p className="text-4xl font-bold mt-4">{card1Title} 300 € <span className="text-2xl font-bold">/</span> <span className="text-2xl text-gray-400 line-through decoration-red-500 decoration-2 font-bold"> 499.99 €</span></p>
                    <p className="mt-4 text-gray-400">
                        {card1Par}
                    </p>
                    <ul className="mt-6 space-y-3 text-gray-300">
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben1}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben2}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben3}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben4}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben5}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben6}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben7}</li>
                    </ul>
                    <Link href="/contact">
                        <button onClick={(e) => handleScroll(e, 'contact')} className="mt-6 w-full font-bold py-3 transform hover:-translate-y-1 transition duration-400 bg-transparent border border-gray-400 text-white rounded-lg hover:bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] transition">
                            {cardBtn}
                        </button>
                    </Link>
                </div></SmoothReveal>

                {/* Advanced Plan */}
                <SmoothReveal><div className="bg-[#111C37] p-8 rounded-xl shadow-lg border border-2 border-[#4491E1] hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h4 className="text-2xl font-semibold">{ecomTitle}</h4>
                    <p className="text-4xl font-bold mt-4">{card1Title} 650 € <span className="text-2xl font-bold">/</span> <span className="text-2xl text-gray-400 line-through decoration-red-500 decoration-2 font-bold"> 1199.99 €</span></p>
                    <p className="mt-4 text-gray-400">
                        {card2Par}
                    </p>
                    <ul className="mt-6 space-y-3 text-gray-300">
                        <li><span className="text-[#4491E1]">✔</span> {card2Ben1}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben2}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card2Ben2}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card2Ben3}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben3}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben4}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben5}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben6}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben7}</li>
                    </ul>
                    <Link href="/contact">
                        <button onClick={(e) => handleScroll(e, 'contact')} className="mt-6 w-full font-bold py-3 bg-transparent transform hover:-translate-y-1 transition duration-400 border border-gray-400 text-white rounded-lg hover:bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] transition">
                            {cardBtn}
                        </button>
                    </Link>
                </div></SmoothReveal>

                {/* Premium Plan */}
                <SmoothReveal><div className="bg-[#111C37] p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h4 className="text-2xl font-semibold">{corpTitle}</h4>
                    <p className="text-4xl font-bold mt-4">{card1Title} 600 € <span className="text-2xl font-bold">/</span> <span className="text-2xl text-gray-400 line-through decoration-red-500 decoration-2 font-bold"> 839.99 €</span></p>
                    <p className="mt-4 text-gray-400">
                        {card3Par}
                    </p>
                    <ul className="mt-6 space-y-3 text-gray-300">
                        <li><span className="text-[#4491E1]">✔</span> {card3Ben1}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben2}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben3}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben4}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben5}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben6}</li>
                        <li><span className="text-[#4491E1]">✔</span> {card1Ben7}</li>
                    </ul>
                    <Link href="/contact">
                        <button onClick={(e) => handleScroll(e, 'contact')} className="mt-6 w-full font-bold py-3 bg-transparent transform hover:-translate-y-1 transition duration-400 border border-gray-400 text-white rounded-lg hover:bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] transition">
                            {cardBtn}
                        </button>
                    </Link>
                </div></SmoothReveal>
            </div>
        </section>
    );
};

export default PriceCards;
