import React, { useState } from 'react';
import { CAPABILITIES } from '../data/content';
import { CheckCircle2, Cpu, Layers, ShieldCheck, Terminal } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeCapability = CAPABILITIES[selectedIdx];

  const capabilityIcons = [
    <Terminal className="w-4 h-4" />,
    <Layers className="w-4 h-4" />,
    <Cpu className="w-4 h-4" />,
    <ShieldCheck className="w-4 h-4" />
  ];

  return (
    <section id="capabilities" className="py-24 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Core Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white [text-wrap:balance]">
              Engineering for systems where downtime and frame stutter are unacceptable.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
            Every layer from binary protocol serialization to WebGL paint cycles is optimized for deterministic performance and clarity.
          </p>
        </div>

        {/* Numbered Service List & Interactive Deep Dive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Service Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {CAPABILITIES.map((cap, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={cap.number}
                  onClick={() => setSelectedIdx(idx)}
                  className={`text-left p-5 rounded-lg border transition-all ${
                    isSelected
                      ? 'bg-neutral-900 border-neutral-700 text-white shadow-sm'
                      : 'bg-neutral-950 border-neutral-800/80 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs tracking-wider text-neutral-400">
                      {cap.number}. Architectural Focus
                    </span>
                    <span className={`${isSelected ? 'text-white' : 'text-neutral-500'}`}>
                      {capabilityIcons[idx]}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                    {cap.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Architectural View */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-xl p-8">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
              <div className="text-xs font-mono text-neutral-400">
                SYSTEM SPECIFICATION / SECTION {activeCapability.number}
              </div>
              <div className="text-xs text-neutral-400 font-medium">
                Production Guaranteed
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">
              {activeCapability.title}
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed mb-8">
              {activeCapability.details}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-neutral-800/80">
              {/* Key Deliverables */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Key Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {activeCapability.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Deployed */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Production Tooling
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCapability.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
