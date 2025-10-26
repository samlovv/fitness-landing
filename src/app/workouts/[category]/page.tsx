'use client';

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Program = {
  title: string;
  desc: string;
  desc_long?: string;
  img: string;
  features: string[];
};

const PROGRAMS: Record<string, Program> = {
  "strength-training": {
    title: "Kuvvet Antrenmanı",
    desc: "Kas kütleni artır, dayanıklılığını geliştir ve limitlerini zorla.",
    desc_long:
      "Kuvvet antrenmanları ile temel hareketlere odaklanır, progresif yükleme ile güç ve kas kazanımı sağlar. Haftalık programlar, teknik anlatımlar ve set/rep fazlası içerir.",
    img: "/photo/1.jpg",
    features: [
      "Programlı güç artışı",
      "Teknik odaklı egzersizler",
      "Set/rep progresyonu",
    ],
  },
  "cardio-fat-loss": {
    title: "Kardiyo & Yağ Yakımı",
    desc: "Yağ oranını düşür, kalp sağlığını koru ve formda kal.",
    desc_long:
      "Kardiyo ağırlıklı programlarımız HIIT ve steady-state kombinasyonu sunar. Beslenme ve dinlenme önerileriyle maksimum sonuç hedeflenir.",
    img: "/photo/3.jpg",
    features: ["Yüksek yoğunluklu interval antrenmanları", "Yağ yakımı odaklı günlük plan", "Kardiyovasküler gelişim"],
  },
  "flexibility-yoga": {
    title: "Esneklik & Yoga",
    desc: "Zihnini sakinleştir, stresi azalt ve esnekliğini artır.",
    desc_long:
      "Hareket açıklığını, nefes çalışma ve esneklik akışları ile artır. Ruhsal denge ve vücut farkındalığına odaklanır.",
    img: "/photo/2.jpg",
    features: ["Nefes ve mobilite akışları", "Haftalık esneklik rutini", "Zihin-beden bağlantısı"],
  },
};

export default function Page() {
  const params = useParams();
  const slug = params.category as string;
  
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const foundProgram = PROGRAMS[slug];
      if (foundProgram) {
        setProgram(foundProgram);
      }
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="bg-black text-white min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="animate-pulse">Yükleniyor...</div>
        </div>
      </main>
    );
  }

  if (!program) {
    notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-block text-sm text-gray-300 hover:text-white mb-2"
          >
            ← Ana Sayfaya Dön
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-red-500">
            {program.title}
          </h1>
          <p className="text-gray-300 mt-2">{program.desc}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div className="w-full">
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={program.img}
                alt={program.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full">
            <p className="text-gray-300 mb-6">{program.desc_long}</p>

            <h3 className="text-xl font-semibold mb-3">Neler İçerir</h3>
            <ul className="space-y-3 mb-6">
              {program.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200">
                  <span className="mt-1 text-red-500">●</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#iletisim"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-xl text-center"
              >
                Kayıt Ol / İletişim
              </Link>

              <Link
                href="/#programs"
                className="inline-block border border-neutral-700 hover:border-white px-6 py-2.5 rounded-xl text-center text-gray-200"
              >
                Tüm Programlar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}