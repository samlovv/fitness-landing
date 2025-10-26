"use client";
import { motion } from "framer-motion";

export default function Iletisim() {
  return (
    <section id="iletisim" className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-red-500"
        >
          İletişim
        </motion.h2>

        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
          Hemen bizimle iletişime geç, hedeflerine ulaşma yolculuğunu başlatalım.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 text-left"
        >
          <div>
            <label className="block text-sm mb-2">Ad Soyad</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              placeholder="Adını gir"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">E-posta</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              placeholder="E-postanı gir"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-2">Mesaj</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              placeholder="Mesajını yaz"
            />
          </div>

          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-red-500 rounded-full hover:bg-red-600 transition font-semibold"
            >
              Gönder
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
