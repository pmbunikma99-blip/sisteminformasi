import React, { useState } from 'react';
import { VISION_MISSION, STRATEGIC_TARGETS } from '../data/curriculumData';
import { Compass, Target, Award, CheckCircle, Sparkles, Building, Globe, Users2 } from 'lucide-react';

export const VisionMission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'misi' | 'tujuan' | 'sasaran'>('sasaran');

  return (
    <section id="visi-misi" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            Arah & Komitmen Strategis
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight text-balance">
            Visi, Misi, Tujuan & Sasaran Menuju 2032
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Komitmen Universitas Komputama dalam menyelenggarakan pendidikan tinggi berkualitas tinggi dengan tata kelola yang baik (Good Governance) dan berdampak nyata bagi masyarakat.
          </p>
        </div>

        {/* 1. Visi 2032 Spotlight Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 mb-12 shadow-sm relative overflow-hidden">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
              <Compass className="w-4 h-4" />
              <span>Visi Program Studi Sistem Informasi Menuju Tahun 2032</span>
            </div>
            
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-display leading-snug tracking-tight">
              “{VISION_MISSION.vision.statement}”
            </blockquote>

            {/* 4 Pillars of the Vision */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                <div className="text-xs font-bold text-slate-900 mb-1">01. Daya Saing Nasional</div>
                <div className="text-xs text-slate-600">Lulusan mampu bersaing di kancah industri teknologi informasi nasional dan global.</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                <div className="text-xs font-bold text-slate-900 mb-1">02. Rekayasa Sistem Informasi</div>
                <div className="text-xs text-slate-600">Penguasaan mendalam dalam menganalisis, merancang, dan mengembangkan software enterprise.</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                <div className="text-xs font-bold text-slate-900 mb-1">03. Komunikasi & Karakter</div>
                <div className="text-xs text-slate-600">Kecakapan interpersonal yang persuasif dan etika luhur berlandaskan Akhlakul Karimah.</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                <div className="text-xs font-bold text-slate-900 mb-1">04. Jiwa Technopreneur</div>
                <div className="text-xs text-slate-600">Mampu berwirausaha di bidang teknologi dan menciptakan nilai tambah ekonomi baru.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Controls for Misi, Tujuan, and Sasaran */}
        <div className="flex items-center justify-center gap-2 p-1 bg-slate-200/80 rounded-xl max-w-md mx-auto mb-8">
          <button
            onClick={() => setActiveTab('sasaran')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'sasaran'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            8 Sasaran Strategis
          </button>
          <button
            onClick={() => setActiveTab('misi')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'misi'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            4 Misi Prodi
          </button>
          <button
            onClick={() => setActiveTab('tujuan')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'tujuan'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            4 Tujuan Utama
          </button>
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === 'sasaran' && (
          <div className="space-y-6">
            <div className="text-center text-xs text-slate-500 font-medium">
              Target Kinerja & Capaian Terukur Program Studi Sistem Informasi
            </div>

            {/* 8 Sasaran Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {STRATEGIC_TARGETS.map((target) => (
                <div
                  key={target.code}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                        Sasaran {target.code}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {target.category}
                      </span>
                    </div>

                    <div className="text-base font-bold text-slate-900 mb-1">
                      {target.title}
                    </div>

                    <div className="text-lg font-extrabold text-blue-700 font-display mb-2 tabular-nums">
                      {target.targetMetric}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {target.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Target Terukur 2026–2032</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'misi' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {VISION_MISSION.missions.map((misi) => (
              <div
                key={misi.number}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex gap-4 hover:border-blue-300 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm shrink-0 font-display">
                  {misi.number.toUpperCase()}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900">
                    {misi.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {misi.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tujuan' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {VISION_MISSION.objectives.map((tujuan) => (
              <div
                key={tujuan.number}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex gap-4 hover:border-blue-300 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-sm shrink-0 font-display">
                  {tujuan.number.toUpperCase()}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900">
                    {tujuan.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tujuan.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
