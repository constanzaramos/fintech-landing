import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import phoneImage from "../assets/phone.avif";
import cardImage from "../assets/tenpo-card.avif";
import creditCardImage from "../assets/tenpo-black.png";
import tenpoLogo from "../assets/Size=Large, Type=Default.svg";
import cardSavingsImage from "../assets/tenpo-savings.avif";
import logoNegative from "../assets/Size=XL, Type=Negative.svg";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const cardRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const logoRotation = useTransform(scrollYProgress, [0, 1], [0, -360]);

  const savingsX = useTransform(scrollYProgress, [0, 1], [110, 120]);
  const savingsY = useTransform(scrollYProgress, [0, 1], [270, 0]);

  const logoX1 = useTransform(scrollYProgress, [0, 1], [200, -120]);
  const logoY1 = useTransform(scrollYProgress, [0, 1], [140, -150]);

  const logoX2 = useTransform(scrollYProgress, [0, 1], [-130, 100]);
  const logoY2 = useTransform(scrollYProgress, [0, 1], [280, -80]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[110vh] bg-black text-white px-6 md:px-20 flex items-center justify-center overflow-visible pt-10"
    >
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-7xl">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={tenpoLogo}
            alt="Tenpo Logo"
            className="h-10 mb-6 mx-auto md:mx-0"
          />

          <motion.h1
            className="text-4xl md:text-6xl font-graphie font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Tu dinero, en una app que sabe lo que necesitas.
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-neutral-100 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Una experiencia bancaria segura, simple y moderna. Abre tu cuenta en
            minutos.
          </motion.p>

          <motion.button
            className="mt-6 px-6 py-3 bg-primary-400 hover:bg-primary-300 text-black font-semibold rounded-xl transition duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Hazte cliente
          </motion.button>
        </motion.div>

        <div className="w-full md:w-1/2 relative flex justify-center items-start">
          <motion.div
            style={{ y, rotate, scale }}
            className="relative z-10 w-64 h-auto -translate-y-32 md:-translate-y-40"
          >
            <img src={phoneImage} alt="App fintech" className="w-full" />
          </motion.div>

          <motion.img
            src={cardImage}
            alt="Tarjeta Tenpo"
            style={{
              rotate: cardRotation,
              x: useTransform(scrollYProgress, [0, 1], [100, 200]),
              y: useTransform(scrollYProgress, [0, 1], [-100, -150]),
            }}
            className="absolute w-32 z-0"
          />

          <motion.img
            src={creditCardImage}
            alt="Tarjeta Black"
            style={{
              rotate: logoRotation,
              x: useTransform(scrollYProgress, [0, 1], [-120, -180]),
              y: useTransform(scrollYProgress, [0, 1], [80, 150]),
            }}
            className="absolute w-20 z-0"
          />

          <motion.img
            src={cardSavingsImage}
            alt="Tarjeta Ahorro"
            style={{
              rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
              x: savingsX,
              y: savingsY,
            }}
            className="absolute w-24 z-0"
          />

          <motion.img
            src={logoNegative}
            alt="Logo Tenpo Negativo"
            style={{
              rotate: useTransform(scrollYProgress, [0, 1], [0, 270]),
              x: logoX1,
              y: logoY1,
            }}
            className="absolute w-16 z-0"
          />

          <motion.img
            src={logoNegative}
            alt="Logo Tenpo Negativo"
            style={{
              rotate: useTransform(scrollYProgress, [0, 1], [0, -270]),
              x: logoX2,
              y: logoY2,
            }}
            className="absolute w-16 z-0"
          />
        </div>
      </div>
    </section>
  );
}
