"use client"
import Link from "next/link";

function Footer() {
    return (
        <footer className="border-t border-gray-200 py-4 dark:text-gray-600 dark:bg-white">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 px-6">
                <div>© <span id="year"></span> PT Surya Delima Gemilang</div>
                <div className="space-x-2">
                <Link href="https://www.instagram.com/delima_design_build/" className="text-gray-600 hover:text-green-700 mx-10"/>Instagram
                <Link href="https://wa.me/62817737972" className="text-gray-600 hover:text-green-700"/>Whatsapp
                </div>
            </div>
        </footer>
    )
}

export default Footer;