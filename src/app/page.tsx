import Services from "@/components/Services";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Insights from "@/components/Insights";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] font-sans antialiased text-[#334155]">
      {/* Premium Header */}
      <header className="w-full sticky top-0 z-50 bg-[#FFFFFF]/80 backdrop-blur-md border-b border-[#E2E8F0]/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-4 h-4 rounded-full bg-[#D4AF37] border-2 border-[#0B1D3A] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
            <span className="font-display text-2xl font-bold tracking-tight text-[#0B1D3A]">ARTH SUTRA</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 font-medium text-sm text-[#334155]">
            <Link href="/" className="hover:text-[#1E3A8A] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] after:transition-all hover:after:w-full">Home</Link>
            <Link href="#about" className="hover:text-[#1E3A8A] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] after:transition-all hover:after:w-full">About Us</Link>
            <Link href="#services" className="hover:text-[#1E3A8A] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] after:transition-all hover:after:w-full">Financial Solutions</Link>
            <Link href="#services" className="hover:text-[#1E3A8A] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] after:transition-all hover:after:w-full">Wealth Management</Link>
            <Link href="#insights" className="hover:text-[#1E3A8A] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] after:transition-all hover:after:w-full">Insights</Link>
            <Link href="#contact" className="hover:text-[#1E3A8A] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] after:transition-all hover:after:w-full">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#services" className="hidden md:inline-flex items-center justify-center text-[#0B1D3A] font-semibold hover:text-[#1E3A8A] transition-colors text-sm">
              Explore Solutions
            </Link>
            <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#0B1D3A] text-[#FFFFFF] px-6 py-2.5 text-sm font-semibold hover:bg-[#1E3A8A] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Book Consultation
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-36 bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1D3A]/5 border border-[#0B1D3A]/10 text-[#0B1D3A] text-xs font-bold uppercase tracking-wider mb-8">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span> 
                FINANCIAL INTELLIGENCE • STRATEGIC GROWTH
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-black tracking-tight text-[#0B1D3A] mb-6">
                Building Smarter Financial Futures Through
                <span className="text-[#1E3A8A] relative inline-block ml-3">
                  Precision Strategy.
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#D4AF37]/30 -z-10 rounded-full"></span>
                </span>
              </h1>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-[#64748B] mb-10">
                We help individuals, startups, and enterprises unlock sustainable growth with intelligent wealth management, investment planning, and data-driven financial solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#services" className="inline-flex items-center justify-center rounded-full bg-[#0B1D3A] text-[#FFFFFF] px-8 py-4 text-base font-semibold hover:bg-[#1E3A8A] transition-all duration-300 shadow-[0_8px_20px_rgb(11,29,58,0.2)] hover:shadow-[0_12px_24px_rgb(11,29,58,0.3)] hover:-translate-y-1">
                  Explore Solutions
                </Link>
                <Link href="#contact" className="inline-flex items-center justify-center rounded-full border-2 border-[#E2E8F0] bg-[#FFFFFF] text-[#0B1D3A] px-8 py-4 text-base font-semibold hover:border-[#0B1D3A] transition-all duration-300 hover:shadow-sm">
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Visual Balance Card Column (Fintech Dashboard Style) */}
            <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-[420px] bg-gradient-to-br from-[#0B1D3A] to-[#1E3A8A] text-[#FFFFFF] rounded-3xl p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(11,29,58,0.3)] border border-[#FFFFFF]/10 overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                
                {/* Decorative Elements */}
                <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#D4AF37]/20 blur-3xl group-hover:bg-[#D4AF37]/30 transition-all duration-700"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[#F8FAFC]/10 blur-2xl"></div>

                {/* Top Status */}
                <div className="flex items-center justify-between border-b border-[#FFFFFF]/10 pb-5 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
                    </span>
                    <span className="text-xs font-mono tracking-widest text-[#FFFFFF]/80 font-semibold">FINANCE ENGINE ACTIVE</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded-md">v3.0</span>
                </div>

                {/* Mid Content - Metrics */}
                <div className="my-8 space-y-5 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#FFFFFF]/5 p-4 rounded-xl border border-[#FFFFFF]/5 backdrop-blur-sm">
                      <span className="text-[10px] uppercase tracking-wider text-[#FFFFFF]/60 block mb-1">Portfolio Growth</span>
                      <span className="font-display text-2xl font-bold text-[#FFFFFF]">+187.6%</span>
                    </div>
                    <div className="bg-[#FFFFFF]/5 p-4 rounded-xl border border-[#FFFFFF]/5 backdrop-blur-sm">
                      <span className="text-[10px] uppercase tracking-wider text-[#FFFFFF]/60 block mb-1">Assets Managed</span>
                      <span className="font-display text-xl font-bold text-[#FFFFFF]">₹4.8 Billion</span>
                    </div>
                    <div className="bg-[#FFFFFF]/5 p-4 rounded-xl border border-[#FFFFFF]/5 backdrop-blur-sm">
                      <span className="text-[10px] uppercase tracking-wider text-[#FFFFFF]/60 block mb-1">Success Rate</span>
                      <span className="font-display text-xl font-bold text-[#D4AF37]">98.4%</span>
                    </div>
                    <div className="bg-[#FFFFFF]/5 p-4 rounded-xl border border-[#FFFFFF]/5 backdrop-blur-sm">
                      <span className="text-[10px] uppercase tracking-wider text-[#FFFFFF]/60 block mb-1">Prediction Acc.</span>
                      <span className="font-display text-xl font-bold text-[#FFFFFF]">96.2%</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="bg-[#0B1D3A]/40 rounded-xl p-4 border border-[#FFFFFF]/5 relative z-10 backdrop-blur-md">
                  <p className="text-xs font-medium text-[#FFFFFF]/90 leading-relaxed">
                    Leveraging predictive analytics and strategic financial intelligence to maximize long-term wealth creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Abstract Shapes */}
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-[#F8FAFC] to-transparent -z-10"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-[#1E3A8A]/5 blur-3xl -z-10"></div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Banner / About Section Container */}
      <div id="about" className="pt-12">
        <Banner />
      </div>

      {/* Services Section Container */}
      <div id="services">
        <Services />
      </div>

      {/* Insights Section Container */}
      <div id="insights">
        <Insights />
      </div>

      {/* Contact Section Container */}
      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
