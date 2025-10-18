"use client"

function About() {
    return (
        <section id="about" className="py-10 bg-white text-black dark:text-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-3">About Us</h2>
          <p>PT. Surya Delima Gemilang is one of the companies in the field of Civil Construction.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p>To be a leader in Indonesia's construction industry, with a reputation for excellence in innovation, quality, and customer service.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Providing civil constructionand that prioritize quality, timeliness, and cost efficiency.</li>
                <li>Prioritizing occupational safety and the environment in every project weundertake.</li>
                <li>Provide benefits for Indonesian society.</li>
                <li>Developing competent and integrity human resources.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About;