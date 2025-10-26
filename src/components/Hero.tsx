"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-svh flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source
          src="/videos/fitness-background.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/90" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center w-full max-w-4xl mx-auto py-8 sm:py-12 lg:py-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Kendini Baştan Yarat.
        </h1>
        <p className="text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Kişisel antrenman planın, beslenme rehberin ve motivasyonun tek bir yerde.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
          <button onClick={() => {
              const el = document.getElementById("iletisim");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }} className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base">
            Ücretsiz Denemeye Başla
          </button>
          <button
            className="w-full sm:w-auto border border-gray-400 hover:border-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base"
            onClick={() => {
              const el = document.getElementById("programs");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Programları Gör
          </button>
        </div>
      </motion.div>
    </section>
  );
}
