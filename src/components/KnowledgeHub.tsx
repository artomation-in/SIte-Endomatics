import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import { 
  BookOpen, 
  ArrowLeft, 
  Clock, 
  Calendar, 
  X,
  FileText,
  ArrowUpRight,
  Sparkles,
  DollarSign,
  Activity,
  ShieldCheck,
  Server,
  CreditCard,
  ImageIcon
} from 'lucide-react';
import { getMDXArticles, MDXArticle } from '../lib/cms';

const categoryConfig: Record<string, { icon: React.ElementType; color: string; bg: string; hex: string }> = {
  'Revenue Cycle Management': { icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50', hex: '#059669' },
  'Clinical Operations': { icon: Activity, color: 'text-steel-teal', bg: 'bg-steel-teal/[0.06]', hex: '#26619C' },
  'Clinical Safety': { icon: ShieldCheck, color: 'text-rose-500', bg: 'bg-rose-50', hex: '#f43f5e' },
  'Hospital Systems': { icon: Server, color: 'text-purple-600', bg: 'bg-purple-50', hex: '#9333ea' },
  'Medical Billing': { icon: CreditCard, color: 'text-amber-500', bg: 'bg-amber-50', hex: '#f59e0b' },
};

const defaultConfig = { icon: BookOpen, color: 'text-slate-500', bg: 'bg-slate-50', hex: '#64748b' };

export default function KnowledgeHub() {
  const [articles, setArticles] = useState<MDXArticle[]>([]);
  const [activeArticle, setActiveArticle] = useState<MDXArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        setIsLoading(true);
        const fetched = await getMDXArticles();
        setArticles(fetched);
      } catch (err) {
        console.error('[CMS] Error fetching MDX articles:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadArticles();
  }, []);

  return (
    <section id="knowledge" className="py-16 lg:py-20 bg-bg-light relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      {/* Ambient flares */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-steel-teal/[0.03] to-transparent rounded-full blur-[140px] pointer-events-none select-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-500/[0.02] to-transparent rounded-full blur-[100px] pointer-events-none select-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.02 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-steel-teal/[0.06] border border-steel-teal/10 rounded-full mb-6">
              <Sparkles className="h-3 w-3 text-steel-teal animate-pulse" />
              <span className="font-mono text-[9px] font-bold tracking-wider text-steel-teal uppercase">Knowledge Base</span>
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-4xl lg:text-[52px] font-extrabold tracking-[-0.03em] text-ink leading-[1.06]"
          >
            Authoritative Insights on<br />Clinical Operating Systems
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-[15px] text-muted-grey mt-5 leading-relaxed font-medium max-w-[500px]"
          >
            Verified research briefs on hospital automation, revenue leakage, and emergency triage optimizations.
          </motion.p>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="wait">
            {activeArticle ? (
              <motion.div
                key="reader"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl mx-auto"
                itemScope
                itemType="https://schema.org/TechArticle"
              >
                {/* Back button */}
                <div className="mb-6">
                  <button 
                    onClick={() => setActiveArticle(null)}
                    className="flex items-center gap-2 text-muted-grey hover:text-ink text-[13px] font-medium transition-colors group"
                  >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to articles
                  </button>
                </div>

                {/* Hero image or abstract accent */}
                {(() => {
                  const cfg = categoryConfig[activeArticle.category] || defaultConfig;
                  
                  if (activeArticle.image) {
                    return (
                      <div className="relative mb-8 rounded-2xl overflow-hidden bg-white/50">
                        <img 
                          src={activeArticle.image} 
                          alt={activeArticle.title}
                          className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                          loading="lazy"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    );
                  }
                  
                  return (
                    <div className="relative h-24 sm:h-28 mb-8 rounded-2xl overflow-hidden bg-white/50">
                      <div 
                        className="absolute -top-12 -left-12 w-48 h-48 rounded-full blur-[60px] opacity-30" 
                        style={{ background: cfg.hex }} 
                      />
                      <div 
                        className="absolute -bottom-8 right-12 w-40 h-40 rounded-full blur-[50px] opacity-20" 
                        style={{ background: cfg.hex }} 
                      />
                      <div 
                        className="absolute top-6 right-0 w-28 h-28 rounded-full blur-[40px] opacity-15" 
                        style={{ background: cfg.hex }} 
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
                    </div>
                  );
                })()}

                {/* Category + Date + Read time */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  {(() => {
                    const cfg = categoryConfig[activeArticle.category] || defaultConfig;
                    const Icon = cfg.icon;
                    return (
                      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider ${cfg.bg} ${cfg.color}`}>
                        <Icon className="h-3.5 w-3.5" />
                        <span itemProp="articleSection">{activeArticle.category}</span>
                      </span>
                    );
                  })()}
                  <span className="text-gray-200">·</span>
                  <span className="font-mono text-[11px] text-muted-grey/60 flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    <span itemProp="datePublished">{activeArticle.publishedAt}</span>
                  </span>
                  <span className="text-gray-200">·</span>
                  <span className="font-mono text-[11px] text-muted-grey/60 flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {activeArticle.readTime}
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-[-0.025em] text-ink leading-[1.12] mb-8" itemProp="headline">
                  {activeArticle.title}
                </h1>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent mb-8" />

                {/* Article body */}
                <div className="max-w-3xl">
                  <div 
                    className="font-sans text-[15px] sm:text-[16px] text-muted-grey/85 leading-[1.85] 
                      [&>p]:mb-6 
                      [&>h2]:text-ink [&>h2]:font-display [&>h2]:font-bold [&>h2]:text-xl [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:tracking-tight
                      [&>h3]:text-ink [&>h3]:font-display [&>h3]:font-semibold [&>h3]:text-lg [&>h3]:mt-8 [&>h3]:mb-3
                      [&>ul]:mb-6 [&>ul]:pl-6 [&>ul]:list-disc [&>ul]:space-y-2
                      [&>ol]:mb-6 [&>ol]:pl-6 [&>ol]:list-decimal [&>ol]:space-y-2
                      [&>li]:text-muted-grey/85
                      [&>strong]:text-ink [&>strong]:font-semibold
                      [&>em]:text-muted-grey/70 [&>em]:italic
                      [&>code]:bg-bg-light [&>code]:text-ink [&>code]:px-2 [&>code]:py-0.5 [&>code]:rounded-md [&>code]:text-[13px] [&>code]:font-mono
                      [&>pre]:bg-gray-50 [&>pre]:border [&>pre]:border-gray-100 [&>pre]:rounded-xl [&>pre]:p-5 [&>pre]:mb-6 [&>pre]:overflow-x-auto
                      [&>pre>code]:bg-transparent [&>pre>code]:p-0 [&>pre>code]:text-[13px]
                      [&>blockquote]:border-l-2 [&>blockquote]:border-steel-teal/30 [&>blockquote]:pl-5 [&>blockquote]:py-1 [&>blockquote]:my-6 [&>blockquote]:bg-steel-teal/[0.02] [&>blockquote]:rounded-r-xl
                      [&>a]:text-steel-teal [&>a]:underline [&>a]:underline-offset-2 [&>a]:decoration-steel-teal/30 [&>a]:hover:decoration-steel-teal
                      [&>hr]:my-10 [&>hr]:border-gray-100
                      [&>img]:rounded-xl [&>img]:my-8"
                    itemProp="articleBody"
                  >
                    <Markdown>{activeArticle.content}</Markdown>
                  </div>
                </div>

                {/* Footer */}
                <div className="h-px bg-gray-100 mt-12 mb-6" />
                <div className="flex items-center justify-between pb-4">
                  <span className="font-mono text-[10px] text-muted-grey/40 flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5 text-steel-teal/50" />
                    Verified Citation Authority
                  </span>
                  <button 
                    onClick={() => setActiveArticle(null)}
                    className="text-[13px] text-steel-teal font-semibold hover:text-ink transition-colors flex items-center gap-1.5 group"
                  >
                    Close article
                    <X className="h-3.5 w-3.5 transition-transform group-hover:rotate-90" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {isLoading ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] animate-pulse">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 bg-gray-50 rounded-xl" />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-2.5 w-20 bg-gray-100 rounded-full" />
                        </div>
                      </div>
                      <div className="h-3.5 w-4/5 bg-gray-100 rounded-full mb-2" />
                      <div className="h-3.5 w-2/5 bg-gray-100 rounded-full mb-4" />
                      <div className="space-y-1.5">
                        <div className="h-2.5 w-full bg-gray-50 rounded-full" />
                        <div className="h-2.5 w-3/4 bg-gray-50 rounded-full" />
                      </div>
                    </div>
                  ))
                ) : articles.length > 0 ? (
                  articles.map((article, index) => {
                    const cfg = categoryConfig[article.category] || defaultConfig;
                    const Icon = cfg.icon;
                    return (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.1 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        onClick={() => setActiveArticle(article)}
                        className="group bg-white rounded-2xl p-5 border border-gray-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.07)] hover:-translate-y-0.5"
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
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="col-span-full bg-white rounded-2xl p-12 border border-gray-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-bg-light mb-5">
                      <BookOpen className="h-7 w-7 text-muted-grey/40" />
                    </div>
                    <h3 className="font-display text-base font-bold text-ink mb-1.5">No articles found</h3>
                    <p className="font-sans text-sm text-muted-grey/70 max-w-xs mx-auto">
                      Check back soon for new research briefs.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
