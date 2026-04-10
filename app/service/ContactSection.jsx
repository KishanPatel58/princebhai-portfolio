"use client";
import toast from 'react-hot-toast';
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
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
        // clear form
        setFormData({
          user_name: "",
          user_email: "",
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
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl mb-10 font-semibold">Contact</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4"
      >
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-3 border rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-80 transition"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}