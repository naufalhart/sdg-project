"use client"
import Image from "next/image";

function Projects() {
  return (
    <section id="projects" className="py-6 px-6 dark:bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center font-[Helvetica] dark:text-black">Project Experiences</h2>
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <Image
              src="/project1.jpeg"
              alt="card-image"
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              Perumahan Kota Citra Graha
            </h6>
            <p className="text-slate-600 leading-normal font-light">
              CLUSTER FLAMBOYAN, JL. AHMAD YANI KM-17,5 BANJARMASIN - KALSEL
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2"></div>
        </div>

        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <Image
              src="/project2.jpeg"
              alt="card-image"
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              Perumahan Kota Citra Graha
            </h6>
            <p className="text-slate-600 leading-normal font-light">
              CLUSTER MAWAR, JL. AHMAD YANI KM-17,5 BANJARMASIN - KALSEL
            </p>
          </div>
        </div>

        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <Image
              src="/project3.jpeg"
              alt="card-image"
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              Perumahan Prima Garden Residence
            </h6>
            <p className="text-slate-600 leading-normal font-light">
              JL. PONDOK KACANG PRIMA RAYA RT.02/11 PONDOK AREN, TANGSEL
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2"></div>
        </div>

        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <Image
              src="/project4.jpeg"
              alt="card-image"
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              Kost Towuti Owner Bp Yudianto (Building 3 Floors)
            </h6>
            <p className="text-slate-600 leading-normal font-light">
              Bendungan Hilir Jakarta Pusat, DKI Jakarta
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2"></div>
        </div>

        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <Image
              src="/project5.jpeg"
              alt="card-image"
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              Home Owner Bp Munodo-Japos Komplek Japos (Building 1 Floor)
            </h6>
            <p className="text-slate-600 leading-normal font-light">
              Tangerang Selatan, Banten
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2"></div>
        </div>

        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <Image
              src="/project6.jpeg"
              alt="card-image"
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              Home Owner Bp Wilver Summarecon Bandung (Build and Develop Building 2 floors and Mezanin)
            </h6>
            <p className="text-slate-600 leading-normal font-light">
              Gede Bage Bandung Jawa Barat, Design
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2"></div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
