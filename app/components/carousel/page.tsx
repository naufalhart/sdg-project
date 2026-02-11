"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  const images: string[] = [
    "/currentProj1.jpeg",
    "/currentProj2.jpeg",
    "/currentProj3.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <section id="about" className="py-10 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-black">
          Current Project
        </h2>

        {/* FRAME CAROUSEL */}
        <div className="relative w-full overflow-hidden aspect-[4/3] rounded-xl">

          {/* SLIDES */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full aspect-[4/3] relative"
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* BUTTON LEFT */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + images.length) % images.length)
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
          >
            ‹
          </button>

          {/* BUTTON RIGHT */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev + 1) % images.length)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
          >
            ›
          </button>

          {/* INDICATORS */}
          <div className="absolute bottom-3 w-full flex justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
