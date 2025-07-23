import { benefits } from "../data/benefitsData";

export default function Benefits() {
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
              className="relative bg-neutral-800 border border-gray-200 rounded-xl shadow-xl p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <img
                  src={item.logo}
                  alt={`Beneficio ${index + 1}`}
                  className="h-16 w-28 object-contain"
                />
                <div className="ml-4">{item.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-primary-400 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
