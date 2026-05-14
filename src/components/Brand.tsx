// src/components/Brand.tsx
import { useReveal } from '../hooks/useReveal'; // 如果你有这个hook就保留，没有就删掉这行

const results = [
  { value: '30-50%', label: '服务项目营业额平均增长' },
  { value: '80%+', label: '客户续约率' },
  { value: '100+', label: '精品酒店项目经验' },
  { value: '24月+', label: '平均合作周期' },
];

const pillars = [
  { icon: '◎', title: '在地文化优先', desc: '每一个项目从当地文化土壤中生长，拒绝复制粘贴式设计' },
  { icon: '◇', title: '利益完全绑定', desc: '七折进场+营业额提成，只有酒店赚钱我们才赚钱' },
  { icon: '◆', title: '长期陪跑在场', desc: '不是交付即走，而是18-24个月持续运营支持' },
];

const team = [
  {
    name: '未山',
    role: 'CEO / 高级美术师',
    desc: '品牌战略与项目统筹',
    image: '/images/weishan.png',
  },
  {
    name: '蒲锐',
    role: '艺术总监 / 综合材料艺术家',
    desc: '空间艺术与在地创作',
    image: '/images/purui.png',
  },
  {
    name: '易东',
    role: '美学专家 / 川美教授',
    desc: '学术研究与美学指导',
    image: '/images/yidong.png',
  },
  {
    name: '伍俊熹',
    role: 'Jason Ng / 川美讲师',
    desc: '设计创新与教学实践',
    image: '/images/laowu.png',
  },
];

export default function Brand() {
  const { ref, visible } = useReveal();

  return (
    <section id="brand" className="section-pad bg-paper">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs tracking-[.4em] uppercase">Brand Story</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mt-4 mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
            为什么是达成文化？
          </h2>
          <p className="text-stone text-base md:text-lg font-light max-w-2xl mx-auto">
            我们不是传统设计公司，而是以文化为核心、以增长为目标的酒店运营合伙人
          </p>
        </div>

        {/* Mission + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-charcoal mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              品牌使命
            </h3>
            <p className="text-stone text-base font-light leading-relaxed mb-8">
              让每一家酒店都有属于自己的文化故事，帮助投资人从"建造者"升级为"文化创造者"。
              自2010年成立以来，达成文化始终坚持以在地文化为灵魂，以空间设计为载体，以长期运营为承诺。
            </p>

            {/* Three pillars */}
            <div className="space-y-4">
              {pillars.map((p, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-cream hover:bg-cream-dark/50 transition-colors">
                  <span className="text-gold text-xl mt-0.5">{p.icon}</span>
                  <div>
                    <h4 className="text-charcoal text-sm font-medium mb-1">{p.title}</h4>
                    <p className="text-stone text-sm font-light">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img src="/images/shinei.png" alt="达成文化" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-charcoal text-paper p-6 rounded-2xl shadow-2xl max-w-[280px]">
              <p className="text-gold/80 text-lg tracking-[.15em] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                达于心，成于行
              </p>
              <p className="text-paper/50 text-xs font-light leading-relaxed">
                构建多维一体的设计思维，持续探索多元的生活方式
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-charcoal rounded-3xl p-8 md:p-14 mb-20">
          <h3 className="text-paper text-xl text-center mb-10" style={{ fontFamily: 'var(--font-serif)' }}>可量化的增长</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((r, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-light text-gold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{r.value}</div>
                <p className="text-paper/50 text-sm">{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div>
          <h3 className="text-2xl font-light text-charcoal text-center mb-12" style={{ fontFamily: 'var(--font-serif)' }}>核心团队</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-cream hover:bg-charcoal group transition-all duration-500 hover-up">
                <div className="w-20 h-20 rounded-full bg-cream-dark group-hover:bg-gold/20 mx-auto mb-5 flex items-center justify-center transition-colors">
                  <span className="text-2xl text-stone group-hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                    {t.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-charcoal group-hover:text-paper text-lg mb-1 transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>{t.name}</h4>
                <p className="text-gold text-xs tracking-wider mb-2">{t.role}</p>
                <p className="text-stone group-hover:text-paper/50 text-sm font-light transition-colors">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
}
