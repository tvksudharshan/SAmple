import React, { useState } from 'react';
import { ESTIMATOR_MODULES } from '../data/content';
import { Check, Download, ArrowRight, ShieldCheck, Clock, Users, DollarSign } from 'lucide-react';

interface EstimatorProps {
  onScheduleWithScope: (summaryText: string) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({ onScheduleWithScope }) => {
  const [tier, setTier] = useState<'mvp' | 'production' | 'enterprise'>('production');
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'realtime-telemetry',
    'design-system',
    'auth-rbac'
  ]);
  const [velocity, setVelocity] = useState<'standard' | 'accelerated'>('standard');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Toggle module selection
  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  // Base configurations
  const tierConfig = {
    mvp: { baseWeeks: 4, baseBudget: 32000, label: 'MVP Core Architecture', team: '1 Principal Architect, 1 Senior Engineer' },
    production: { baseWeeks: 8, baseBudget: 68000, label: 'Full Production Platform', team: '1 Lead Architect, 2 Senior Engineers, 1 Design Engineer' },
    enterprise: { baseWeeks: 12, baseBudget: 110000, label: 'Enterprise Modernization', team: '1 Staff Architect, 3 Full-Stack Engineers, 1 Security Specialist' }
  };

  // Calculations
  const currentTier = tierConfig[tier];
  const moduleWeeks = selectedModules.reduce((acc, modId) => {
    const mod = ESTIMATOR_MODULES.find((m) => m.id === modId);
    return acc + (mod ? mod.weeks * 0.75 : 0);
  }, 0);

  const moduleBudget = selectedModules.reduce((acc, modId) => {
    const mod = ESTIMATOR_MODULES.find((m) => m.id === modId);
    return acc + (mod ? mod.budget : 0);
  }, 0);

  const totalRawWeeks = Math.ceil(currentTier.baseWeeks + moduleWeeks);
  const totalWeeks = velocity === 'accelerated' ? Math.max(3, Math.ceil(totalRawWeeks * 0.7)) : totalRawWeeks;
  
  const rawBudget = currentTier.baseBudget + moduleBudget;
  const totalBudgetMin = velocity === 'accelerated' ? Math.round(rawBudget * 1.25) : rawBudget;
  const totalBudgetMax = Math.round(totalBudgetMin * 1.2);

  const formatCurrency = (val: number) => {
    return '$' + val.toLocaleString('en-US');
  };

  const getScopeSummary = () => {
    const moduleNames = selectedModules
      .map((id) => ESTIMATOR_MODULES.find((m) => m.id === id)?.name)
      .filter(Boolean)
      .join(', ');
    return `[${currentTier.label}] Velocity: ${velocity}. Modules: ${moduleNames}. Timeline: ~${totalWeeks} weeks. Est Budget: ${formatCurrency(totalBudgetMin)} - ${formatCurrency(totalBudgetMax)}.`;
  };

  // Working download handler
  const handleExportScope = () => {
    const content = `VANGUARD STUDIO // PROJECT SCOPE ESTIMATION
Date: ${new Date().toLocaleDateString('en-US')}
--------------------------------------------------
TIER: ${currentTier.label}
VELOCITY: ${velocity.toUpperCase()}
RECOMMENDED TEAM TOPOLOGY: ${currentTier.team}

ESTIMATED TIMELINE: ${totalWeeks} WEEKS
ESTIMATED INVESTMENT RANGE: ${formatCurrency(totalBudgetMin)} – ${formatCurrency(totalBudgetMax)}

SELECTED ARCHITECTURAL MODULES:
${selectedModules
  .map((id) => {
    const mod = ESTIMATOR_MODULES.find((m) => m.id === id);
    return `- ${mod?.name}: ${mod?.desc}`;
  })
  .join('\n')}

DELIVERY GUARANTEES:
- Production SLA Benchmark
- Complete source code ownership & TypeScript schemas
- Zero-downtime CI/CD container configuration
--------------------------------------------------
To schedule a formal feasibility review, contact hello@vanguardstudio.internal
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vanguard-scope-estimate-${tier}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="estimator" className="py-24 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Interactive Architecture & Scope Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white [text-wrap:balance]">
            Configure engineering milestones and budget parameters transparently.
          </h2>
          <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
            Select your architectural scale and mission modules to immediately model timelines, staffing topology, and capital allocation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Base Tier Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                1. System Maturity Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['mvp', 'production', 'enterprise'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTier(t)}
                    className={`p-4 rounded-lg border text-left transition-all ${
                      tier === t
                        ? 'bg-neutral-900 border-neutral-500 text-white shadow-sm'
                        : 'bg-neutral-900/40 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                    }`}
                  >
                    <div className="text-sm font-semibold text-white capitalize mb-1">
                      {t === 'mvp' ? 'Core MVP' : t === 'production' ? 'Production' : 'Enterprise'}
                    </div>
                    <div className="text-xs text-neutral-400 leading-snug">
                      {t === 'mvp'
                        ? 'Rapid market test with core invariants'
                        : t === 'production'
                        ? 'Full institutional resilience & scaling'
                        : 'Legacy migration & distributed clusters'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Architecture Modules */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  2. Select Specialized Capabilities ({selectedModules.length} Active)
                </label>
                <span className="text-[11px] text-neutral-500">Tap to toggle</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ESTIMATOR_MODULES.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`p-3.5 rounded-lg border cursor-pointer select-none transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'bg-neutral-900 border-neutral-600 text-white'
                          : 'bg-neutral-950 border-neutral-800/80 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                          isChecked
                            ? 'bg-white border-white text-neutral-950'
                            : 'border-neutral-700 bg-neutral-900'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">
                          {mod.name}
                        </div>
                        <div className="text-[11px] text-neutral-400 leading-normal mt-0.5">
                          {mod.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Velocity Setting */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                3. Deployment Velocity
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setVelocity('standard')}
                  className={`p-3.5 rounded-lg border text-left transition-all ${
                    velocity === 'standard'
                      ? 'bg-neutral-900 border-neutral-600 text-white'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="text-xs font-medium text-white mb-0.5">Standard Cadence</div>
                  <div className="text-[11px] text-neutral-400">Balanced sprint sequencing</div>
                </button>
                <button
                  type="button"
                  onClick={() => setVelocity('accelerated')}
                  className={`p-3.5 rounded-lg border text-left transition-all ${
                    velocity === 'accelerated'
                      ? 'bg-neutral-900 border-neutral-600 text-white'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="text-xs font-medium text-white mb-0.5">Accelerated Sprint (+25%)</div>
                  <div className="text-[11px] text-neutral-400">Dedicated pair engineers</div>
                </button>
              </div>
            </div>
          </div>

          {/* Real-Time Calculation Card */}
          <div className="lg:col-span-5 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 sm:p-7 sticky top-24 shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Live Engineering Projection
              </span>
              <span className="text-xs font-mono text-neutral-400">
                REV-2026.1
              </span>
            </div>

            {/* Timeline & Budget Outputs */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800/80">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Timeline</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                  ~{totalWeeks} wks
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  Target milestone launch
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800/80">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1 font-mono">
                  <DollarSign className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Investment</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums truncate">
                  {formatCurrency(totalBudgetMin)}
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  to {formatCurrency(totalBudgetMax)}
                </div>
              </div>
            </div>

            {/* Team Allocation Specs */}
            <div className="space-y-3 mb-6 p-4 rounded-lg bg-neutral-950/60 border border-neutral-800 text-xs">
              <div className="flex items-start gap-2 text-neutral-300">
                <Users className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 font-mono">Squad: </span>
                  <span>{currentTier.team}</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 font-mono">Invariants: </span>
                  <span>Full IP assignment, TypeScript AST linting, &lt;50ms UI response guarantee.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => onScheduleWithScope(getScopeSummary())}
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Book Feasibility Review With This Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleExportScope}
                className="w-full py-2.5 px-4 text-xs font-medium text-neutral-300 bg-neutral-950 border border-neutral-800 rounded-md hover:border-neutral-700 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-neutral-400" />
                <span>{downloadSuccess ? 'Specification Exported!' : 'Export Specification (.txt)'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
