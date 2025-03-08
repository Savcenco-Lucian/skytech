"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import SmoothReveal from "./SmoothReveal";

const Contact = ({ language, translations }) => {

  const { contactTitle, contact1, contact2, contact3, contactBtn, contactRes, contactRes2, contactRes3
  } = translations[language];

  const [status, setStatus] = useState(""); // ✅ Inițializare status

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch("https://formspree.io/f/xrberzdj", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      toast.success({ contactRes }, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else {
      setStatus({ contactRes2 }); // ✅ Setează mesaj de eroare
      toast.error({ contactRes3 }, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <section id="contact" className="px-7 pt-10 pb-20 lg:px-20 bg-[#F2F9FF]">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <Image width={600}
                  height={505}
                  src="/images/contact-img.webp"
                  alt="ContactUs tailwind section"
                  className="hidden md:flex w-full h-[505px] lg:rounded-l-2xl rounded-lg bg-blend-multiply bg-indigo-700 object-cover"
                />
              </div>
            </div>
          </div>

          <SmoothReveal><form onSubmit={handleSubmit} className="pl-0 lg:pl-11 lg:rounded-r-2xl rounded-lg">
            <h2 className="text-[#0A0D31] font-bold text-4xl leading-10 mb-11">
              {contactTitle}
            </h2>

            <label className="font-medium">{contact1} <span className="text-[#4491E1]">*</span></label>
            <input
              type="text" name="name" required
              className="w-full h-12 text-gray-600 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-600 focus:outline-none pl-4 mt-3 mb-10"
              placeholder=""
            />

            <label className="font-medium">{contact2} <span className="text-[#4491E1]">*</span></label>
            <input
              type="tel" name="phone" required
              className="w-full h-12 text-gray-600 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-600 focus:outline-none pl-4 mt-3 mb-10"
              placeholder=""
            />

            <label className="font-medium">{contact3} <span className="text-[#4491E1]">*</span></label>
            <input
              type="text" name="service" required
              className="w-full h-12 text-gray-600 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-600 focus:outline-none pl-4 mt-3 mb-10"
              placeholder=""
            />

            <input type="hidden" name="_subject" value="Nou mesaj de la formularul de contact!" />

            <button type="submit" className="w-full h-12 text-white text-base font-semibold leading-6 rounded-lg transition-all duration-700 hover:bg-indigo-800 bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] shadow-sm">
              {contactBtn}
            </button>

            {/* ✅ Afișează statusul sub buton */}
            {status && (
              <p className={`mt-4 text-lg font-medium ${status.includes("succes") ? "text-green-600" : "text-red-600"}`}>
                {status}
              </p>
            )}
          </form></SmoothReveal>
        </div>
      </div>

      <ToastContainer /> {/* ✅ Adaugă ToastContainer pentru notificări */}
    </section>
  );
}

export default Contact;
