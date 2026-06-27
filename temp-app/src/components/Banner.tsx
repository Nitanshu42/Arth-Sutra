import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full bg-[#223624] text-[#E9DFCF] py-24 px-6 relative overflow-hidden">
      {/* Decorative accent grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#EEFF52 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto">
        {/* Main Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">
          <div className="lg:col-span-6">
            <span className="text-sm font-semibold tracking-widest uppercase text-[#EEFF52] block mb-3">
              // Our Philosophy
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-none tracking-tight">
              Breakthrough
              <br />
              Consulting,
              <br />
              Redefined.
            </h2>
          </div>

          <div className="lg:col-span-6 grid md:grid-cols-2 gap-8 text-[#E9DFCF]/80 text-sm leading-relaxed">
            <div>
              <span className="text-xl font-bold text-[#EEFF52] block mb-2">01 / Focus</span>
              <p>
                We turn bold objectives into concrete victories. Our seasoned strategists cut through complexity, identify crucial leverage points, and ignite immediate execution momentum.
              </p>
            </div>
            <div>
              <span className="text-xl font-bold text-[#EEFF52] block mb-2">02 / Scale</span>
              <p>
                From growth-stage startups seeking product-market dominance to enterprises scaling their next epoch, we embed deeply with your leadership to challenge static assumptions.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-[#E9DFCF]/10 mb-20 bg-black/10 rounded-2xl px-8">
          <div>
            <span className="font-display text-4xl md:text-5xl font-black text-[#EEFF52] block">120%+</span>
            <span className="text-xs uppercase tracking-wider text-[#E9DFCF]/60 font-semibold">Average Client Growth</span>
          </div>
          <div>
            <span className="font-display text-4xl md:text-5xl font-black text-[#EEFF52] block">₹2.4B+</span>
            <span className="text-xs uppercase tracking-wider text-[#E9DFCF]/60 font-semibold">Capital Optimized</span>
          </div>
          <div>
            <span className="font-display text-4xl md:text-5xl font-black text-[#EEFF52] block">15+ Yrs</span>
            <span className="text-xs uppercase tracking-wider text-[#E9DFCF]/60 font-semibold">Advisory Excellence</span>
          </div>
          <div>
            <span className="font-display text-4xl md:text-5xl font-black text-[#EEFF52] block">96%</span>
            <span className="text-xs uppercase tracking-wider text-[#E9DFCF]/60 font-semibold">Client Retention Rate</span>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="relative h-[480px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group border border-[#E9DFCF]/10">
          <Image
            src="/images/team.png"
            alt="Arth Sutra strategy session"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Subtle vignette/gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#223624]/80 via-transparent to-transparent"></div>
          {/* Caption Card */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-[#E9DFCF] text-[#223624] p-6 rounded-xl max-w-sm border border-[#223624]/10 shadow-lg">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#223624]/60 block mb-1">
              Inside Arth Sutra
            </span>
            <h4 className="font-display text-lg font-bold mb-2">
              Collaborative Strategy & Architecture Room
            </h4>
            <p className="text-xs text-[#223624]/80 leading-relaxed">
              Where complex capital problems are dissected and transformed into robust corporate advantages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}