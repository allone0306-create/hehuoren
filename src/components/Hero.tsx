export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundImage: 'url(/images/keting.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-ink/60 via-ink/50 to-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="anim-up d1 inline-flex items-center gap-2 px-5 py-2 border border-paper/15 rounded-full mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-paper/60 text-xs tracking-[.35em] uppercase">度假酒店的文化合伙人</span>
        </div>

        {/* Logo */}
        <h1 className="anim-up d2 text-paper text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-[.2em] mb-4"
          style={{ fontFamily: 'var(--font-sans)' }}>
          DAC
        </h1>
        <p className="anim-up d3 text-paper/60 text-sm md:text-base tracking-[.25em] mb-8"
          style={{ fontFamily: 'var(--font-serif)' }}>
          达成文化 · DESIGN ART CULTURE
        </p>

        {/* Divider */}
        <div className="anim-up d3 flex items-center justify-center gap-4 mb-10">
          <div className="w-14 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-2 h-2 border border-gold/50 rotate-45" />
          <div className="w-14 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Core proposition */}
        <h2 className="anim-up d4 text-paper/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-4"
          style={{ fontFamily: 'var(--font-serif)' }}>
          从差异化设计到可持续运营
        </h2>
        <p className="anim-up d4 text-paper/50 text-base md:text-lg font-light max-w-2xl mx-auto mb-6">
          帮助投资人实现酒店从<span className="text-gold">"有生意"</span>到<span className="text-gold">"有生命"</span>的蜕变
        </p>

        <p className="anim-up d5 text-paper/40 text-sm tracking-wider max-w-xl mx-auto mb-6">
          构建多维一体的设计思维，持续探索多元的生活方式
        </p>

        <p className="anim-up d5 text-gold/70 text-base md:text-lg tracking-[.25em] mb-12"
          style={{ fontFamily: 'var(--font-serif)' }}>
          达于心，成于行
        </p>

        {/* CTAs */}
        <div className="anim-up d6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-gold">预约免费咨询</a>
          <a href="#brand" className="btn-outline-light">了解我们</a>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-up d7">
        <span className="text-paper/25 text-[10px] tracking-[.3em]">SCROLL</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
