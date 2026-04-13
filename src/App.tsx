export default function App() {
  const services = [
    {
      title: "Outpatient Orthopedic Physical Therapy",
      description:
        "Evidence based rehabilitation for orthopedic injuries, post operative recovery, mobility limitations, tendinopathies, and spine related conditions.",
    },
    {
      title: "Runner Specific Injury Rehabilitation",
      description:
        "Specialized evaluations and treatment plans for common running injuries, mileage progression guidance, and structured return to run programming.",
    },
    {
      title: "Running Gait & Movement Analysis",
      description:
        "Video based gait analysis to assess stride mechanics, cadence, loading patterns, and biomechanical contributors to injury and performance limitations.",
    },
    {
      title: "Performance & Strength Training",
      description:
        "Individualized strength and conditioning programs, neuromuscular training, and plyometric progression to improve resilience and performance.",
    },
    {
      title: "Recovery & Mobility Services",
      description:
        "Manual therapy, stretching, mobility sessions, soft tissue work, and post-race recovery services designed to keep active individuals moving well.",
    },
    {
      title: "Injury Prevention & Wellness",
      description:
        "Preventive screening, movement assessments, home exercise programming, and education focused on helping runners stay healthy long term.",
    },
  ];

  const team = [
    {
      role: "Chief Executive Officer (CEO)",
      text: "Oversees clinic vision, strategic planning, community partnerships, and long term growth while also providing evaluations, re-evaluations, and treatment.",
    },
    {
      role: "Chief Financial Officer (CFO)",
      text: "Manages budgeting, revenue tracking, financial planning, marketing oversight, and loan repayment while contributing to patient care.",
    },
    {
      role: "Chief Operations Officer (COO)",
      text: "Leads daily clinic operations, workflow efficiency, scheduling, and staff coordination while maintaining clinical productivity.",
    },
    {
      role: "Clinical Team",
      text: "Physical therapists, PTAs, and support staff work together to deliver individualized, evidence-based care to runners and active individuals in El Paso.",
    },
  ];

  const values = [
    "Excellence",
    "Precision",
    "Commitment",
    "Education",
    "Performance",
  ];

  const hours = [
    ["Monday", "8:00 AM - 7:00 PM"],
    ["Tuesday", "8:00 AM - 7:00 PM"],
    ["Wednesday", "8:00 AM - 7:00 PM"],
    ["Thursday", "8:00 AM - 7:00 PM"],
    ["Friday", "8:00 AM - 7:00 PM"],
    ["Saturday", "8:00 AM - 1:00 PM"],
    ["Sunday", "Closed"],
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-bold tracking-tight">STRIDE Physical Therapy</div>
            <div className="text-sm text-neutral-600">Runner Focused Physical Therapy in El Paso</div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-neutral-600">About</a>
            <a href="#services" className="hover:text-neutral-600">Services</a>
            <a href="#team" className="hover:text-neutral-600">Team</a>
            <a href="#hours" className="hover:text-neutral-600">Hours</a>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full border border-white/20 px-4 py-1 text-sm text-white/90">
              Specialized Care for Runners & Active Individuals
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Move Efficiently. Recover Confidently. Run Pain-Free.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              STRIDE Physical Therapy combines expert rehabilitation, gait analysis,
              strength training, mobility work, and return to run programming to help
              runners recover faster, prevent injury, and perform at their best.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-neutral-900 shadow-lg transition hover:scale-[1.02]"
              >
                Request an Appointment
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="text-sm uppercase tracking-[0.2em] text-white/70">Location</div>
              <div className="mt-2 text-xl font-semibold">4009 North Mesa Street</div>
              <div className="text-white/80">El Paso, TX 79902</div>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="text-sm uppercase tracking-[0.2em] text-white/70">Hours</div>
              <div className="mt-2 text-xl font-semibold">Mon-Fri: 8 AM - 7 PM</div>
              <div className="text-white/80">Saturday: 8 AM - 1 PM</div>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur sm:col-span-2">
              <div className="text-sm uppercase tracking-[0.2em] text-white/70">Why STRIDE</div>
              <div className="mt-2 text-xl font-semibold">Runner Focused rehab + performance</div>
              <div className="mt-2 text-white/80">
                Specialized orthopedic care, video gait analysis, return to run
                programming, and performance services designed around the needs of runners.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">About STRIDE</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              STRIDE Physical Therapy is a specialized outpatient orthopedic clinic
              dedicated to injury prevention, rehabilitation, and performance
              optimization for runners and active individuals in the El Paso community.
              Our approach bridges rehabilitation and performance by combining skilled
              physical therapy with gait analysis, strength training, mobility work,
              recovery services, and education.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              Our mission is to empower runners of all levels to move efficiently,
              recover confidently, and run pain free. We believe that rehabilitation
              should not stop at reducing pain. It should build resilience, restore
              confidence, and support long term performance.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Our Core Values</h3>
            <div className="mt-6 grid gap-3">
              {values.map((value) => (
                <div key={value} className="rounded-2xl bg-neutral-100 px-4 py-3 font-medium">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold md:text-4xl">Services</h2>
            <p className="mt-4 text-lg text-neutral-700">
              We provide orthopedic rehabilitation and performance focused services
              designed to help runners return stronger, move better, and stay healthy.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 rounded-[2rem] bg-neutral-900 p-8 text-white md:grid-cols-3">
          <div>
            <div className="text-4xl font-bold">1:1</div>
            <div className="mt-2 text-white/75">Individualized, evidence based care</div>
          </div>
          <div>
            <div className="text-4xl font-bold">Runner</div>
            <div className="mt-2 text-white/75">Focused evaluations and return to run planning</div>
          </div>
          <div>
            <div className="text-4xl font-bold">El Paso</div>
            <div className="mt-2 text-white/75">Community-driven care with local partnerships</div>
          </div>
        </div>
      </section>

      <section id="team" className="bg-neutral-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold md:text-4xl">Leadership & Team</h2>
            <p className="mt-4 text-lg text-neutral-700">
              STRIDE operates under a collaborative leadership model where each owner
              contributes to both clinic management and patient care.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <div key={member.role} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{member.role}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{member.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hours" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Hours & Location</h2>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              Conveniently located on North Mesa Street near UTEP and major access
              roads, STRIDE is designed to serve the El Paso running and active
              community with accessible, specialized care.
            </p>
            <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="font-semibold">STRIDE Physical Therapy</div>
              <div className="mt-2 text-neutral-700">4009 North Mesa Street</div>
              <div className="text-neutral-700">El Paso, TX 79902</div>
              <div className="mt-4 text-neutral-700">Phone: (915) 111-9090</div>
              <div className="text-neutral-700">Email: strideptep@gmail.com</div>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Clinic Hours</h3>
            <div className="mt-6 divide-y divide-neutral-200">
              {hours.map(([day, time]) => (
                <div key={day} className="flex items-center justify-between py-4">
                  <span className="font-medium">{day}</span>
                  <span className="text-neutral-700">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 md:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Get Started</h2>
              <p className="mt-4 text-lg leading-8 text-neutral-700">
                Whether you are recovering from injury, returning to running, or
                looking to improve performance, STRIDE is here to help you move with
                confidence.
              </p>
              <div className="mt-6 space-y-2 text-neutral-700">
                <div><span className="font-semibold">Phone:</span> (915) 111-9090</div>
                <div><span className="font-semibold">Email:</span> strideptep@gmail.com</div>
                <div><span className="font-semibold">Website:</span> stridept.com</div>
              </div>
            </div>

            <form className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm">
              <input className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none ring-0 transition focus:border-neutral-500" placeholder="Full Name" />
              <input className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none ring-0 transition focus:border-neutral-500" placeholder="Email Address" />
              <input className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none ring-0 transition focus:border-neutral-500" placeholder="Phone Number" />
              <textarea className="min-h-[140px] rounded-2xl border border-neutral-300 px-4 py-3 outline-none ring-0 transition focus:border-neutral-500" placeholder="How can we help?" />
              <button type="button" className="rounded-2xl bg-neutral-900 px-6 py-3 font-semibold text-white transition hover:opacity-90">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-neutral-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <div>© 2026 STRIDE Physical Therapy, LLC. All rights reserved.</div>
          <div>Built for a business proposal preview site.</div>
        </div>
      </footer>
    </div>
  );
}