import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: '+18%', label: '度假精品酒店年均增长率' },
  { value: '500亿', label: '2025年市场规模突破' },
  { value: '80/90后', label: '核心消费群体' },
];

const pains = [
  { icon: '🏗️', title: '新建酒店投资人', desc: '高设计费但效果不确定，文化定位模糊，开业后缺乏持续支持' },
  { icon: '🔄', title: '存量酒店业主', desc: '改造成本高、方向不明确，缺少差异化竞争力，复购率低迷' },
];

const chances = [
  { title: '文化IP价值凸显', desc: '能讲故事、有灵魂的酒店成为消费者首选' },
  { title: '体验消费升级', desc: '80后90后对"体验"和"文化"需求远超"功能"' },
  { title: '长期合作兴起', desc: '投资人需要增长伙伴，而非一次性设计' },
];

export default function Insight() {
  const { ref, visible } = useReveal();

  return (
    <section id="insight" className="section-pad bg-ink text-paper">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs tracking-[.4em] uppercase">Industry Insight</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-paper mt-4 mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
            度假酒店的黄金时代与挑战
          </h2>
          <p className="text-paper/50 text-base md:text-lg font-light max-w-2xl mx-auto">
            市场高速增长的同时，酒店行业正面临从"硬件竞争"到"内容竞争"的深刻转型
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-10 rounded-2xl bg-paper/[.03] border border-paper/[.06] hover-glow">
              <div className="text-5xl md:text-6xl font-light text-gold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
              <p className="text-paper/50 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Pain + Opportunity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pain */}
          <div>
            <h3 className="text-xl text-paper mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-serif)' }}>
              <span className="w-8 h-[1px] bg-gold/50" />核心痛点
            </h3>
            <div className="space-y-5">
              {pains.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-paper/[.03] border border-paper/[.06]">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{p.icon}</span>
                    <div>
                      <h4 className="text-paper text-base font-medium mb-2">{p.title}</h4>
                      <p className="text-paper/50 text-sm font-light leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunity */}
          <div>
            <h3 className="text-xl text-paper mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-serif)' }}>
              <span className="w-8 h-[1px] bg-gold/50" />市场机遇
            </h3>
            <div className="space-y-5">
              {chances.map((c, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-gold/[.08] to-transparent border border-gold/[.12]">
                  <h4 className="text-gold text-base font-medium mb-2">{c.title}</h4>
                  <p className="text-paper/50 text-sm font-light">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
