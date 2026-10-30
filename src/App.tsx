/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThreePillars } from './components/ThreePillars';
import { VisionMission } from './components/VisionMission';
import { GraduateProfiles } from './components/GraduateProfiles';
import { PmbRegistration } from './components/PmbRegistration';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenRegister = () => {
    window.open('https://pmb.unikmacilacap.ac.id', '_blank', 'noopener,noreferrer');
  };

  const handleExploreCurriculum = () => {
    const kurikulumSection = document.getElementById('kurikulum');
    if (kurikulumSection) {
      kurikulumSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Strict 3-zone Top Bar Contract */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Dominant Focal Carrier & Metric Strip */}
        <Hero
          onOpenRegister={handleOpenRegister}
          onExploreCurriculum={handleExploreCurriculum}
        />

        {/* 2. Kurikulum Khas 3 Pilar (Komputer, Manajemen, Bisnis) */}
        <ThreePillars onOpenRegister={handleOpenRegister} />

        {/* 3. Visi 2032, 4 Misi, 4 Tujuan, dan 8 Sasaran Kinerja */}
        <VisionMission />

        {/* 4. Profil Lulusan (PL01 - PL04) Standar IS2020 + Kuis Karier Interaktif */}
        <GraduateProfiles onOpenRegister={handleOpenRegister} />

        {/* 5. Penerimaan Mahasiswa Baru (PMB) & Lead Form Interaktif */}
        <PmbRegistration
          isOpenModal={isRegisterModalOpen}
          onCloseModal={() => setIsRegisterModalOpen(false)}
        />

        {/* 6. Tanya Jawab (FAQ) */}
        <FaqSection />
      </main>

      {/* 7. Quiet Footer */}
      <Footer />
    </div>
  );
}
