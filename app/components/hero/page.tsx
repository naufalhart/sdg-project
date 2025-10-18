"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-8 sm:px-12 lg:px-20">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight font-helvetica">
            Design and Build
          </h1>

          <p className="text-gray-900 text-lg leading-relaxed">
            We are committed to providing high-quality construction solutions with international standards,
            both for commercial, industrial, and infrastructure projects. We also prioritize client satisfaction
            in quality, cost efficiency, punctuality, and after-sales service.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/62817737972"
              className="px-6 py-3 rounded-xl bg-orange-700 text-white font-medium hover:bg-orange-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-900 hover:border-gray-400 hover:text-gray-900 transition-all duration-300"
            >
              Our Projects
            </a>
          </div>

          {/* Certifications */}
          <ul className="list-disc list-inside text-gray-900 text-base leading-relaxed mt-6 space-y-1">
            <li>Certified Building Construction</li>
            <li>Certified Occupational Health and Safety</li>
            <li>Certified Construction Management</li>
            <li>Certified BPJS Ketenagakerjaan</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-700 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <Image
            src="/project6.jpeg"
            alt="Konstruksi gedung - ilustrasi"
            className="relative rounded-2xl w-full h-auto shadow-lg transition-transform duration-500 group-hover:scale-[1.03]"
            height={1041}
            width={1233}
          />
        </div>
      </div>
    </section>
  );
}
