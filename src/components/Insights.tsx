import Link from "next/link";

export default function Insights() {
  const articles = [
    {
      id: 1,
      title: "Top Investment Trends Reshaping Markets in 2026",
      category: "Market Analysis",
      date: "Oct 12, 2026",
    },
    {
      id: 2,
      title: "Smart Wealth Building Strategies for Modern Investors",
      category: "Wealth Management",
      date: "Oct 08, 2026",
    },
    {
      id: 3,
      title: "How AI is Transforming Financial Planning",
      category: "Fintech",
      date: "Sep 29, 2026",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-[#D4AF37] block mb-3">
              {"// Financial Intelligence"}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B1D3A] leading-tight">
              Latest Insights
            </h2>
          </div>
          <Link href="#" className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold hover:text-[#0B1D3A] transition-colors">
            View All Articles <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href="#"
              className="group bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0]/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full bg-[#0B1D3A]/5 overflow-hidden">
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3A] to-[#1E3A8A] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#0B1D3A]">
                  {article.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-[#64748B] font-medium mb-3">
                    {article.date}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0B1D3A] leading-snug group-hover:text-[#1E3A8A] transition-colors">
                    {article.title}
                  </h3>
                </div>
                <div className="mt-6 flex items-center text-sm font-semibold text-[#D4AF37]">
                  Read Article <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
