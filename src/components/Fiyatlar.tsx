"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Fiyatlar() {
  const plans = [
    {
      title: "Başlangıç",
      price: "₺299 / ay",
      features: [
        "Haftada 3 gün antrenman",
        "Temel beslenme rehberi",
        "Grup derslerine erişim",
      ],
      popular: false,
    },
    {
      title: "Profesyonel",
      price: "₺499 / ay",
      features: [
        "Haftada 5 gün antrenman",
        "Kişisel diyet planı",
        "Antrenör desteği",
        "İlerlemeni takip etme",
      ],
      popular: true,
    },
    {
      title: "Elit",
      price: "₺799 / ay",
      features: [
        "7/24 antrenör desteği",
        "Kapsamlı beslenme planı",
        "Kişisel motivasyon koçu",
        "Online özel dersler",
      ],
      popular: false,
    },
  ];

  return (
    <section id="fiyatlar" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-red-500"
        >
          Fiyatlar
        </motion.h2>

        <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto">
          Her seviyeye uygun planlarımızla fitness yolculuğuna hemen başla. 
          Esnek ödeme seçenekleriyle istediğin zaman iptal edebilirsin.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl border ${
                plan.popular
                  ? "border-red-500 bg-linear-to-b from-neutral-900 to-black shadow-red-600/40"
                  : "border-neutral-800 bg-neutral-900"
              } p-8 text-left hover:shadow-2xl transition`}
            >
              {plan.popular && (
                <span className="inline-block mb-4 px-4 py-1 text-sm bg-red-500 text-white rounded-full">
                  En Popüler
                </span>
              )}

              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-red-500 w-5 h-5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition ${
                  plan.popular
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-neutral-800 hover:bg-neutral-700 text-gray-200"
                }`}
              >
                Şimdi Başla
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
