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
import { Seo } from '../lib/seo';

const categoryConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  'Revenue Cycle Management': { icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  'Clinical Operations': { icon: Activity, color: 'text-steel-teal', bg: 'bg-steel-teal/[0.06]' },
  'Clinical Safety': { icon: ShieldCheck, color: 'text-rose-500', bg: 'bg-rose-50' },
  'Hospital Systems': { icon: Server, color: 'text-purple-600', bg: 'bg-purple-50' },
  'Medical Billing': { icon: CreditCard, color: 'text-amber-500', bg: 'bg-amber-50' },
};

const defaultConfig = { icon: BookOpen, color: 'text-slate-500', bg: 'bg-slate-50' };

export default function InsightsIndexPage() {
  const [articles, setArticles] = useState<MDXArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getMDXArticles().then((fetched) => {
      if (!cancelled) setArticles(fetched);
      if (!cancelled) setIsLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-light relative pt-24 pb-16">
      <Seo
        title="Hospital Management System Insights & Guides | ENDOMATICS"
        description="Research briefs on hospital management system software, medical billing and coding software, revenue cycle management (RCM), clinical safety, and emergency triage optimization."
        path="/insights"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          '@id': 'https://endomatics.com/insights#breadcrumb',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://endomatics.com/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Insights',
              'item': 'https://endomatics.com/insights'
            }
          ]
        }}
      />
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-grey font-semibold">
          <Link to="/" className="hover:text-steel-teal transition-colors">Home</Link>
          <span>/</span>
          <span className="text-ink">Insights</span>
        </nav>

        <div className="max-w-2xl mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-steel-teal/[0.06] border border-steel-teal/10 rounded-full mb-6">
            <Sparkles className="h-3 w-3 text-steel-teal animate-pulse" />
            <span className="font-mono text-[9px] font-bold tracking-wider text-steel-teal uppercase">Knowledge Base</span>
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-[-0.03em] text-ink leading-[1.08]">
            Hospital Management & Billing Insights
          </h1>
          <p className="font-sans text-sm sm:text-base text-muted-grey mt-4 leading-relaxed font-medium max-w-[560px]">
            Verified research briefs on cloud-based hospital management system software, revenue cycle management, clinical safety, and emergency triage optimizations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            : articles.map((article, index) => {
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

                      <h2 className="font-display text-[15px] font-bold text-ink leading-snug mb-2 group-hover:text-steel-teal transition-colors duration-200 line-clamp-2 tracking-tight">
                        {article.title}
                      </h2>

                      <p className="font-sans text-[13px] text-muted-grey/70 leading-relaxed line-clamp-2 mb-4">
                        {article.summary}
                      </p>

                      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-steel-teal">
                        Read article
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
        </div>

        <div className="mt-12 rounded-2xl bg-steel-teal text-white p-8 relative overflow-hidden">
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-pulse-teal/10 blur-3xl pointer-events-none" />
          <h2 className="font-display text-2xl font-bold mb-2">Deploy ENDOMATICS in your hospital</h2>
          <p className="text-sm text-pulse-teal/90 max-w-lg mb-6 leading-relaxed">
            Get a live sandbox deployed with your clinical metrics in under 4 hours. No credit card required.
          </p>
          <Link
            to="/#features"
            className="inline-flex items-center gap-2 bg-white hover:bg-ink hover:text-white text-steel-teal font-sans text-[13px] font-bold py-3 px-6 rounded-lg transition-all"
          >
            Explore the platform
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
