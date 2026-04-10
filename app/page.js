"use client";

import Link from "next/link";
import ContactSection from "./service/ContactSection";
import { motion } from "framer-motion";

function page() {
  return (
    <>
      <motion.main
        className="px-6 bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* HERO SECTION */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
        >
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              className="text-center md:text-left"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mt-20 md:mt-0 text-5xl md:text-7xl font-bold leading-tight">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
                  Prince
                </span>
              </h1>

              <motion.h2
                className="mt-4 text-xl md:text-2xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Digital Marketing Specialist
              </motion.h2>

              <motion.p
                className="mt-3 text-gray-500 max-w-md mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Helping brands grow with SEO, paid ads and performance-driven
                strategies.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="mt-6 flex gap-4 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
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
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="relative flex justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/my-img.jpeg"
                alt="profile"
                className="relative w-72 h-72 object-center rounded-3xl border"
              />
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-center mb-12 font-semibold">Skills</h2>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              "SEO & SEM",
              "Social Media Marketing",
              "Google Ads",
              "Meta Ads",
              "Content Creation",
              "Lead Generation",
            ].map((skill, i) => (
              <motion.div
                key={i}
                className="group p-6 border rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition bg-white"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 className="font-semibold text-lg">{skill}</h3>

                <p className="text-sm text-gray-500 mt-2">
                  Professional expertise with measurable results.
                </p>

                <div className="mt-4 h-1 bg-black w-0 group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* EXPERIENCE */}
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
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -left-10 top-2 w-4 h-4 bg-black rounded-full"></div>

                <h3 className="font-bold text-lg">{item.role}</h3>
                <p className="text-gray-500">
                  {item.company} {item.place && `| ${item.place}`}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <ContactSection />
      </motion.main>
    </>
  );
}

export default page;