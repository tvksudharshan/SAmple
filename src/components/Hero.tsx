import React, { useState } from 'react';
import { ArrowRight, Sliders, ChevronDown } from 'lucide-react';
import { HERO_IMAGE } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onScrollToEstimator }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-12 pb-20 border-b border-neutral-800/80 overflow-hidden">
      {/* Background radial gradient mesh for subtle surface presence */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-neutral-800/25 to-transparent blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Subtitle / Trust Signal */}
        <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-neutral-400 mb-6 font-medium">
          <span>Digital Systems & Product Engineering</span>
          <span aria-hidden="true">·</span>
          <span>London / San Francisco</span>
        </div>

        {/* Hero Headline & Lead in balanced layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              High-throughput interfaces for critical operational systems.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-base text-neutral-400 leading-relaxed mb-6">
              We design and engineer desktop-grade web applications, real-time telemetry consoles, and scalable digital architectures for high-consequence industries.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0"
              >
                <span>Schedule Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onScrollToEstimator}
                className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-md hover:border-neutral-700 hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Sliders className="w-3.5 h-3.5 text-neutral-400" />
                <span>Configure Scope</span>
              </button>
            </div>
          </div>
        </div>

        {/* Marquee Visual Frame */}
        <div className="relative w-full aspect-[16/9] max-h-[600px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
          {/* Zero-broken-image fallback container */}
          {(!imageLoaded || imageError) && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-neutral-500">
              <div className="text-center p-6">
                <p className="text-sm font-medium text-neutral-400">Vanguard Architecture Studio</p>
                <p className="text-xs text-neutral-600 mt-1">Industrial Systems & Digital Environments</p>
              </div>
            </div>
          )}

          {!imageError && (
            <img
              src={HERO_IMAGE}
              alt="Vanguard Architecture & Engineering Studio in London overlooking twilight city lights"
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          )}

          {/* Measured gradient scrim at the bottom edge */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Quiet overlay caption */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-300">
            <div className="flex items-center gap-2 font-mono">
              <span className="text-neutral-400">STUDIO ENVIRONMENT</span>
              <span aria-hidden="true">/</span>
              <span>LONDON DESIGN & TELEMETRY LAB</span>
            </div>
            <a 
              href="#case-studies" 
              className="flex items-center gap-1.5 text-white hover:text-neutral-300 transition-colors bg-neutral-950/60 backdrop-blur-md px-3 py-1.5 rounded border border-neutral-800 text-xs font-medium"
            >
              <span>Explore Active Deployments</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Full-Width Quantitative KPI Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-lg bg-neutral-900/40 border border-neutral-800/80">
          <div>
            <div className="text-3xl lg:text-4xl font-semibold tracking-tight text-white font-mono tabular-nums">
              $4.8B+
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Asset volume executed through client interfaces
            </div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-semibold tracking-tight text-white font-mono tabular-nums">
              &lt;14ms
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              P99 render & binary frame dispatch latency
            </div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-semibold tracking-tight text-white font-mono tabular-nums">
              38
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Shipped institutional enterprise architectures
            </div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-semibold tracking-tight text-white font-mono tabular-nums">
              99.99%
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Production runtime availability benchmark
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
