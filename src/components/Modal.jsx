import { useState } from "react";
import qrCode from "../assets/qr.png";

export default function modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón que abre el modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-primary-400 hover:bg-primary-300 text-black font-semibold rounded-xl transition duration-300"
      >
        Hazte cliente
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative bg-white rounded-2xl p-6 max-w-sm w-full text-center">
            {/* Botón cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-black text-2xl font-bold"
            >
              ×
            </button>

            {/* Contenido */}
            <h2 className="text-2xl font-bold mb-2">¡Hazte Cliente!</h2>
            <p className="text-lg font-medium">
              Tenpo es una cuenta digital, costo $0
            </p>
            <p className="text-sm text-gray-600 mt-1 mb-4">
              ¡Escanea este código QR y descárgala!
            </p>
            <img
              src={qrCode}
              alt="Código QR"
              className="mx-auto h-40 w-40 object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
