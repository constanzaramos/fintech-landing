export default function Footer() {
  return (
    <footer className="bg-black text-white  pb-4 mt-8 ">
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Tenpo. Desarrollado por Constanza Ramos.
      </div>
    </footer>
  );
}
