import { motion } from "framer-motion";

export default function BenefitModal({ selected, cardRect, closeModal }) {
  if (!selected || !cardRect) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/70 z-40"
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
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
          scale: 0.95,
          opacity: 0.5,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="h-full flex flex-col justify-between pb-8">
          <img
            src={selected.image}
            alt="Imagen beneficio"
            className="w-full h-[180px] object-cover"
            loading="lazy"
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
  );
}
