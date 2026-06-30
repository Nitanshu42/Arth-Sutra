

const services = [
  {
    id: "01",
    title: "Wealth Management",
    description: "Customized investment solutions designed to preserve and grow capital.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    ),
  },
  {
    id: "02",
    title: "Investment Advisory",
    description: "Data-backed insights for smarter investment decisions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
    ),
  },
  {
    id: "03",
    title: "Retirement Planning",
    description: "Secure your future with long-term financial planning.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    ),
  },
  {
    id: "04",
    title: "Risk & Insurance Management",
    description: "Protect assets with intelligent risk mitigation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
    ),
  },
  {
    id: "05",
    title: "Portfolio Optimization",
    description: "AI-driven portfolio balancing and performance analysis.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
    ),
  },
  {
    id: "06",
    title: "Corporate Finance Solutions",
    description: "Strategic financial support for growing businesses.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="w-full py-24 px-6 bg-[#F8FAFC] relative">
      {/* Decorative Blur Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#1E3A8A]/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-widest uppercase text-[#D4AF37] block mb-3">
              {"// Financial Solutions"}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1D3A] leading-tight">
              Strategic Intelligence for Market Dominance.
            </h2>
          </div>
          <p className="text-base text-[#64748B] max-w-sm leading-relaxed border-l-2 border-[#D4AF37] pl-4">
            We provide institutional-grade financial strategies tailored for sophisticated investors and ambitious enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#FFFFFF] rounded-2xl p-8 border border-[#E2E8F0]/40 shadow-sm hover:shadow-[0_20px_40px_rgba(30,58,138,0.08)] transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col justify-between h-[320px]"
            >
              {/* Glassmorphic Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#0B1D3A] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0B1D3A] group-hover:bg-[#FFFFFF]/10 group-hover:border-[#FFFFFF]/20 group-hover:text-[#D4AF37] transition-all duration-500 shadow-sm group-hover:shadow-lg">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xl font-bold text-[#E2E8F0] group-hover:text-[#FFFFFF]/20 transition-colors duration-500">
                    {item.id}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#0B1D3A] group-hover:text-[#FFFFFF] mb-3 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed group-hover:text-[#F8FAFC]/80 transition-colors duration-500">
                  {item.description}
                </p>
              </div>

              {/* Card Footer / Action */}
              <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-semibold text-[#1E3A8A] group-hover:text-[#D4AF37] transition-colors duration-500">
                Learn More
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
