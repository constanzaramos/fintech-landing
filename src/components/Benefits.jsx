"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { benefits } from "../data/benefitsData";
import { motion, AnimatePresence } from "framer-motion";

export default function Benefits() {
  const [selected, setSelected] = useState(null);
  const [cardRect, setCardRect] = useState(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    if (selected !== null) {
      const rect = cardRefs.current[selected.index]?.getBoundingClientRect();
      setCardRect(rect);
    }
  }, [selected]);

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-normal font-graphie text-white mb-10 text-center">
          Beneficios exclusivos para ti
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => setSelected({ ...item, index })}
              className={`relative bg-neutral-800 border border-gray-200 rounded-xl shadow-xl p-6 hover:scale-[1.02] cursor-pointer transition-transform duration-300 ${
                selected?.index === index ? "invisible" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <img
                  src={item.logo}
                  alt={`Logo ${item.title}`}
                  className="h-16 w-28 object-contain"
                />
                <div className="ml-4">{item.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-primary-400">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && cardRect && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal animado desde la card */}
            <motion.div
              className="fixed z-50 bg-white shadow-2xl overflow-hidden rounded-2xl"
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
              <div className="relative px-0 pt-6 pb-4 h-full flex flex-col justify-between">
    
                <img
                  src={selected.image}
                  alt="Imagen beneficio"
                  className="w-full h-[180px] object-cover"
                />
               
                <div className="px-6">
                  <h3 className="text-base font-bold text-primary-500 mb-1">
                    {selected.title}
                  </h3>
                  <p className="text-sm text-neutral-700">
                    {selected.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
