"use client"

function Services() {
  return (
    <section id="services" className="py-10 text-center bg-white font-[Helvetica]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-black">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a className="block max-w-sm px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-lg transition hover:shadow-[0_8px_30px_rgba(234,88,12,0.6)]">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Design
            </h5>
            <p className="font-normal text-gray-700">
              Building, Residences, etc.
            </p>
          </a>

          <a className="block max-w-sm px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-lg transition hover:shadow-[0_8px_30px_rgba(234,88,12,0.6)]">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Construction
            </h5>
            <p className="font-normal text-gray-700">
              Offices, Malls, Hospitals, Residences, etc.
            </p>
          </a>

          <a className="block max-w-sm px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-lg transition hover:shadow-[0_8px_30px_rgba(234,88,12,0.6)]">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Infrastructure
            </h5>
            <p className="font-normal text-gray-700">
              Roads, Bridges, Drainage, etc.
            </p>
          </a>

          <a className="block max-w-sm px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-lg transition hover:shadow-[0_8px_30px_rgba(234,88,12,0.6)]">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Renovation and Repair
            </h5>
            <p className="font-normal text-gray-700">
              Building restoration, commercial building renovation, maintenance.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
