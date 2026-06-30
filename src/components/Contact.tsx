"use client";

export default function Contact() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-6 relative overflow-hidden z-10">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1E3A8A]/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        {/* Info Column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#D4AF37] block mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-[#D4AF37]"></span>
              Connect With Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-black text-[#0B1D3A] tracking-tight mb-8">
              Strategic Growth <br />
              <span className="text-[#1E3A8A]">Starts Here.</span>
            </h2>
            <p className="text-lg font-medium text-[#64748B] max-w-md leading-relaxed">
              Schedule a confidential consultation with our senior advisory team to architect your next phase of sustainable growth.
            </p>
          </div>

          <div className="mt-12 lg:mt-24 space-y-8 border-t border-[#E2E8F0] pt-10 max-w-sm">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] shadow-sm flex items-center justify-center shrink-0 border border-[#E2E8F0]/50 text-[#0B1D3A]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#64748B] block mb-1">Direct Advisory</span>
                <a href="mailto:partner@arthsutra.com" className="text-base font-bold text-[#0B1D3A] hover:text-[#1E3A8A] transition-colors">partner@arthsutra.com</a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] shadow-sm flex items-center justify-center shrink-0 border border-[#E2E8F0]/50 text-[#0B1D3A]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#64748B] block mb-1">Corporate Headquarters</span>
                <p className="text-sm font-semibold text-[#0B1D3A] leading-relaxed">
                  Level 12, Cyber City, Phase III,<br />Gurgaon, HR 122002
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column - Fintech Dashboard Style */}
        <div className="lg:col-span-7 relative">
          {/* Abstract glow behind the form */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#0B1D3A] rounded-3xl blur-xl opacity-20 translate-y-4"></div>
          
          <div className="bg-[#FFFFFF] rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(11,29,58,0.08)] border border-[#E2E8F0]/50 relative z-10">
            <div className="absolute top-6 right-8 text-[#D4AF37] font-mono text-xs font-bold tracking-widest flex items-center gap-2 bg-[#D4AF37]/10 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              SECURE PORTAL
            </div>
            
            <h3 className="font-display text-2xl font-bold text-[#0B1D3A] mb-8 mt-2">
              Initiate Strategic Dialogue
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2 block">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-base text-[#0B1D3A] focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] outline-none transition-all duration-300 placeholder-[#64748B]/50"
                    placeholder="John Doe"
                  />
                </div>

                <div className="relative group">
                  <label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2 block">Company / Organization</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-base text-[#0B1D3A] focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] outline-none transition-all duration-300 placeholder-[#64748B]/50"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2 block">Contact Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-base text-[#0B1D3A] focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] outline-none transition-all duration-300 placeholder-[#64748B]/50"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="relative group">
                  <label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2 block">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-base text-[#0B1D3A] focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] outline-none transition-all duration-300 placeholder-[#64748B]/50"
                    placeholder="john@acmecorp.com"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2 block">Strategic Objectives</label>
                <textarea
                  rows={4}
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-base text-[#0B1D3A] focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] outline-none transition-all duration-300 placeholder-[#64748B]/50 resize-none"
                  placeholder="Briefly describe your primary financial or growth objectives..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button className="w-full inline-flex items-center justify-center rounded-xl bg-[#0B1D3A] text-[#FFFFFF] px-8 py-4 font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#1E3A8A] shadow-[0_8px_20px_rgb(11,29,58,0.15)] hover:shadow-[0_12px_24px_rgb(11,29,58,0.25)] hover:-translate-y-1">
                  Request Advisory Session
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
