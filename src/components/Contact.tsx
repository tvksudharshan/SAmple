import React, { useState } from 'react';
import { Send, CheckCircle2, Shield } from 'lucide-react';

export const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a valid corporate email');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Direct Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6 [text-wrap:balance]">
              Have a critical architecture ready for review?
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              We maintain a focused engagement roster of 3 concurrent client partners to ensure relentless executive focus and engineering velocity.
            </p>

            <div className="space-y-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>Encrypted transmission & bilateral NDA available upon request.</span>
              </div>
              <div className="pt-4 border-t border-neutral-800 flex flex-col gap-1.5">
                <span className="text-neutral-500 uppercase tracking-wider">Direct Studio Channel</span>
                <a
                  href="mailto:inquiries@vanguardstudio.internal"
                  className="text-white hover:underline text-sm font-sans"
                >
                  inquiries@vanguardstudio.internal
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Fast Capture Form */}
          <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800 rounded-xl p-8">
            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-10 h-10 text-white mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Inquiry Received
                </h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed mb-6">
                  Thank you. A principal systems architect has been notified and will review your parameters within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setEmail('');
                    setProjectBrief('');
                  }}
                  className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white border border-neutral-700 rounded bg-neutral-950"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Your Corporate Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="architect@yourcompany.com"
                    className={`w-full px-4 py-2.5 rounded-md bg-neutral-950 border text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors ${
                      error ? 'border-red-500' : 'border-neutral-800'
                    }`}
                  />
                  {error && <p className="text-[11px] text-red-400 mt-1">{error}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Brief Overview of System Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="Outline your stack, timeline, or primary performance bottleneck..."
                    className="w-full px-4 py-2.5 rounded-md bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">
                    No unsolicited marketing. Confidentiality maintained.
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
                  >
                    <span>Send Initial Note</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
