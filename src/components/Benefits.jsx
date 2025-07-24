"use client";

import { useState, useRef, useLayoutEffect, useMemo } from "react";
import { benefits } from "../data/benefitsData";
import { AnimatePresence, useInView } from "framer-motion";
import BenefitModal from "./BenefitModal";
import React from "react";

export default function Benefits() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const sectionRef = useRef(null);
  const cardRefs = useMemo(() => benefits.map(() => React.createRef()), []);
  const [cardRect, setCardRect] = useState(null);

  const selected = selectedIndex !== null ? benefits[selectedIndex] : null;
  const isInView = useInView(sectionRef, { margin: "-100px", amount: "some" });

  useLayoutEffect(() => {
    if (selectedIndex !== null && cardRefs[selectedIndex]?.current) {
      const rect = cardRefs[selectedIndex].current.getBoundingClientRect();
      setCardRect(rect);
    }
  }, [selectedIndex]);

  useLayoutEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useLayoutEffect(() => {
    if (!isInView && selectedIndex !== null) {
      setSelectedIndex(null);
    }
  }, [isInView]);

  const closeModal = () => setSelectedIndex(null);

  return (
    <section ref={sectionRef} className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold font-sans text-white mb-10 text-left">
          Beneficios exclusivos para ti
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              ref={cardRefs[index]}
              onClick={() => setSelectedIndex(index)}
              className={`relative rounded-xl shadow-xl cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-[1.02] ${
                selectedIndex === index ? "invisible" : ""
              }`}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "220px",
              }}
            >
              <div className="absolute inset-0 bg-black/80 z-0" />

              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="flex items-center justify-between mb-2">
                  <img
                    src={item.logo}
                    alt={`Logo ${item.title}`}
                    className="h-10 w-auto object-contain"
                    loading="lazy"
                  />
                  <div className="ml-4">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-primary-50">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        <BenefitModal
          selected={selected}
          cardRect={cardRect}
          closeModal={closeModal}
        />
      </AnimatePresence>
    </section>
  );
}
