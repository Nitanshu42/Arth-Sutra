import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="w-full bg-[#0B1D3A] text-[#FFFFFF] py-24 px-6 relative overflow-hidden">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-[#D4AF37]) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E3A8A]/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold tracking-widest uppercase text-[#D4AF37] block mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              Corporate Overview
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-[#F8FAFC]">
              Financial Strategy <br />
              <span className="text-[#D4AF37] italic font-light">Designed for Tomorrow</span>
            </h2>
            
            <p className="text-lg text-[#E2E8F0]/90 leading-relaxed mb-8">
              Our mission is to simplify financial growth through technology-driven investment strategies, intelligent market analysis, and tailored financial planning solutions.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/20 flex items-center justify-center shrink-0 border border-[#1E3A8A]/50">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#FFFFFF] mb-1">Data-Driven Insights</h4>
                  <p className="text-sm text-[#64748B]">Leveraging advanced analytics to uncover hidden market opportunities.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/20 flex items-center justify-center shrink-0 border border-[#1E3A8A]/50">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#FFFFFF] mb-1">Risk Mitigation</h4>
                  <p className="text-sm text-[#64748B]">Protecting your capital with robust, battle-tested financial architecture.</p>
                </div>
              </div>
            </div>

            <Link href="#services" className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:text-[#FFFFFF] transition-colors group">
              Discover Our Approach 
              <span className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#0B1D3A] transition-all">
                &rarr;
              </span>
            </Link>
          </div>

          {/* Visual Showcase */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0]/10 group">
              {/* Replace with an actual image of skyscrapers or financial charts */}
              <div className="absolute inset-0 bg-[#1E3A8A]/10 mix-blend-overlay z-10"></div>
              <Image
                src="/images/team.png" // User can replace this with actual skyscraper/dashboard image
                alt="Modern Financial Dashboard"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/40 to-transparent z-10"></div>
              
              {/* Floating Element */}
              <div className="absolute bottom-8 left-8 right-8 bg-[#FFFFFF]/10 backdrop-blur-md border border-[#FFFFFF]/20 p-6 rounded-xl z-20 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">Real-time Analytics</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                  </span>
                </div>
                <div className="h-16 flex items-end gap-2">
                  {/* CSS-based mock chart */}
                  {[40, 70, 45, 90, 60, 100, 80].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-[#1E3A8A] to-[#D4AF37] rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Abstract Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20 backdrop-blur-xl z-0 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
