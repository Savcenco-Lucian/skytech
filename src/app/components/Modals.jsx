'use client';

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modals = ({ language, translations }) => {

  const { contact1, contact2, contact3, contactBtn2, placeholder1, placeholder2, placeholder3, modalsTitle, modalsSub, modals3
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
      toast.success("Formular expediat cu succes!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else {
      setStatus("Eroare la expedierea formularului ❌"); // ✅ Setează mesaj de eroare
      toast.error("Eroare! Încearcă din nou.", {
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const showModal = () => {
      setIsOpen(true);
    };

    const timer = setTimeout(showModal, 30000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      const reopenTimer = setTimeout(() => {
        setIsOpen(true);
      }, 90000); // 1 min 30 sec
      return () => clearTimeout(reopenTimer);
    }
  }, [isOpen]);

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed px-7 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl px-3 py-3 dark:bg-gray-700 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 text-gray-400 hover:bg-gray-200 p-2 rounded-lg dark:hover:bg-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6L6 18M6 6l12 12"></path></svg>
            </button>
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <div className="hidden md:block md:w-1/2">
                <img src="/images/premium_photo-1683402693577-035defb30159.webp" alt="Comandă un site" className="w-full rounded-lg h-auto" />
              </div>
              <div className="md:w-1/2 px-4 py-3">
                <h3 className="text-xl font-semibold text-[#0A0D31] dark:text-white">
                  {modalsTitle}
                </h3>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {modalsSub}
                </p>
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="flex flex-col gap-2">
                    <label className="block mb-1 text-sm font-medium text-[#0A0D31] dark:text-white">{contact1} *</label>
                    <input name="name"
                      type="text"
                      className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-600"
                      placeholder={placeholder1}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block mb-1 text-sm font-medium text-[#0A0D31] dark:text-white">{contact2} *</label>
                    <input name="phone"
                      type="text"
                      className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-600"
                      placeholder={placeholder2}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block mb-1 text-sm font-medium text-[#0A0D31] dark:text-white">{modals3} *</label>
                    <input name="service"
                      type="text"
                      className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-600"
                      placeholder={placeholder3}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4491E1] via-[#4491E1] to-[#5D72D9] shadow-sm text-white py-2 font-semibold leading-6 rounded-lg hover:-translate-y-1 transition duration-400"
                  >
                    {contactBtn2}
                  </button>
                </form>
                {/* ✅ Afișează statusul sub buton */}
                {status && (
                  <p className={`mt-4 text-lg font-medium ${status.includes("succes") ? "text-green-600" : "text-red-600"}`}>
                    {status}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer /> {/* ✅ Adaugă ToastContainer pentru notificări */}
    </div>
  );
}
export default Modals;
