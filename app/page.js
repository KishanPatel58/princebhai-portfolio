import Link from "next/link";
import ContactSection from "./service/ContactSection";

function page() {
  return (
    <>
      <main className="px-6 bg-transparent">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
        >
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="text-center md:text-left">
              <h1 className="mt-10 md:mt-0 text-5xl md:text-7xl font-bold leading-tight">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
                  Prince
                </span>
              </h1>

              <h2 className="mt-4 text-xl md:text-2xl text-gray-600">
                Digital Marketing Specialist
              </h2>

              <p className="mt-3 text-gray-500 max-w-md mx-auto md:mx-0">
                Helping brands grow with SEO, paid ads and performance-driven
                strategies.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex gap-4 justify-center md:justify-start">
                <Link
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-black text-white hover:scale-105 transition"
                >
                  Contact Me
                </Link>

                <Link
                  href="/my-resume.pdf"
                  download={"Prince-Trambadia-Resume.pdf"}
                  className="px-6 py-3 rounded-full border backdrop-blur-md hover:bg-gray-100 transition"
                >
                  My Resume
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center">
              {/* Glow */}
              <div className="absolute w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>

              <img
                src="/my-img.jpeg"
                alt="profile"
                className="relative w-72 h-72 object-center rounded-3xl border"
              />
            </div>
          </div>
        </section>
        <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-center mb-12 font-semibold">Skills</h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              "SEO & SEM",
              "Social Media Marketing",
              "Google Ads",
              "Meta Ads",
              "Content Creation",
              "Lead Generation",
            ].map((skill, i) => (
              <div
                key={i}
                className="group p-6 border rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition bg-white"
              >
                <h3 className="font-semibold text-lg">{skill}</h3>

                <p className="text-sm text-gray-500 mt-2">
                  Professional expertise with measurable results.
                </p>

                {/* bottom line animation */}
                <div className="mt-4 h-1 bg-black w-0 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </section>
        <section id="experience" className="py-20 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl text-center mb-12 font-semibold">
            Experience
          </h2>

          <div className="relative border-l border-gray-300 pl-8 space-y-10">
            {[
              {
                role: "Digital Marketing Executive",
                company: "ProPosting",
                place: "Ahmedabad",
              },
              {
                role: "Marketing (Teleselling)",
                company: "PRS Homoeo Pharmacy",
              },
              {
                role: "HR Intern",
                company: "AIM Machintechnik",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                {/* dot */}
                <div className="absolute -left-10 top-2 w-4 h-4 bg-black rounded-full"></div>

                <h3 className="font-bold text-lg">{item.role}</h3>
                <p className="text-gray-500">
                  {item.company} {item.place && `| ${item.place}`}
                </p>
              </div>
            ))}
          </div>
        </section>
        <ContactSection />
      </main>
    </>
  );
}
export default page;
