"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Ekip() {
  const trainers = [
    {
      name: "Mert Kaya",
      role: "Kuvvet Antrenörü",
      img: "/photo/team/1.jpg",
    },
    {
      name: "Elif Yılmaz",
      role: "Yoga & Esneklik Uzmanı",
      img: "/photo/team/female.jpg",
    },
    {
      name: "Can Demir",
      role: "Beslenme Koçu",
      img: "/photo/team/male.jpg",
    },
  ];

  return (
    <section id="ekip" className="py-24 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-red-500"
        >
          Ekibimiz
        </motion.h2>

        <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto">
          Deneyimli antrenörlerimizle hedeflerine ulaşmak artık daha kolay. 
          Her biri kendi alanında uzmandır ve senin için en iyisini sunar.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {trainers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-600/40 transition"
            >
              <div className="relative w-full h-72">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-gray-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
