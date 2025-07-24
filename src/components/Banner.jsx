import bannerImage from "../assets/banner-img.jpg";

export default function Banner() {
  return (
    <section
      className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 text-center text-white px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold font-sans mb-2">
          Tu banco, 100% digital.
        </h2>
        <p className="text-lg md:text-xl mb-6 font-light">Una cuenta muy tú.</p>
        <a
          href="https://www.tenpo.cl/"
          target="_blank"
          className="px-6 py-3 bg-primary-400 hover:bg-primary-300 text-black font-semibold rounded-xl transition duration-300"
        >
          Abre tu cuenta ahora
        </a>
      </div>
    </section>
  );
}
