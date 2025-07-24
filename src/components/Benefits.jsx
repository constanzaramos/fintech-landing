"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { benefits } from "../data/benefitsData";
import { motion, AnimatePresence } from "framer-motion";

export default function Benefits() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const cardRefs = useRef([]);
  const [cardRect, setCardRect] = useState(null);

  const selected = selectedIndex !== null ? benefits[selectedIndex] : null;

  useLayoutEffect(() => {
    if (selectedIndex !== null) {
      const rect = cardRefs.current[selectedIndex]?.getBoundingClientRect();
      setCardRect(rect);
    }
  }, [selectedIndex]);

  const closeModal = () => setSelectedIndex(null);

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold font-sans text-white mb-10 text-left">
          Beneficios exclusivos para ti
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
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
                  />
                  <div className="ml-4">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-primary-50">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && cardRect && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed z-50 bg-neutral-900 shadow-2xl overflow-hidden rounded-2xl"
              initial={{
                top: cardRect.top,
                left: cardRect.left,
                width: cardRect.width,
                height: cardRect.height,
                scale: 1,
              }}
              animate={{
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                width: "90%",
                maxWidth: 500,
                height: 300,
                scale: 1,
              }}
              exit={{
                top: cardRect.top,
                left: cardRect.left,
                width: cardRect.width,
                height: cardRect.height,
                x: 0,
                y: 0,
                scale: 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="h-full flex flex-col justify-between pb-8">
                <img
                  src={selected.image}
                  alt="Imagen beneficio"
                  className="w-full h-[180px] object-cover"
                />
                <div className="px-6">
                  <h3 className="text-base font-bold text-primary-500 mb-1">
                    {selected.title}
                  </h3>
                  <p className="text-sm text-white">{selected.description}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
