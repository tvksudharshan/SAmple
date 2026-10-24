import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';
import { ArrowUpRight, X, ExternalLink, Cpu } from 'lucide-react';

interface CaseStudiesProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectCaseStudy }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fintech' | 'robotics' | 'commerce'>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredStudies = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.category === activeFilter);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="case-studies" className="py-24 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Selected Engagements
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white [text-wrap:balance]">
              Verifiable proof across high-demand environments.
            </h2>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Systems ({CASE_STUDIES.length})
            </button>
            <button
              onClick={() => setActiveFilter('fintech')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'fintech'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Financial Systems
            </button>
            <button
              onClick={() => setActiveFilter('robotics')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'robotics'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Autonomous Robotics
            </button>
            <button
              onClick={() => setActiveFilter('commerce')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'commerce'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Editorial Commerce
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              className="group flex flex-col justify-between bg-neutral-900/40 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all duration-300"
            >
              <div>
                {/* Visual Asset Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border-b border-neutral-800">
                  {imageErrors[study.id] ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-900">
                      <Cpu className="w-8 h-8 text-neutral-600 mb-2" />
                      <span className="text-xs font-mono text-neutral-400">{study.client}</span>
                    </div>
                  ) : (
                    <img
                      src={study.image}
                      alt={study.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(study.id)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category label as quiet unboxed text on overlay */}
                  <div className="absolute top-4 left-4 text-xs font-mono text-neutral-300 bg-neutral-950/80 backdrop-blur-sm px-2.5 py-1 rounded border border-neutral-800">
                    {study.categoryLabel}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3 font-mono">
                    <span>{study.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.year}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight leading-snug mb-3 group-hover:text-neutral-200 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-6">
                    {study.summary}
                  </p>

                  {/* Quantitative proof metric adjacent to title */}
                  <div className="pt-4 border-t border-neutral-800/80 text-xs font-medium text-neutral-200 font-mono">
                    {study.metrics}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onSelectCaseStudy(study)}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-neutral-950 border border-neutral-800 rounded-md hover:border-neutral-600 hover:text-white transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Inspect Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CaseStudyModal: React.FC<{
  study: CaseStudy | null;
  onClose: () => void;
  onConsultAboutProject: (clientName: string) => void;
}> = ({ study, onClose, onConsultAboutProject }) => {
  if (!study) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-neutral-800 rounded-xl p-6 sm:p-8 shadow-2xl text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors rounded-md border border-neutral-800 hover:border-neutral-700 bg-neutral-950"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
            <span>{study.categoryLabel}</span>
            <span aria-hidden="true">/</span>
            <span>{study.client}</span>
            <span aria-hidden="true">/</span>
            <span>{study.year}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            {study.title}
          </h2>
        </div>

        {/* Results Grid with Tabular Numerals */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-neutral-950 border border-neutral-800/80 mb-6">
          {study.results.map((r, i) => (
            <div key={i}>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                {r.value}
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">
                {r.label}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Narrative */}
        <div className="space-y-6 text-sm text-neutral-300 mb-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Engineering Challenge
            </h4>
            <p className="leading-relaxed bg-neutral-950/40 p-4 rounded-md border border-neutral-800/60">
              {study.challenge}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Architecture & Execution
            </h4>
            <p className="leading-relaxed bg-neutral-950/40 p-4 rounded-md border border-neutral-800/60">
              {study.solution}
            </p>
          </div>

          {study.clientQuote && (
            <div className="p-4 rounded-md bg-neutral-950/80 border border-neutral-800">
              <blockquote className="italic text-neutral-200 text-sm mb-2">
                "{study.clientQuote.text}"
              </blockquote>
              <div className="text-xs text-neutral-400 font-mono">
                — {study.clientQuote.author}, {study.clientQuote.role}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Production Stack Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {study.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-neutral-950 border border-neutral-800 text-neutral-300 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Dismiss
          </button>
          <button
            onClick={() => {
              onClose();
              onConsultAboutProject(`Case Study: ${study.client} (${study.title})`);
            }}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>Discuss Similar Architecture</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
