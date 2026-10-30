import React, { useState } from 'react';
import { THREE_PILLARS, PillarData } from '../data/curriculumData';
import { Terminal, Briefcase, TrendingUp, CheckCircle2, Layers, Cpu, ArrowRight } from 'lucide-react';

interface ThreePillarsProps {
  onOpenRegister: () => void;
}

export const ThreePillars: React.FC<ThreePillarsProps> = ({ onOpenRegister }) => {
  const [activePillarId, setActivePillarId] = useState<string>('komputer');

  const activePillar = THREE_PILLARS.find((p) => p.id === activePillarId) || THREE_PILLARS[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'komputer':
        return <Terminal className="w-5 h-5" />;
      case 'manajemen':
        return <Briefcase className="w-5 h-5" />;
      case 'bisnis':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="kurikulum" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            Struktur Kurikulum Khas
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight text-balance">
            Kurikulum Khas di Atas 3 Pilar Utama
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Kurikulum Program Studi Sistem Informasi Universitas Komputama dirancang khusus tidak hanya mencetak pembuat kode, melainkan profesional yang mampu memberikan solusi teknologi yang tepat sasaran untuk kebutuhan riil organisasi.
          </p>
        </div>

        {/* 3 Interactive Pillar Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 bg-slate-100 rounded-2xl max-w-4xl mx-auto mb-10">
          {THREE_PILLARS.map((pillar) => {
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {getPillarIcon(pillar.id)}
                <span className="whitespace-nowrap">{pillar.name.replace('Bidang ', '')}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Pillar Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
                  Pilar Keahlian
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                  {activePillar.name}
                </h3>
                <p className="text-sm font-medium text-slate-500 mt-1">
                  {activePillar.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activePillar.description}
              </p>

              {/* Kompetensi Inti */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Kompetensi yang Dibekalkan
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePillar.competencies.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white border border-slate-200/80 rounded-lg p-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contoh Mata Kuliah */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Contoh Mata Kuliah Unggulan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activePillar.sampleCourses.map((course, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Practical Output */}
              <div className="pt-2 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-slate-900 block mb-1">Tools & Standar Industri:</span>
                  <div className="text-slate-600">{activePillar.toolsAndTech.join(' · ')}</div>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-1">Output Praktikum Riil:</span>
                  <div className="text-slate-600">{activePillar.practicalOutput}</div>
                </div>
              </div>

            </div>

            {/* Right Visual / Context (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 aspect-[4/3]">
                <img
                  src={
                    activePillar.id === 'bisnis'
                      ? '/src/assets/images/technopreneur_lab_1793347549329.jpg'
                      : '/src/assets/images/software_dev_lab_1793347568710.jpg'
                  }
                  alt={`Aktivitas pembelajaran ${activePillar.name}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 inset-x-3 text-white text-xs">
                  <span className="font-semibold block text-blue-300">
                    {activePillar.id === 'komputer' && 'Laboratorium Pemrograman & Basis Data'}
                    {activePillar.id === 'manajemen' && 'Simulasi Manajemen Proyek & Analisis Sistem'}
                    {activePillar.id === 'bisnis' && 'Laboratorium Technopreneur & Business Model'}
                  </span>
                  <span className="text-slate-300 text-[11px]">
                    Praktik terarah menggunakan studi kasus industri & organisasi lokal.
                  </span>
                </div>
              </div>

              {/* Quick Info Box */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-700" />
                  <span>Kombinasi Solutif untuk Organisasi</span>
                </div>
                <p>
                  Lulusan yang menguasai Komputer tanpa Manajemen sering membuat software yang tidak terpakai. Menguasai Manajemen tanpa Komputer sulit mengeksekusi sistem modern. Di UNIKMA, ketiganya disatukan.
                </p>
                <button
                  onClick={onOpenRegister}
                  className="text-blue-700 font-semibold hover:text-blue-800 inline-flex items-center gap-1.5 pt-1 cursor-pointer"
                >
                  <span>Konsultasikan Rencana Studimu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
