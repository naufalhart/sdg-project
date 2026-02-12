"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Struktur data project
const projects = [
  {
    images: ["/project1.jpeg"],
    title: "Home Stay Owner Bp Wahyu Utomo",
    description: "Raja Basa, Bandar Lampung",
  },
  {
    images: ["/project6.jpeg"],
    title: "Home Owner Bp Wilver Summarecon Bandung",
    description: "Gede Bage Bandung Jawa Barat, Design",
  },
  {
    images: ["/project5.jpeg"],
    title: "Home Owner Bp Munodo-Japos Komplek Japos",
    description: "Tangerang Selatan, Banten",
  },
  {
    images: ["/project4.jpeg"],
    title: "Kost Towuti Owner Bp Yudianto",
    description: "Bendungan Hilir Jakarta Pusat, DKI Jakarta",
  },
  {
    images: ["/project3.jpeg"],
    title: "Perumahan Prima Garden Residence",
    description: "JL. PONDOK KACANG PRIMA RAYA RT.02/11 PONDOK AREN, TANGSEL",
  }
];

// Carousel mini untuk setiap project
function ProjectCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden aspect-[4/3] rounded-md">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-full aspect-[4/3] relative">
            <Image src={src} alt={`Slide ${idx + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Tombol navigasi kiri */}
      {images.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + images.length) % images.length)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/70"
          >
            ‹
          </button>

          {/* Tombol navigasi kanan */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev + 1) % images.length)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/70"
          >
            ›
          </button>

          {/* Indikator */}
          <div className="absolute bottom-2 w-full flex justify-center gap-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-6 px-6 dark:bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center font-[Helvetica] dark:text-black">
        Project Experiences
      </h2>

      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full"
          >
            <div className="m-2.5">
              <ProjectCarousel images={project.images} />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                {project.title}
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
