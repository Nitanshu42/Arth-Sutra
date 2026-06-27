import Image from "next/image";

const services = [
  {
    num: "01",
    title: "Basic Service",
    subtitle: "Sutra Foundation",
    price: "₹99.00",
    image: "/images/services1.png",
    description: "Essential audit, market alignment review, and foundational growth structure design.",
    features: [
      "Market Intelligence Review",
      "Strategic Alignment Report",
      "Quarterly Growth Audits",
    ],
  },
  {
    num: "02",
    title: "Intermediate Service",
    subtitle: "Sutra Accelerator",
    price: "₹149.00",
    image: "/images/services2.png",
    featured: true,
    description: "Deep enterprise scaling, capital layout optimization, and continuous execution advisory.",
    features: [
      "Comprehensive Scale Blueprint",
      "Capital Structuring & Optimization",
      "Bi-Weekly Strategy Sessions",
      "Priority Executive Access",
    ],
  },
  {
    num: "03",
    title: "Advanced Service",
    subtitle: "Sutra Elite Enterprise",
    price: "₹199.00",
    image: "/images/services3.png",
    description: "Full-scale organizational transformation, venture architecture, and hands-on governance.",
    features: [
      "Venture Capital & Deal Architecture",
      "Cross-Border Market Entry",
      "24/7 Dedicated Strategy Cell",
      "Board-Level Advisory Seat",
    ],
  },
];

export default function Services() {
  return (
    <section className="w-full py-24 px-6 bg-[#E9DFCF]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-sm font-semibold tracking-widest uppercase text-[#223624]/60 block mb-3">
              // High-Impact Programs
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              Architecting sustainable competitive leverage.
            </h2>
          </div>
          <p className="text-base text-[#223624]/70 max-w-sm leading-relaxed">
            Select a suite engineered for your scale. From basic optimization to absolute market dominance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col justify-between rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 ${
                item.featured
                  ? "bg-[#223624] text-[#E9DFCF] border-[#223624] shadow-xl relative lg:scale-105 z-10"
                  : "bg-[#223624]/5 text-[#223624] border-[#223624]/10 hover:border-[#223624]/30 hover:bg-[#223624]/10"
              }`}
            >
              <div>
                {/* Card Top Label */}
                <div className="flex items-center justify-between mb-8">
                  <span className={`font-mono text-sm font-bold ${item.featured ? "text-[#EEFF52]" : "text-[#223624]/50"}`}>
                    {item.num}
                  </span>
                  {item.featured && (
                    <span className="text-xs uppercase font-extrabold tracking-widest bg-[#EEFF52] text-[#223624] px-3 py-1 rounded-full">
                      Most Active
                    </span>
                  )}
                </div>

                {/* Card Title */}
                <div className="mb-6">
                  <span className={`text-xs uppercase tracking-wider font-semibold ${item.featured ? "text-[#EEFF52]" : "text-[#223624]/60"}`}>
                    {item.subtitle}
                  </span>
                  <h3 className="font-display text-3xl font-bold mt-1">{item.title}</h3>
                </div>

                {/* Card Image */}
                <div className="relative h-60 w-full mb-8 rounded-xl overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Description */}
                <p className={`text-sm mb-6 ${item.featured ? "text-[#E9DFCF]/80" : "text-[#223624]/80"}`}>
                  {item.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 border-t pt-6 border-current/10">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <span className={`mt-1 font-bold ${item.featured ? "text-[#EEFF52]" : "text-[#223624]"}`}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action Button */}
              <div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black font-display">{item.price}</span>
                  <span className="text-xs opacity-60">/ subscription token</span>
                </div>
                <button
                  className={`w-full rounded-full py-4 font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    item.featured
                      ? "bg-[#EEFF52] text-[#223624] hover:bg-[#E9DFCF] hover:text-[#223624]"
                      : "bg-[#223624] text-[#E9DFCF] hover:bg-[#EEFF52] hover:text-[#223624]"
                  }`}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}