export default function Stats() {
  const stats = [
    {
      value: "15+",
      label: "Years of Excellence",
      description: "Delivering trusted financial advisory solutions.",
    },
    {
      value: "1200+",
      label: "Clients Worldwide",
      description: "Helping businesses and individuals grow wealth.",
    },
    {
      value: "₹4.8B+",
      label: "Assets Managed",
      description: "Optimized portfolios with sustainable returns.",
    },
    {
      value: "98.4%",
      label: "Client Satisfaction",
      description: "Long-term trust and measurable outcomes.",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-6 -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0]/50 hover:shadow-[0_20px_40px_rgb(11,29,58,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-[#D4AF37] font-display text-4xl lg:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-[#0B1D3A] font-semibold text-lg mb-2">
                {stat.label}
              </div>
              <p className="text-[#64748B] text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
