/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { CaseStudies, CaseStudyModal } from './components/CaseStudies';
import { Estimator } from './components/Estimator';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { CaseStudy } from './types';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationScope, setConsultationScope] = useState('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleOpenConsultation = (scopeText?: string) => {
    setConsultationScope(scopeText || '');
    setIsConsultationOpen(true);
  };

  const handleScrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Bar Header adhering strictly to Top Bar Contract */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToEstimator={handleScrollToEstimator}
        />

        <Capabilities />

        <CaseStudies onSelectCaseStudy={setSelectedCaseStudy} />

        <Estimator
          onScheduleWithScope={(scopeSummary) => handleOpenConsultation(scopeSummary)}
        />

        <Testimonials />

        <Contact />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive Case Study Detail Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onConsultAboutProject={(scopeNotes) => handleOpenConsultation(scopeNotes)}
      />

      {/* Interactive Consultation / Architecture Briefing Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialScope={consultationScope}
      />
    </div>
  );
}
