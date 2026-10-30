import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '3 Pilar Kurikulum', href: '#kurikulum' },
    { label: 'Visi & Sasaran 2032', href: '#visi-misi' },
    { label: 'Profil Lulusan', href: '#profil-lulusan' },
    { label: 'Kuis Karier', href: '#kuis-karier' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            className="flex items-center gap-3 text-slate-950 font-bold tracking-tight text-lg sm:text-xl whitespace-nowrap shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center font-display font-extrabold text-lg shadow-sm group-hover:bg-blue-800 transition-colors">
              SI
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-slate-900 tracking-tight text-base sm:text-lg">
                Sistem Informasi
              </span>
              <span className="text-xs text-blue-800 font-medium tracking-wide">
                Universitas Komputama
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://pmb.unikmacilacap.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:scale-[0.98] rounded-lg transition-all shadow-sm flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Daftar PMB 2026/2027</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://pmb.unikmacilacap.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-blue-700 rounded-lg whitespace-nowrap flex items-center gap-1"
            >
              <span>PMB</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100">
            <a
              href="https://pmb.unikmacilacap.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-blue-700 rounded-lg shadow-sm flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Daftar PMB 2026/2027</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
