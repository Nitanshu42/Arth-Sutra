import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1D3A] text-[#F8FAFC] border-t border-[#FFFFFF]/10 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Logo & Description Column */}
          <div className="md:col-span-12 lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <span className="w-4 h-4 rounded-full bg-[#D4AF37] border-2 border-[#0B1D3A] shadow-[0_0_10px_rgba(212,175,55,0.3)]"></span>
              <span className="font-display text-2xl font-bold tracking-tight text-[#FFFFFF]">ARTH SUTRA</span>
            </Link>
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-[#FFFFFF]">
                Your Financial Growth Starts Here.
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed max-w-sm">
                Empowering financial success through strategic intelligence and innovative fintech solutions. We architect wealth for the modern era.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#D4AF37] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-medium text-[#FFFFFF]/80">
              <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link href="#insights" className="hover:text-[#D4AF37] transition-colors">Insights & Blog</Link></li>
              <li><Link href="#portfolio" className="hover:text-[#D4AF37] transition-colors">Portfolio</Link></li>
              <li><Link href="#resources" className="hover:text-[#D4AF37] transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#D4AF37] mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm font-medium text-[#FFFFFF]/80">
              <li><Link href="#services" className="hover:text-[#D4AF37] transition-colors">Wealth Management</Link></li>
              <li><Link href="#services" className="hover:text-[#D4AF37] transition-colors">Investment Advisory</Link></li>
              <li><Link href="#services" className="hover:text-[#D4AF37] transition-colors">Retirement Planning</Link></li>
              <li><Link href="#services" className="hover:text-[#D4AF37] transition-colors">Portfolio Optimization</Link></li>
              <li><Link href="#services" className="hover:text-[#D4AF37] transition-colors">Corporate Finance</Link></li>
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="md:col-span-4 lg:col-span-3 space-y-8">
            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#D4AF37] mb-6">
                Contact Info
              </h4>
              <ul className="space-y-3 text-sm font-medium text-[#FFFFFF]/80">
                <li><a href="mailto:partner@arthsutra.com" className="hover:text-[#D4AF37] transition-colors">partner@arthsutra.com</a></li>
                <li>+91 (124) 490-SUTRA</li>
                <li className="text-[#64748B] font-mono text-xs pt-1">MON — FRI / 09:00 — 18:00 IST</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#D4AF37] mb-4">
                Social Media
              </h4>
              <div className="flex gap-4">
                {/* Placeholder Social Icons */}
                <a href="#" className="w-8 h-8 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B1D3A] transition-all">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B1D3A] transition-all">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-16 pt-8 border-t border-[#FFFFFF]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#64748B]">
          <p>© {new Date().getFullYear()} Arth Sutra. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FFFFFF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FFFFFF] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#FFFFFF] transition-colors">Capital Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
