import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import { Calendar, Clock, FileText, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { LOCAL_MDX_ARTICLES, getArticleBySlug, MDXArticle } from '../lib/cms';
import { Seo } from '../lib/seo';

interface ArticlePageProps {
  onOpenDemo: () => void;
}

const articleJsonLd = (article: MDXArticle) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `https://endomatics.com/insights/${article.slug}#breadcrumb`,
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
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': article.title,
          'item': `https://endomatics.com/insights/${article.slug}`
        }
      ]
    },
    {
      '@type': 'TechArticle',
      '@id': `https://endomatics.com/insights/${article.slug}#article`,
      'headline': article.title,
      'description': article.summary,
      'image': article.image || 'https://endomatics.com/og-image.svg',
      'datePublished': article.publishedAt,
      'dateModified': '2026-10-17',
      'articleSection': article.category,
      'inLanguage': 'en',
      'author': {
        '@type': 'Organization',
        'name': 'ENDOMATICS Clinical Systems Group',
        'url': 'https://endomatics.com'
      },
      'publisher': {
        '@type': 'MedicalOrganization',
        'name': 'ENDOMATICS Inc.',
        'url': 'https://endomatics.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://endomatics.com/og-image.svg'
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `https://endomatics.com/insights/${article.slug}`
      },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', '.max-w-3xl p']
      }
    }
  ]
});

export default function ArticlePage({ onOpenDemo }: ArticlePageProps) {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<MDXArticle | undefined>(() =>
    LOCAL_MDX_ARTICLES.find((a) => a.slug === slug),
  );

  useEffect(() => {
    let cancelled = false;
    getArticleBySlug(slug!).then((fetched) => {
      if (!cancelled && fetched) setArticle(fetched);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const related = LOCAL_MDX_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="min-h-screen bg-bg-light relative pt-24 pb-12">
      <Seo
        title={`${article.title} | ENDOMATICS`}
        description={article.summary}
        path={`/insights/${article.slug}`}
        jsonLd={articleJsonLd(article)}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-grey font-semibold">
          <Link to="/" className="hover:text-steel-teal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/insights" className="hover:text-steel-teal transition-colors">Insights</Link>
          <span>/</span>
          <span className="text-ink truncate max-w-[220px]">{article.category}</span>
        </nav>

        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-steel-teal/[0.06] text-steel-teal border border-steel-teal/10">
            <Sparkles className="h-3.5 w-3.5" />
            {article.category}
          </span>
          <span className="font-mono text-[11px] text-muted-grey/70 flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            {article.publishedAt}
          </span>
          <span className="font-mono text-[11px] text-muted-grey/70 flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            {article.readTime}
          </span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-ink leading-[1.12] mb-8">
          {article.title}
        </h1>

        <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent mb-8" />

        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl mb-8 border border-gray-100"
            loading="lazy"
          />
        )}

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
              [&>table]:w-full [&>table]:text-[13px] [&>table]:mb-6 [&>table]:border-collapse
              [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:border-gray-100 [&>table>tbody>tr>td]:px-3 [&>table>tbody>tr>td]:py-2
              [&>table>tbody>tr>th]:border [&>table>tbody>tr>th]:border-gray-100 [&>table>tbody>tr>th]:px-3 [&>table>tbody>tr>th]:py-2 [&>table>tbody>tr>th]:text-left [&>table>tbody>tr>th]:bg-bg-light
              [&>img]:rounded-xl [&>img]:my-8"
          >
            <Markdown>{article.content}</Markdown>
          </div>
        </div>

        <div className="h-px bg-gray-100 mt-12 mb-6" />
        <div className="flex items-center justify-between pb-4">
          <span className="font-mono text-[10px] text-muted-grey/40 flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5 text-steel-teal/50" />
            Verified Citation Authority
          </span>
          <Link to="/insights" className="text-[13px] text-steel-teal font-semibold hover:text-ink transition-colors flex items-center gap-1.5">
            All insights
            <ArrowLeft className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 rounded-2xl bg-steel-teal text-white p-8 relative overflow-hidden">
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-pulse-teal/10 blur-3xl pointer-events-none" />
          <h2 className="font-display text-2xl font-bold mb-2">See this in your hospital</h2>
          <p className="text-sm text-pulse-teal/90 max-w-lg mb-6 leading-relaxed">
            Get a live sandbox deployed with your clinical metrics in under 4 hours. No credit card required.
          </p>
          <button
            onClick={onOpenDemo}
            className="bg-white hover:bg-ink hover:text-white text-steel-teal font-sans text-[13px] font-bold py-3 px-6 rounded-lg transition-all cursor-pointer inline-flex items-center gap-2"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-lg font-bold text-ink mb-4">Related Insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/insights/${r.slug}`}
                  className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="font-mono text-[9px] uppercase tracking-wider text-steel-teal font-bold">{r.category}</span>
                  <h3 className="font-display text-[14px] font-bold text-ink leading-snug mt-2 line-clamp-2">{r.title}</h3>
                  <p className="font-sans text-xs text-muted-grey mt-1.5 line-clamp-2">{r.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
