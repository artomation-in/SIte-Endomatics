import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  BookOpen,
  Clock,
  ArrowUpRight,
  DollarSign,
  Activity,
  ShieldCheck,
  Server,
  CreditCard,
} from 'lucide-react';
import { getMDXArticles, MDXArticle } from '../lib/cms';
import { ClinicalReveal } from './motion/ClinicalMotion';

const categoryConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  'Revenue Cycle Management': { icon: DollarSign, color: 'text-clinical-mint', bg: 'bg-clinical-mint/10' },
  'Clinical Operations': { icon: Activity, color: 'text-steel-teal', bg: 'bg-surface-tonal' },
  'Clinical Safety': { icon: ShieldCheck, color: 'text-rose-600', bg: 'bg-rose-50' },
  'Hospital Systems': { icon: Server, color: 'text-purple-600', bg: 'bg-purple-50' },
  'Medical Billing': { icon: CreditCard, color: 'text-amber-600', bg: 'bg-amber-50' },
};

const defaultConfig = { icon: BookOpen, color: 'text-slate-600', bg: 'bg-slate-100' };

export default function KnowledgeHub() {
  const [articles, setArticles] = useState<MDXArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function loadArticles() {
      try {
        setIsLoading(true);
        const fetched = await getMDXArticles();
        if (!cancelled) setArticles(fetched.slice(0, 5));
      } catch (err) {
        console.error('[CMS] Error fetching MDX articles:', err);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }
    loadArticles();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="knowledge" className="py-16 sm:py-24 bg-bg-light relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[520px] h-[520px] bg-[radial-gradient(circle,rgba(38,97,156,0.05)_0%,transparent_70%)] blur-2xl pointer-events-none select-none"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <ClinicalReveal className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-[-0.03em] text-ink leading-[1.1]">
              Authoritative Insights on{' '}
              <span className="bg-gradient-to-r from-steel-teal via-[#2B7A9E] to-clinical-mint bg-clip-text text-transparent">
                Clinical Operating Systems
              </span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-medium max-w-xl">
              Research briefs on hospital automation, zero-leakage revenue cycles, and predictive triage workflows.
            </p>
          </ClinicalReveal>

          <Link
            to="/insights"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-2xs text-xs font-semibold text-ink hover:text-steel-teal hover:border-steel-teal/30 transition-all shrink-0 w-fit"
          >
            <span>All Research Briefs</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Balanced Editorial Grid (Featured 2-col Lead + Standard Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`m3-surface rounded-3xl p-6 animate-pulse ${i === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <div className="h-7 w-32 bg-slate-100 rounded-full mb-5" />
                  <div className="h-5 w-4/5 bg-slate-100 rounded-full mb-2.5" />
                  <div className="h-5 w-2/3 bg-slate-100 rounded-full mb-5" />
                  <div className="h-3 w-full bg-slate-50 rounded-full mb-2" />
                  <div className="h-3 w-3/4 bg-slate-50 rounded-full" />
                </div>
              ))
            : articles.length > 0
              ? articles.map((article, index) => {
                  const cfg = categoryConfig[article.category] || defaultConfig;
                  const Icon = cfg.icon;
                  const isFeatured = index === 0 && articles.length === 5;

                  return (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className={isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}
                    >
                      <Link
                        to={`/insights/${article.slug}`}
                        className={`group rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 ${
                          isFeatured
                            ? 'bg-gradient-to-br from-white via-white to-surface-tonal/80 border border-steel-teal/20 shadow-[0_12px_36px_rgba(38,97,156,0.08)] hover:shadow-[0_18px_44px_rgba(38,97,156,0.13)]'
                            : 'm3-surface hover:border-steel-teal/25 hover:shadow-[0_14px_34px_rgba(38,97,156,0.08)]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-3 mb-5">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold ${cfg.bg} ${cfg.color}`}
                            >
                              <Icon className="h-3.5 w-3.5" />
                              <span>{article.category}</span>
                            </span>
                            <span className="font-mono text-[11px] text-muted-grey flex items-center gap-1 shrink-0">
                              <Clock className="h-3 w-3" />
                              {article.readTime}
                            </span>
                          </div>

                          <h3
                            className={`font-display font-bold text-ink leading-snug mb-2.5 group-hover:text-steel-teal transition-colors tracking-tight ${
                              isFeatured ? 'text-xl sm:text-2xl' : 'text-base sm:text-[17px] line-clamp-2'
                            }`}
                          >
                            {article.title}
                          </h3>

                          <p
                            className={`font-sans text-slate-600 leading-relaxed mb-6 ${
                              isFeatured ? 'text-sm sm:text-[15px] max-w-2xl line-clamp-3' : 'text-[13px] line-clamp-2'
                            }`}
                          >
                            {article.summary}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-steel-teal">
                            <span>Read research brief</span>
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                          {isFeatured && (
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-clinical-mint bg-clinical-mint/10 px-2.5 py-0.5 rounded-full">
                              Featured Brief
                            </span>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              : (
                <div className="col-span-full m3-surface rounded-3xl p-12 text-center">
                  <BookOpen className="h-7 w-7 text-muted-grey/40 mx-auto mb-4" />
                  <h3 className="font-display text-base font-bold text-ink mb-1.5">No articles found</h3>
                  <p className="font-sans text-sm text-muted-grey">Check back soon for new research briefs.</p>
                </div>
              )}
        </div>
      </div>
    </section>
  );
}
