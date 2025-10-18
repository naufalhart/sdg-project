"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 bg-white border-b border-gray-200 font-[Helvetica]"
    >
      <div className="max-w-6xl mx-auto flex items-center gap-3 px-6 py-4">
        {/* Logo dan Nama */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-gray-900"
        >
          <Image
            src="/logo.jpeg"
            alt="SDG"
            className="h-9 w-auto rounded-md"
            height={100}
            width={100}
          />
          <span className="hidden sm:inline">PT Surya Delima Gemilang</span>
        </Link>
        {/* Tombol Menu */}
        <button
          id="navToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto block sm:hidden text-2xl focus:outline-none"
          aria-expanded={menuOpen}
          aria-controls="mainNav"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigasi */}
        <nav
          id="mainNav"
          className={`
            ${menuOpen ? "flex" : "hidden"}
            sm:flex ml-auto flex-col sm:flex-row gap-3 sm:gap-5
            bg-white sm:bg-transparent rounded-lg sm:rounded-none
            px-4 py-3 sm:p-0 absolute sm:static top-16 right-4 shadow sm:shadow-none
            transition-all duration-200
          `}
        >
          <Link href="#home" className="text-gray-900 hover:text-orange-600 dark:text-gray-900">
            Home
          </Link>
          <Link href="#about" className="text-gray-900 hover:text-orange-600 dark:text-gray-900">
            About Us
          </Link>
          <Link href="#services" className="text-gray-900 hover:text-orange-600 dark:text-gray-900">
            Services
          </Link>
          <Link href="#projects" className="text-gray-900 hover:text-orange-600 dark:text-gray-900">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-900 hover:text-orange-600 dark:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
