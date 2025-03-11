'use client'

import React, { useState, useEffect } from "react";

const SocialShare = () => {
    const [showSocial, setShowSocial] = useState(false);
    const [isClicked, setIsClicked] = useState(false); // Track the button state
    

    return (
        <div className="relative z-20">
            {/* Social Media Icons */}
            <div
                className={`fixed inset-0 bg-opacity-30 transition-all duration-300 ${showSocial ? "block" : "hidden"
                    }`}
                onClick={() => setShowSocial(false)}
            ></div>

            <div className={`fixed bottom-5 right-6 ${showSocial ? "show" : ""}`}>
                <div
                    className={`flex flex-col items-end space-y-4 ${showSocial ? "" : "hidden"}`}
                >
                    <a
                        href="tel:+37360300553"
                        className="w-16 h-16 lg:w-18 lg:h-18 bg-[#03E78B] text-white flex items-center justify-center rounded-full shadow-lg transition-transform duration-500"
                    >
                         <img src="/images/phone-solid.webp" className="w-8 h-8" alt="phone" />
                    </a>
                    <a
                        href="https://t.me/skytech1301"
                        className="w-16 h-16 lg:w-18 lg:h-18 bg-[#419fd9] text-white flex items-center justify-center rounded-full shadow-lg transition-transform duration-500"
                    >
                         <img src="/images/telegram-brands-solid.webp" className="w-10 h-10" alt="telegram" />
                    </a>
                    <a
                        href="viber://chat?number=+37360300553"
                        className="w-16 h-16 lg:w-18 lg:h-18 bg-[#665CAC] text-white flex items-center justify-center rounded-full shadow-lg transition-transform duration-500"
                    >
                         <img src="/images/viber-brands-solid.webp" className="w-10 h-10" alt="viber" />
                    </a>
                    <a
                        href="https://wa.me/+37360300553"
                        className="w-16 h-16 lg:w-18 lg:h-18 bg-[#49E670] text-white flex items-center justify-center rounded-full shadow-lg transition-transform duration-500"
                    >
                        <img src="/images/whatsapp-brands-solid.svg" className="w-10 h-10" alt="whatsapp" />
                    </a>
                </div>

                {/* Share Button */}
                <button
                    id="btn-share"
                    className="pulsating w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] text-white flex items-center justify-center rounded-full mt-4 shadow-lg focus:outline-none"
                    onClick={() => {
                        setShowSocial(!showSocial);
                        setIsClicked(!isClicked); // Toggle the icon and pulse state
                    }}
                >
                    {/* Display the message icon or the close (X-mark) icon */}
                    {isClicked ? (
                        <img
                            className="w-7 h-7" // X-mark (close icon) with a smaller size (you can adjust this as needed)
                            src="/images/xmark-solid.svg" // Use the close_icon for X-mark
                            alt="close"
                        />
                    ) : (
                        <img
                            className="w-10 h-10 transition-transform duration-300" // Message icon with fixed size (w-12 h-12)
                            src="/images/comment-dots-solid (2).webp" // Message icon
                            alt="message"
                        />
                    )}
                </button>
            </div>

        </div>
    );
};

export default SocialShare;