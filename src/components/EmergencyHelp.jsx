import { FiHelpCircle } from "react-icons/fi";

export default function EmergencyHelp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href="https://soporte.tenpo.cl/hc/es-419"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white hover:bg-primary-400 text-black p-2 rounded-full shadow-lg flex items-center justify-center transition"
      >
        <FiHelpCircle size={30} />
      </a>

      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded py-1 px-2 shadow-lg">
        ¿Necesitas ayuda?
      </div>
    </div>
  );
}
