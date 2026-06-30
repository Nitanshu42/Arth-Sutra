"use client";

export default function Contact() {
  return (
    <section className="w-full bg-[#EEFF52] py-28 px-6 text-[#223624] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#223624]/5 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        {/* Info Column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#223624]/60 block mb-4">
              // Get In Touch
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-[80px] leading-none font-black tracking-tight">
              Let's Talk
              <br />
              Growth.
            </h2>
            <p className="mt-8 text-lg font-medium text-[#223624]/80 max-w-md leading-relaxed">
              Fill out our brief diagnostic form, and a senior strategist will design a custom, high-velocity growth layout for your team.
            </p>
          </div>

          <div className="mt-12 lg:mt-24 space-y-6 border-t border-[#223624]/10 pt-8 max-w-sm">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#223624]/50 block mb-1">Direct Advisory</span>
              <a href="mailto:partner@arthsutra.com" className="text-lg font-bold hover:underline">partner@arthsutra.com</a>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#223624]/50 block mb-1">Corporate Headquarters</span>
              <p className="text-sm font-semibold leading-relaxed">
                Level 12, Cyber City, Phase III, Gurgaon, HR 122002
              </p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 bg-[#223624] text-[#E9DFCF] rounded-3xl p-8 md:p-12 shadow-2xl relative">
          <div className="absolute top-4 right-8 text-[#EEFF52] font-mono text-xs tracking-widest">
            SECURE ADVISORY REQUEST
          </div>
          <h3 className="font-display text-2xl font-bold mb-8">
            Tell us about your organization
          </h3>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full border-b border-[#E9DFCF]/20 bg-transparent outline-none py-3 text-lg focus:border-[#EEFF52] transition-colors duration-300 placeholder-[#E9DFCF]/40"
                />
              </div>


              <div className="relative group">
                <input
                  type="text"
                  required
                  placeholder="Company Name"
                  className="w-full border-b border-[#E9DFCF]/20 bg-transparent outline-none py-3 text-lg focus:border-[#EEFF52] transition-colors duration-300 placeholder-[#E9DFCF]/40"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full border-b border-[#E9DFCF]/20 bg-transparent outline-none py-3 text-lg focus:border-[#EEFF52] transition-colors duration-300 placeholder-[#E9DFCF]/40"
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full border-b border-[#E9DFCF]/20 bg-transparent outline-none py-3 text-lg focus:border-[#EEFF52] transition-colors duration-300 placeholder-[#E9DFCF]/40"
                />
              </div>
            </div>

            <div className="relative group">
              <textarea
                rows={3}
                placeholder="What is your primary growth bottleneck?"
                className="w-full border-b border-[#E9DFCF]/20 bg-transparent outline-none py-3 text-lg focus:border-[#EEFF52] transition-colors duration-300 placeholder-[#E9DFCF]/40 resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-[#EEFF52] text-[#223624] px-10 py-4 font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#E9DFCF] hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
                Submit Strategy Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}