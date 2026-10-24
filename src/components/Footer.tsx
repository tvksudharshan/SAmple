import React, { useState, useEffect } from 'react';

export const Footer: React.FC = () => {
  const [times, setTimes] = useState({
    london: '',
    sanFrancisco: ''
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        london: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        sanFrancisco: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit' })
      });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-neutral-950 py-16 border-t border-neutral-900 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5">
            <a href="#" className="text-lg font-bold tracking-tight text-white mb-3 inline-block">
              Vanguard Studio
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Engineering high-throughput interfaces, low-latency telemetry pipelines, and resilient web platforms for high-consequence industries.
            </p>
            <div className="flex items-center gap-6 mt-6 text-xs font-mono text-neutral-400">
              <div>
                <span className="text-neutral-500">LONDON </span>
                <span className="text-white tabular-nums">{times.london || '--:--:--'} GMT</span>
              </div>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <div>
                <span className="text-neutral-500">SAN FRANCISCO </span>
                <span className="text-white tabular-nums">{times.sanFrancisco || '--:--:--'} PT</span>
              </div>
            </div>
          </div>

          {/* Nav Mirror */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Technical Capabilities
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies & Proof
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">
                  Scope & Budget Estimator
                </a>
              </li>
              <li>
                <a href="#evidence" className="hover:text-white transition-colors">
                  Client Evidence
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Direct Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Principles & Standards */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Architectural Invariants
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>Deterministic sub-50ms user interface response budgets</li>
              <li>Zero unverified external runtime dependencies</li>
              <li>Strict TypeScript AST enforcement and accessibility conformance</li>
              <li>Continuous performance telemetry and regression benchmarking</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright & Legal */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Vanguard Digital Systems Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer transition-colors">
              Terms of Engagement
            </span>
            <span className="hover:text-neutral-400 cursor-pointer transition-colors">
              Security Invariants
            </span>
            <span className="hover:text-neutral-400 cursor-pointer transition-colors">
              Privacy Standard
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
