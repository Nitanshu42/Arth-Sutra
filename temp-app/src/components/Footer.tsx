import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#E9DFCF] text-[#223624] border-t border-[#223624]/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Logo & Description Column */}
          <div className="md:col-span-6 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <span className="w-3.5 h-3.5 rounded-full bg-[#EEFF52] border border-[#223624] group-hover:scale-125 transition-transform duration-300"></span>
              <span className="font-display text-xl font-bold tracking-tight">ARTH SUTRA</span>
            </Link>
            <p className="text-sm text-[#223624]/75 max-w-sm leading-relaxed">
              Empowering enterprise leaders and fast-scaling startups with advanced financial architecture, capital strategy, and bold commercial clarity.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#223624]/50">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#services" className="hover:text-[#223624]/70 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#223624]/70 transition-colors">Our Approach</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#223624]/70 transition-colors">Strategic Consultation</a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#223624]/50">
              Corporate Desk
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="mailto:partner@arthsutra.com" className="hover:text-[#223624]/70 transition-colors">partner@arthsutra.com</a>
              </li>
              <li className="text-[#223624]/70">
                +91 (124) 490-SUTRA
              </li>
              <li className="text-xs text-[#223624]/50 pt-2 font-mono uppercase">
                MON — FRI / 09:00 — 18:00 IST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-16 pt-8 border-t border-[#223624]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#223624]/50">
          <p>© {new Date().getFullYear()} Arth Sutra Advisory Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Capital Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}