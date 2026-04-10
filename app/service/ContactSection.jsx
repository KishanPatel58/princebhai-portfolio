"use client";

import toast from "react-hot-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("sending");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        toast.success("Email sent successfully!");
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("Error", error.message);
        setStatus("error");
        toast.error("Something went wrong..");
      });
  };

  return (
    <motion.section
      id="contact"
      className="py-20 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl mb-10 font-semibold"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Name */}
        <motion.input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded-lg"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        />

        {/* Email */}
        <motion.input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded-lg"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        />
        {/* Phone */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <PhoneInput
            country={"in"}
            value={formData.user_phone}
            onChange={(phone) =>
              setFormData({ ...formData, user_phone: phone })
            }
            inputProps={{
              name: "user_phone",
              required: true,
            }}
            containerClass="w-full !border !border-black !rounded-lg"
            inputClass="!w-full !h-[50px] !pl-14 !rounded-r-lg !border-0 !bg-white !text-black"
            buttonClass="!bg-white !border-0 !rounded-l-lg"
            dropdownClass="!text-black !z-50"
          />
        </motion.div>
        {/* Message */}
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-3 border rounded-lg"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        ></motion.textarea>

        {/* Button */}
        <motion.button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </motion.section >
  );
}