import Logo from "../assets/Size=Large, Type=Default.svg";
import phoneImage from "../assets/phone.avif";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col md:flex-row items-center justify-between bg-black text-white px-6 md:px-20 overflow-hidden">
      <div className="absolute top-6 left-6 z-10">
        <img src={Logo} alt="Logo Tenpo" className="h-10 mb-8" />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between flex-1">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-normal font-graphie">
            Tu dinero, en una app que sabe lo que necesitas.
          </h1>
          <p className="mt-6 text-lg text-neutral-100 font-sans">
            Una experiencia bancaria segura, simple y moderna. Abre tu cuenta en
            minutos.
          </p>
          <button className="mt-8 px-6 py-3 bg-primary-400 hover:bg-primary-300 text-black font-semibold rounded-xl transition duration-300">
            Hazte cliente
          </button>
        </div>

        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={phoneImage}
            alt="App fintech"
            className="w-64 md:w-80 lg:w-[22rem] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
