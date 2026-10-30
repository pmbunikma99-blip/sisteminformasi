import React from 'react';
import { ArrowRight, BookOpen, CheckCircle, ShieldCheck, Award } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
  onExploreCurriculum: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onExploreCurriculum }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker - Editorial Unboxed metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-blue-900 mb-4">
          <span className="font-semibold text-blue-700">Program Studi Sarjana (S1)</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span>Universitas Komputama</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span>Fakultas Sains dan Teknologi</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span className="text-emerald-700 font-semibold flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 inline" /> Penerimaan Mahasiswa Baru Aktif
          </span>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-slate-900 leading-[1.18] tracking-tight font-display text-balance">
              Mencetak Sarjana Komputer Unggul, Technopreneur & Berakhlakul Karimah
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Program Studi Sistem Informasi Universitas Komputama mengajarkan landasan ilmu pengetahuan dan penerapan teknologi informasi dalam organisasi melalui kurikulum khas yang dibangun di atas <strong>tiga pilar terpadu: Komputer, Manajemen, dan Bisnis</strong>.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span>Kurikulum Berbasis KKNI & Standar Global IS2020</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span>Fokus Rekayasa Sistem & Inkubasi Startup Bisnis</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span>Pembentukan Karakter & Komunikasi Interpersonal</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                <span>Fasilitas Laboratorium Komputer Modern Terpadu</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <a
                href="https://pmb.unikmacilacap.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-700 hover:bg-blue-800 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-blue-700/20 flex items-center justify-center gap-2"
              >
                <span>Daftar PMB 2026/2027</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onExploreCurriculum}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:text-blue-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>Eksplorasi 3 Pilar Kurikulum</span>
              </button>
            </div>

            {/* Trust Quote / Identity note */}
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Gelar Lulusan: Sarjana Komputer (S.Kom.) · Siap berkarier di industri TI & wirausaha</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 group">
              <img
                src="/src/assets/images/hero_sistem_informasi_1793347527645.jpg"
                alt="Laboratorium Komputer dan Mahasiswa Sistem Informasi Universitas Komputama"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
              
              {/* Bottom Scrim Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 mb-1">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>Laboratorium Sistem Terintegrasi Universitas Komputama</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                  Mahasiswa mempraktikkan rekayasa software, arsitektur data, dan perancangan sistem bisnis secara langsung.
                </p>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 shadow-lg hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm">
                3in1
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">Kurikulum Holistik</div>
                <div className="text-slate-500">Komputer + Manajemen + Bisnis</div>
              </div>
            </div>
          </div>

        </div>

        {/* Proof of Rigor Strip (Adjacent to Hero) */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 font-display tabular-nums">
              3 Pilar
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-900">Kurikulum Khas</div>
            <p className="text-xs text-slate-500">Integrasi Komputer, Manajemen & Bisnis secara komprehensif.</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tabular-nums">
              IS2020 & KKNI
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-900">Standar Internasional</div>
            <p className="text-xs text-slate-500">Rekayasa sistem informasi sesuai panduan Association for Information Systems.</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 font-display tabular-nums">
              ≥ 75%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-900">Target IPK ≥ 3,00 & Skripsi A</div>
            <p className="text-xs text-slate-500">Standar mutu capaian akademik tinggi dan kelulusan berprestasi.</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tabular-nums">
              Visi 2032
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-900">Technopreneur Unggul</div>
            <p className="text-xs text-slate-500">Berdaya saing nasional dengan komunikasi interpersonal & akhlakul karimah.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
