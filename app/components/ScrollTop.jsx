"use client";
import { ArrowUp } from "@deemlol/next-icons"
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    show && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 w-[40px] h-[40px] flex items-center justify-center bg-black text-white rounded-full shadow-lg hover:scale-110 transition"
      >
        <ArrowUp size={128} color="#FFFFFF" strokeWidth={2.5} />
      </button>
    )
  );
}