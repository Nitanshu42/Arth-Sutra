import Services from "@/components/Services";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#E9DFCF] font-sans antialiased text-[#223624]">
      {/* Premium Header */}
      <header className="w-full sticky top-0 z-50 bg-[#E9DFCF]/80 backdrop-blur-md border-b border-[#223624]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-4 h-4 rounded-full bg-[#EEFF52] border border-[#223624] group-hover:scale-125 transition-transform duration-300"></span>
            <span className="font-display text-2xl font-bold tracking-tight">ARTH SUTRA</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#services" className="hover:opacity-75 transition-opacity">Services</a>
            <a href="#about" className="hover:opacity-75 transition-opacity">Our Philosophy</a>
            <a href="#contact" className="hover:opacity-75 transition-opacity">Let's Talk</a>
          </nav>
          <div>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#223624] text-[#E9DFCF] px-6 py-2.5 text-sm font-semibold hover:bg-[#EEFF52] hover:text-[#223624] border border-[#223624] transition-all duration-300 shadow-sm hover:shadow">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#223624] text-[#EEFF52] text-xs font-semibold uppercase tracking-wider mb-6">
                <span>★</span> Precision Strategy & Financial Architecture
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[85px] leading-none font-black tracking-tight mb-8">
                We engineer
                <br />
                <span className="text-[#223624] relative inline-block">
                  high-velocity
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#EEFF52] -z-10 rounded-full"></span>
                </span> growth
                <br />
                for modern brands.
              </h1>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-[#223624]/80 mb-10">
                Arth Sutra combines advanced strategic foresight with structured operational execution. We embed deep with your leadership to scale operations, optimize capital, and dominate your market.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="inline-flex items-center justify-center rounded-full bg-[#EEFF52] text-[#223624] px-8 py-4 text-base font-semibold border-2 border-[#223624] hover:bg-[#223624] hover:text-[#EEFF52] transition-all duration-300 shadow-[4px_4px_0px_0px_#223624] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  Explore Services
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border-2 border-[#223624] text-[#223624] px-8 py-4 text-base font-semibold hover:bg-[#223624]/5 transition-all duration-300">
                  Book a Strategy Call
                </a>
              </div>
            </div>

            {/* Visual Balance Card Column */}
            <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] aspect-[4/5] bg-[#223624] text-[#E9DFCF] rounded-3xl p-8 flex flex-col justify-between shadow-2xl border border-[#EEFF52]/20 overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                {/* Decorative glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#EEFF52]/10 blur-2xl group-hover:bg-[#EEFF52]/20 transition-all duration-500"></div>

                {/* Top Status */}
                <div className="flex items-center justify-between border-b border-[#E9DFCF]/10 pb-6 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EEFF52] animate-ping"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EEFF52] absolute"></span>
                    <span className="text-xs font-mono tracking-widest text-[#E9DFCF]/60">SUTRA SYSTEM ACTIVE</span>
                  </div>
                  <span className="font-mono text-xs text-[#EEFF52]">v2.6.4</span>
                </div>

                {/* Mid Content */}
                <div className="my-8 space-y-6 relative z-10">
                  <span className="text-xs uppercase tracking-widest text-[#EEFF52] font-semibold">Active Metrics</span>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-[#E9DFCF]/60 block">Strategy Performance</span>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-display text-2xl font-bold">Accelerated Cap</span>
                        <span className="text-sm font-mono text-[#EEFF52] font-bold">+184.2%</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-[#E9DFCF]/60 block">Asset Optimisation Rate</span>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-display text-2xl font-bold">₹2.4 Billion</span>
                        <span className="text-sm font-mono text-[#EEFF52] font-bold">96.8% Efficiency</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="bg-[#E9DFCF]/5 rounded-2xl p-4 border border-[#E9DFCF]/10 relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-[#E9DFCF]/40 block mb-1">Current Stance</span>
                  <p className="text-xs font-medium text-[#E9DFCF]/80">
                    Deploying predictive market alignment vectors for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Abstract shapes for visual interest */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#EEFF52]/30 blur-3xl -z-10"></div>
        <div className="absolute right-12 bottom-12 w-24 h-24 rounded-full border-4 border-dashed border-[#223624]/10 -z-10"></div>
      </section>

      {/* Services Section Container */}
      <div id="services" className="border-t border-[#223624]/10">
        <Services />
      </div>

      {/* Banner / About Section Container */}
      <div id="about" className="border-t border-[#223624]/10">
        <Banner />
      </div>

      {/* Contact Section Container */}
      <div id="contact" className="border-t border-[#223624]/10">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}