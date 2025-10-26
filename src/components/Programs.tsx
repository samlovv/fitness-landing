"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function Programlar() {
  const programs = [
    {
      title: "Kuvvet Antrenmanı",
      desc: "Kas kütleni artır, dayanıklılığını geliştir ve limitlerini zorla.",
      img: "/photo/1.jpg",
      href: "workouts/strength-training",
    },
    {
      title: "Kardiyo & Yağ Yakımı",
      desc: "Yağ oranını düşür, kalp sağlığını koru ve formda kal.",
      img: "/photo/3.jpg",
      href: "workouts/cardio-fat-loss",
    },
    {
      title: "Esneklik & Yoga",
      desc: "Zihnini sakinleştir, stresi azalt ve esnekliğini artır.",
      img: "/photo/2.jpg",
      href: "workouts/flexibility-yoga",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-linear-to-b from-neutral-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-red-500"
        >
          Programlarımız
        </motion.h2>

        <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto">
          Hedeflerine uygun en etkili programı seç. İster yağ yak, ister kas yap — 
          senin için en doğru planı biz oluşturuyoruz.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-600/40 transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src={program.img}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {program.title}
                </h3>
                <p className="text-gray-400 mb-4">{program.desc}</p>
                <Link href={program.href} className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
                  Detaylı Bilgi
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
