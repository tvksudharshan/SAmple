import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialScope?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialScope = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    scopeNotes: '',
    timeline: 'Within 4-8 weeks',
    ndaRequired: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    if (initialScope) {
      setFormData((prev) => ({
        ...prev,
        scopeNotes: prev.scopeNotes ? `${prev.scopeNotes}\n\n${initialScope}` : initialScope
      }));
    }
  }, [initialScope]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.organization.trim()) errs.organization = 'Organization or fund name is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate deterministic network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setConfirmationCode('VAN-' + Math.floor(100000 + Math.random() * 900000));
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      scopeNotes: '',
      timeline: 'Within 4-8 weeks',
      ndaRequired: false
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-xl p-6 sm:p-8 shadow-2xl text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors rounded-md border border-neutral-800 hover:border-neutral-700 bg-neutral-950"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6 pr-8">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Direct Engagement Request
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Schedule Architecture Briefing
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Direct consultation with our Principal Engineering team. Guaranteed response within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Katherine Hayes"
                    className={`w-full px-3.5 py-2.5 rounded-md bg-neutral-950 border text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors ${
                      errors.name ? 'border-red-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="khayes@enterprise.com"
                    className={`w-full px-3.5 py-2.5 rounded-md bg-neutral-950 border text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors ${
                      errors.email ? 'border-red-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Organization / Fund *
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Citadel or Series B Startup"
                    className={`w-full px-3.5 py-2.5 rounded-md bg-neutral-950 border text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors ${
                      errors.organization ? 'border-red-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.organization && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.organization}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Target Start Window
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Immediate (Next 2 weeks)">Immediate (Next 2 weeks)</option>
                    <option value="Within 4-8 weeks">Within 4-8 weeks</option>
                    <option value="Next Quarter">Next Quarter</option>
                    <option value="Exploratory Architecture Review">Exploratory Architecture Review</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  Architecture Overview / Scope Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.scopeNotes}
                  onChange={(e) => setFormData({ ...formData, scopeNotes: e.target.value })}
                  placeholder="Describe your system parameters, data throughput, or architectural hurdles..."
                  className="w-full px-3.5 py-2.5 rounded-md bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  id="nda"
                  type="checkbox"
                  checked={formData.ndaRequired}
                  onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                  className="w-4 h-4 rounded bg-neutral-950 border-neutral-700 text-white focus:ring-0"
                >
                </input>
                <label htmlFor="nda" className="text-xs text-neutral-400 cursor-pointer select-none">
                  Request mutual non-disclosure agreement prior to technical disclosure
                </label>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2 disabled:opacity-50 whitespace-nowrap shrink-0 shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Validating...</span>
                  ) : (
                    <>
                      <span>Transmit Briefing Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="w-12 h-12 rounded-full bg-neutral-800 text-white flex items-center justify-center mx-auto mb-4 border border-neutral-700">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
              Dispatch Confirmed
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Architecture Briefing Scheduled
            </h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed mb-6">
              Our Lead Systems Architect will review your parameters and follow up with a technical feasibility assessment within 24 hours.
            </p>

            <div className="inline-block px-4 py-2 rounded-lg bg-neutral-950 border border-neutral-800 font-mono text-xs text-neutral-300 mb-8">
              REFERENCE ID: <span className="text-white font-semibold">{confirmationCode}</span>
            </div>

            <div>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
              >
                <span>Return to Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
