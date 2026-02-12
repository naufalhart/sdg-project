"use client"
import Link from "next/link";

function Contact() {
    return (
      <section id="contact" className="py-10 dark:bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_420px] gap-6 px-6 font-[Helvetica]">
          <div>
            <h2 className="text-2xl font-bold mb-3 dark:text-black">Contact Us</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Address: </strong>Puri Sriwedari blok L6</li>
              <li><strong>Workshop: </strong>Jl Pringgondani VIII</li>
              <li><strong>Phone: </strong>0817-737-972</li>
              <li>
                <strong>Email 1:</strong>
                <Link href="mailto:pringgo@suryadelima.id" className="text-orange-500 hover:text-orange-800"> pringgo@suryadelima.id</Link>
              </li>
              <li>
                <strong>Email 2:</strong>
                <Link href="mailto:pringgo.suryadelima@gmail.com" className="text-orange-500 hover:text-orange-800"> pringgo.suryadelima@gmail.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
}

export default Contact;