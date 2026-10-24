import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="evidence" className="py-24 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Verifiable Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white [text-wrap:balance]">
            Endorsed by engineering leadership at high-growth and institutional firms.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between p-7 rounded-xl bg-neutral-900/40 border border-neutral-800"
            >
              <div>
                {/* Metric callout */}
                <div className="mb-6 pb-6 border-b border-neutral-800">
                  <div className="text-3xl font-bold font-mono text-white tabular-nums">
                    {t.metric}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">
                    {t.metricContext}
                  </div>
                </div>

                <Quote className="w-5 h-5 text-neutral-600 mb-4" />
                <blockquote className="text-sm text-neutral-300 leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <div className="text-sm font-semibold text-white">
                  {t.author}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  {t.role}
                </div>
                <div className="text-xs font-mono text-neutral-500 mt-1">
                  {t.organization}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
