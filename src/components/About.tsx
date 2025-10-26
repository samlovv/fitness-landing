"use client";
import { motion } from "framer-motion";
import { Dumbbell, Flame, HeartPulse } from "lucide-react";

export default function Hakkinda() {
  const features = [
    {
      icon: <Dumbbell className="w-10 h-10 text-red-500" />,
      title: "Kişisel Antrenmanlar",
      desc: "Profesyonel antrenörlerle hedeflerine uygun özel programlar oluştur.",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-red-500" />,
      title: "Sağlıklı Yaşam Tarzı",
      desc: "Beslenme planlarıyla antrenmanlarını destekle ve maksimum verim al.",
    },
    {
      icon: <Flame className="w-10 h-10 text-red-500" />,
      title: "Motivasyon ve Takip",
      desc: "Gelişimini analiz et, hedeflerini belirle ve motive kal.",
    },
  ];

  return (
    <section id="hakkinda" className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          Fitness Sadece Bir Spor Değil, <br /> Yaşam Tarzıdır
        </motion.h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Vücudunu güçlendir, zihnini keskinleştir ve hayatını dönüştür. 
          Bizimle hedeflerine ulaşmak artık çok daha kolay.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border rounded-2xl shadow-sm hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
