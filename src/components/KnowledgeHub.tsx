import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  BookOpen,
  Clock,
  ArrowUpRight,
  Sparkles,
  DollarSign,
  Activity,
  ShieldCheck,
  Server,
  CreditCard,
} from 'lucide-react';
import { getMDXArticles, MDXArticle } from '../lib/cms';

const categoryConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  'Revenue Cycle Management': { icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  'Clinical Operations': { icon: Activity, color: 'text-steel-teal', bg: 'bg-steel-teal/[0.06]' },
  'Clinical Safety': { icon: ShieldCheck, color: 'text-rose-500', bg: 'bg-rose-50' },
  'Hospital Systems': { icon: Server, color: 'text-purple-600', bg: 'bg-purple-50' },
  'Medical Billing': { icon: CreditCard, color: 'text-amber-500', bg: 'bg-amber-50' },
};

const defaultConfig = { icon: BookOpen, color: 'text-slate-500', bg: 'bg-slate-50' };

export default function KnowledgeHub() {
  const [articles, setArticles] = useState<MDXArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function loadArticles() {
      try {
        setIsLoading(true);
        const fetched = await getMDXArticles();
        if (!cancelled) setArticles(fetched);
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
    <section id="knowledge" className="py-10 lg:py-20 bg-bg-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-steel-teal/[0.03] to-transparent rounded-full blur-[140px] pointer-events-none select-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-6 lg:mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-steel-teal/[0.06] border border-steel-teal/10 rounded-full mb-6">
            <Sparkles className="h-3 w-3 text-steel-teal animate-pulse" />
            <span className="font-mono text-[9px] font-bold tracking-wider text-steel-teal uppercase">Knowledge Base</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] font-extrabold tracking-[-0.03em] text-ink leading-[1.06]">
            Authoritative Insights on<br />Clinical Operating Systems
          </h2>
          <p className="font-sans text-sm sm:text-[15px] text-muted-grey mt-5 leading-relaxed font-medium max-w-[500px]">
            Verified research briefs on hospital automation, revenue leakage, and emergency triage optimizations.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100/80 animate-pulse">
                  <div className="h-9 w-9 bg-gray-50 rounded-xl mb-4" />
                  <div className="h-3.5 w-4/5 bg-gray-100 rounded-full mb-2" />
                  <div className="h-3.5 w-2/5 bg-gray-100 rounded-full mb-4" />
                  <div className="h-2.5 w-full bg-gray-50 rounded-full mb-1.5" />
                  <div className="h-2.5 w-3/4 bg-gray-50 rounded-full" />
                </div>
              ))
            : articles.length > 0
              ? articles.map((article, index) => {
                  const cfg = categoryConfig[article.category] || defaultConfig;
                  const Icon = cfg.icon;
                  return (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.1 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={`/insights/${article.slug}`}
                        className="group bg-white rounded-2xl p-5 border border-gray-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 block h-full"
                      >
                        <div className="flex items-center gap-3 mb-3.5">
                          <div className={`p-2 rounded-xl ${cfg.bg} ${cfg.color} transition-transform duration-300 group-hover:scale-110`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`font-mono text-[9px] font-bold tracking-wider uppercase ${cfg.color}`}>
                              {article.category}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-muted-grey/50 flex items-center gap-1 shrink-0">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </span>
                        </div>

                        <h3 className="font-display text-[15px] font-bold text-ink leading-snug mb-2 group-hover:text-steel-teal transition-colors duration-200 line-clamp-2 tracking-tight">
                          {article.title}
                        </h3>

                        <p className="font-sans text-[13px] text-muted-grey/70 leading-relaxed line-clamp-2 mb-4">
                          {article.summary}
                        </p>

                        <div className="flex items-center gap-1.5 text-[12px] font-semibold text-steel-teal opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                          Read article
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              : (
                <div className="col-span-full bg-white rounded-2xl p-12 border border-gray-100/80 text-center">
                  <BookOpen className="h-7 w-7 text-muted-grey/40 mx-auto mb-4" />
                  <h3 className="font-display text-base font-bold text-ink mb-1.5">No articles found</h3>
                  <p className="font-sans text-sm text-muted-grey/70">Check back soon for new research briefs.</p>
                </div>
              )}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-steel-teal hover:text-ink transition-colors"
          >
            View all insights
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
