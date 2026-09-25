import { BookOpen, ArrowUpRight, Clock, MessageSquare } from 'lucide-react'
import FadeIn from './FadeIn'

const articles = [
  {
    tag: 'COLOR PPF GUIDE',
    readTime: '4 min read',
    title: 'PPF Color Dubai — The Ultimate Color Transformation & Protection Guide',
    excerpt:
      'Discover how colored paint protection film merges custom aesthetics with 10-mil stone-chip defense. Completely reversible to original paint with zero adhesive residue.',
    linkText: 'Inquire on WhatsApp',
    query: 'Hi StyleInCar, I read your guide on PPF Color Dubai and want more details.',
    image: '/blog-01-color-ppf.jpg',
    imageAlt: 'Porsche 911 GT3 with emerald green color PPF in luxury detailing studio',
  },
  {
    tag: 'COST & LONGEVITY',
    readTime: '5 min read',
    title: 'Ceramic Coating Cost Dubai — Package Breakdown, Layers & Realistic Lifespan',
    excerpt:
      'Understanding realistic pricing and layer composition for 9H nano-ceramic coatings in the UAE. Why proper multi-stage paint correction before coating is 80% of the result.',
    linkText: 'Inquire on WhatsApp',
    query: 'Hi StyleInCar, I read your Ceramic Coating Cost Dubai guide and want a quote.',
    image: '/blog-02-ceramic-coating.jpg',
    imageAlt: 'Hydrophobic water beading on black supercar paint with 9H ceramic coating',
  },
  {
    tag: 'STEALTH MATTE',
    readTime: '4 min read',
    title: 'Satin Black PPF Cost Dubai — Converting Gloss Paint Into Satin Stealth',
    excerpt:
      'How satin matte PPF transforms gloss factory black cars into stealth supercars while retaining high-impact rock chip protection and self-healing thermal memory.',
    linkText: 'Inquire on WhatsApp',
    query: 'Hi StyleInCar, I read your Satin Black PPF guide and want pricing for my car.',
    image: '/blog-03-satin-black.jpg',
    imageAlt: 'Satin black matte PPF wrap on Lamborghini supercar in studio',
  },
]

const BlogSection = () => {
  return (
    <section className="relative px-4 sm:px-8 md:px-14 lg:px-20 py-6 sm:py-8 md:py-10 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient red glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#E50914]/[0.025] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <FadeIn delay={0} y={20}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
              <BookOpen className="w-3.5 h-3.5 text-[#E50914]" />
              <span className="text-[#A0A0A0] text-[11px] sm:text-xs uppercase font-medium tracking-[0.25em]">
                Automotive Care Knowledge
              </span>
            </div>
            <h2
              className="font-black uppercase leading-tight tracking-tight mb-3 sm:mb-4 text-white"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 64px)' }}
            >
              From The Blog
            </h2>
            <p className="text-[#8E8E93] text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
              Expert guides, cost breakdowns, and technical advice curated by our master detailers for car owners in the UAE.
            </p>
          </FadeIn>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={0.08 * (i + 1)} y={20} className="h-full">
              <article className="group h-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gradient-to-b from-[#131315] via-[#0B0B0D] to-[#060607] border border-white/[0.08] hover:border-[#E50914]/50 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(229,9,20,0.15)] flex flex-col justify-between">
                <div>
                  {/* Card Cover Image with Overlay Badges */}
                  <div className="relative w-full h-[200px] sm:h-[210px] md:h-[190px] lg:h-[220px] overflow-hidden bg-black">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131315] via-black/20 to-transparent pointer-events-none" />

                    {/* Floating Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md border border-[#E50914]/40 text-[#E50914]">
                        {article.tag}
                      </span>
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono text-white/90 bg-black/80 backdrop-blur-md border border-white/10">
                        <Clock className="w-3 h-3 text-white/60" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-white text-base sm:text-lg font-bold uppercase tracking-tight mb-2.5 group-hover:text-white transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-[#8E8E93] text-xs sm:text-sm font-light leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <a
                      href={`https://wa.me/971558120570?text=${encodeURIComponent(article.query)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 group-hover:text-[#E50914] uppercase tracking-wider transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#E50914]" />
                      <span>{article.linkText}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#E50914] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
