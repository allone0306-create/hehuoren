import { useReveal } from '../hooks/useReveal';

const phases = [
  {
    num: '01',
    title: '在地文化研究',
    duration: '2-3 周',
    desc: '深入调研项目所在地的历史、人文、特产、故事，为设计注入灵魂',
    outputs: ['《在地文化白皮书》', '差异化定位', '品牌故事', '内容框架'],
    color: 'from-gold/15 to-gold/5',
  },
  {
    num: '02',
    title: '完整设计服务',
    duration: '8-12 周',
    desc: '基于文化研究的空间规划、视觉系统、内容体系全维度设计',
    outputs: ['施工图纸', '视觉手册', '内容库', '品牌识别系统'],
    color: 'from-teal/10 to-teal/5',
  },
  {
    num: '03',
    title: '长期陪跑运营',
    duration: '18-24 个月+',
    desc: '开业前施工监理和团队培训，开业后季度稽查、月度内容更新、数据分析',
    outputs: ['持续营业额增长', '品牌价值提升', '运营效率优化', '按需增值服务'],
    color: 'from-gold/10 to-transparent',
  },
];

export default function Solution() {
  const { ref, visible } = useReveal();

  return (
    <section id="solution" className="section-pad bg-ink text-paper">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="text-center mb-20">
          <span className="text-gold text-xs tracking-[.4em] uppercase">Solution</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-paper mt-4 mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
            从诊断、研究、设计到运营
          </h2>
          <p className="text-paper/50 text-base md:text-lg font-light max-w-2xl mx-auto">
            完整的增长方案，每一步都有明确的交付成果
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-8">
          {phases.map((p, i) => (
            <div key={i} className={`rounded-3xl p-8 md:p-12 bg-gradient-to-br ${p.color} border border-paper/[.06] hover-glow`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-light text-gold/50" style={{ fontFamily: 'var(--font-serif)' }}>{p.num}</span>
                    <div>
                      <h3 className="text-paper text-xl font-medium">{p.title}</h3>
                      <span className="text-gold text-xs tracking-wider">{p.duration}</span>
                    </div>
                  </div>
                  <p className="text-paper/60 text-sm font-light leading-relaxed">{p.desc}</p>
                </div>

                {/* Right - outputs */}
                <div className="lg:col-span-7">
                  <span className="text-paper/30 text-xs tracking-wider mb-4 block">交付成果</span>
                  <div className="grid grid-cols-2 gap-3">
                    {p.outputs.map((o, j) => (
                      <div key={j} className="flex items-center gap-3 p-4 rounded-xl bg-paper/[.04] border border-paper/[.06]">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span className="text-paper/70 text-sm">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {['/images/culture-experience.png', '/images/art-space.png', '/images/diningy.png', '/images/landscape.png'].map((src, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
