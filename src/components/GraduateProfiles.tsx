import React, { useState } from 'react';
import { GRADUATE_PROFILES, ProfileLulusan } from '../data/curriculumData';
import { UserCheck, Palette, FileSearch, Code, ArrowRight, CheckCircle2, Sparkles, RefreshCw, Briefcase } from 'lucide-react';

interface GraduateProfilesProps {
  onOpenRegister: () => void;
}

export const GraduateProfiles: React.FC<GraduateProfilesProps> = ({ onOpenRegister }) => {
  const [selectedCode, setSelectedCode] = useState<string>('PL02');
  
  // Interactive Quiz State
  const [quizStep, setQuizStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [quizResult, setQuizResult] = useState<ProfileLulusan | null>(null);

  const selectedProfile = GRADUATE_PROFILES.find((p) => p.code === selectedCode) || GRADUATE_PROFILES[0];

  const getProfileIcon = (code: string) => {
    switch (code) {
      case 'PL01':
        return <UserCheck className="w-5 h-5" />;
      case 'PL02':
        return <Palette className="w-5 h-5" />;
      case 'PL03':
        return <FileSearch className="w-5 h-5" />;
      case 'PL04':
        return <Code className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  // Quiz questions
  const quizQuestions = [
    {
      q: 'Aktivitas apa di dunia digital yang paling menarik minatmu?',
      options: [
        { label: 'Menulis kode, memprogram web, backend, atau aplikasi mobile', code: 'PL04' },
        { label: 'Merancang antarmuka aplikasi yang estetik, mudah, dan nyaman dipakai pengguna', code: 'PL02' },
        { label: 'Menganalisis alur bisnis perusahaan dan merancang sistem terpadu yang efisien', code: 'PL03' },
        { label: 'Berkomunikasi dengan klien, memimpin tim, dan menyampaikan solusi teknologi dengan santun', code: 'PL01' },
      ],
    },
    {
      q: 'Ketika ada proyek membuat aplikasi baru, peran mana yang paling ingin kamu ambil?',
      options: [
        { label: 'Full-stack programmer yang mengeksekusi logika dan basis data aplikasi', code: 'PL04' },
        { label: 'Desainer UI/UX yang membuat wireframe dan prototipe di Figma', code: 'PL02' },
        { label: 'System Analyst yang mengumpulkan kebutuhan klien dan membuat diagram proses', code: 'PL03' },
        { label: 'Project liaison yang mengkoordinasikan pengguna, manajemen, dan tim pengembang', code: 'PL01' },
      ],
    },
    {
      q: 'Apa tujuan karier jangka panjang yang ingin kamu raih?',
      options: [
        { label: 'Menjadi Software Engineer handal atau membangun startup teknologi sendiri (Technopreneur)', code: 'PL04' },
        { label: 'Menjadi Lead Product Designer / UI/UX Expert di perusahaan teknologi', code: 'PL02' },
        { label: 'Menjadi Senior IT Consultant / Enterprise System Architect di korporasi atau BUMN', code: 'PL03' },
        { label: 'Menjadi IT Business Relationship Manager dengan integritas kepemimpinan tinggi', code: 'PL01' },
      ],
    },
  ];

  const handleSelectAnswer = (code: string) => {
    const newAnswers = { ...answers, [quizStep]: code };
    setAnswers(newAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Tally winner
      const tally: { [key: string]: number } = { PL01: 0, PL02: 0, PL03: 0, PL04: 0 };
      Object.values(newAnswers).forEach((c) => {
        tally[c] = (tally[c] || 0) + 1;
      });
      let highestCode = 'PL04';
      let highestCount = -1;
      Object.entries(tally).forEach(([c, count]) => {
        if (count > highestCount) {
          highestCount = count;
          highestCode = c;
        }
      });
      const matched = GRADUATE_PROFILES.find((p) => p.code === highestCode) || GRADUATE_PROFILES[0];
      setQuizResult(matched);
      setSelectedCode(matched.code);
    }
  };

  const handleResetQuiz = () => {
    setQuizStep(0);
    setAnswers({});
    setQuizResult(null);
  };

  return (
    <section id="profil-lulusan" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            Standar Kurikulum IS2020 & KKNI
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight text-balance">
            Profil Lulusan (PL01 – PL04) & Prospek Kerja
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Setiap lulusan Sistem Informasi Universitas Komputama dipersiapkan menguasai kompetensi teruji yang diakui standar kurikulum internasional (IS2020) dan berlandaskan Akhlakul Karimah.
          </p>
        </div>

        {/* 4 Cards Grid - Clickable to Switch Deep Dive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {GRADUATE_PROFILES.map((profile) => {
            const isSelected = profile.code === selectedCode;
            return (
              <button
                key={profile.code}
                onClick={() => setSelectedCode(profile.code)}
                className={`text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-600/20 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold text-blue-700 font-display">
                      {profile.code}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 bg-white border border-slate-200/80 px-2 py-0.5 rounded">
                      {profile.standard}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'}`}>
                      {getProfileIcon(profile.code)}
                    </div>
                    <div className="font-bold text-slate-900 text-sm leading-tight">
                      {profile.title}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 mt-2 leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-blue-700">
                  <span>Lihat Detail Kompetensi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Profile Detail Panel */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column (7 cols): Deskripsi & Kompetensi */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                  <span>Kode Resmi: {selectedProfile.code}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProfile.standard}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                  {selectedProfile.title}
                </h3>
                <div className="text-sm font-semibold text-slate-600 mt-1">
                  {selectedProfile.roleIndo}
                </div>
              </div>

              {/* Exact Text from Specification */}
              <div className="p-4 bg-white border border-slate-200 rounded-xl text-slate-700 text-sm leading-relaxed">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Definisi Profil Lulusan:
                </span>
                “{selectedProfile.description}”
              </div>

              {/* Kompetensi Inti */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Keahlian & Kemampuan Spesifik
                </h4>
                <div className="space-y-2">
                  {selectedProfile.competencyHighlights.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white border border-slate-200/80 rounded-lg p-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Stack */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Keahlian Kunci (Skillset)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProfile.keySkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Karier & Lingkungan Kerja */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Prospek Karier Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-700" />
                  <span>Posisi & Prospek Karier Terkait</span>
                </h4>
                <div className="space-y-2">
                  {selectedProfile.careerProspects.map((pos, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-100 rounded-lg text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <span>{pos}</span>
                      <span className="text-[11px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                        High Demand
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <span className="font-bold text-slate-900 block mb-1">Lingkungan Kerja:</span>
                  <p>{selectedProfile.workEnvironment}</p>
                </div>
              </div>

              {/* Registration Prompt */}
              <div className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white rounded-2xl p-6 shadow-md space-y-3">
                <div className="font-bold text-base font-display">
                  Tertarik Mendalami Profil {selectedProfile.code}?
                </div>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Daftarkan diri di Program Studi Sistem Informasi Universitas Komputama dan wujudkan kariermu di era industri digital.
                </p>
                <button
                  onClick={onOpenRegister}
                  className="w-full py-2.5 px-4 bg-white text-blue-800 hover:bg-blue-50 font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Daftar Sekarang untuk Jalur Ini</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Interactive Career Fit Quiz Section */}
        <div id="kuis-karier" className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Simulasi Interaktif Pilihan Karier</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Cek Profil Lulusan & Karier yang Paling Cocok Untukmu
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Jawab 3 pertanyaan singkat untuk menemukan profil Sistem Informasi yang paling selaras dengan minat dan potensimu.
            </p>
          </div>

          {!quizResult ? (
            <div className="max-w-2xl mx-auto bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-700">
                <span>Pertanyaan {quizStep + 1} dari {quizQuestions.length}</span>
                <span className="text-blue-400 font-semibold">Minat & Bakat Teknologi</span>
              </div>

              <div className="text-base sm:text-lg font-bold text-white mb-6">
                {quizQuestions[quizStep].q}
              </div>

              <div className="space-y-3">
                {quizQuestions[quizStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(opt.code)}
                    className="w-full text-left p-4 rounded-xl bg-slate-700/60 hover:bg-blue-600/80 border border-slate-600/60 hover:border-blue-400 text-xs sm:text-sm font-medium text-slate-100 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-slate-800/95 border border-blue-500/50 rounded-2xl p-6 sm:p-8 text-center space-y-5">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 mx-auto flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                  Hasil Rekomendasi Profil Idealmu:
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {quizResult.code}: {quizResult.title}
                </h4>
                <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                  {quizResult.roleIndo}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-left bg-slate-900/60 p-4 rounded-xl border border-slate-700">
                {quizResult.description}
              </p>

              <div className="text-left">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Pilihan Karier Utama:
                </span>
                <div className="flex flex-wrap gap-2">
                  {quizResult.careerProspects.map((pos, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold text-blue-300 bg-blue-950/80 border border-blue-800/60 px-3 py-1 rounded-md"
                    >
                      {pos}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <button
                  onClick={onOpenRegister}
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Daftar Konsultasi Program {quizResult.code}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleResetQuiz}
                  className="w-full sm:w-auto px-4 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs sm:text-sm font-medium rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Ulangi Kuis</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
