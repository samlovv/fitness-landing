"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
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
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Kendini Baştan Yarat.
        </h1>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Kişisel antrenman planın, beslenme rehberin ve motivasyonun tek bir yerde.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Ücretsiz Denemeye Başla
          </button>
          <button className="border border-gray-400 hover:border-white px-6 py-3 rounded-xl font-semibold transition">
            Programları Gör
          </button>
        </div>
      </motion.div>
    </section>
  );
}
