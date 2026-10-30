import React from 'react';
import { Mail, GraduationCap, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Description (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-display font-extrabold text-lg">
                SI
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight">
                  Sistem Informasi
                </span>
                <span className="text-xs text-blue-400 font-medium">
                  Universitas Komputama
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Program Studi Sistem Informasi Universitas Komputama mengintegrasikan ilmu Komputer, Manajemen, dan Bisnis untuk mencetak sarjana kompeten, technopreneur, dan berakhlakul karimah.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Email Resmi PMB:</span>
              <a href="mailto:pmb@unikma.ac.id" className="text-slate-200 hover:text-white underline">
                pmb@unikma.ac.id
              </a>
            </div>
          </div>

          {/* Quick Nav (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigasi Halaman
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#kurikulum" className="hover:text-white transition-colors">
                  3 Pilar Kurikulum (Komputer, Manajemen, Bisnis)
                </a>
              </li>
              <li>
                <a href="#visi-misi" className="hover:text-white transition-colors">
                  Visi 2032, Misi & 8 Sasaran Strategis
                </a>
              </li>
              <li>
                <a href="#profil-lulusan" className="hover:text-white transition-colors">
                  Profil Lulusan (PL01 – PL04) & Standar IS2020
                </a>
              </li>
              <li>
                <a href="#kuis-karier" className="hover:text-white transition-colors">
                  Simulasi Pilihan Karier Interaktif
                </a>
              </li>
              <li>
                <a href="#pmb" className="hover:text-white transition-colors">
                  Penerimaan Mahasiswa Baru 2026/2027
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Accreditation & Academic Standing (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Standar & Akreditasi
            </div>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Kurikulum Berbasis Kerangka Kualifikasi Nasional Indonesia (KKNI)</span>
              </div>
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Mengadopsi Standar Kurikulum Global IS2020</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              Fakultas Sains dan Teknologi · Universitas Komputama
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Program Studi Sistem Informasi - Universitas Komputama. Hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Komputer</span>
            <span>·</span>
            <span>Manajemen</span>
            <span>·</span>
            <span>Bisnis</span>
            <span>·</span>
            <span className="text-blue-400 font-semibold">Akhlakul Karimah</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
