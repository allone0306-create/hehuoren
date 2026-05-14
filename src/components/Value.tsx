import { useReveal } from '../hooks/useReveal';

const valueCards = [
  {
    icon: '📈',
    title: '财务回报',
    items: [
      { label: '营业额增长', value: '58-87%' },
      { label: '年增收', value: '100-300万' },
      { label: '投资回报周期', value: '12-18个月' },
      { label: '成本控制', value: '预算70%' },
    ],
  },
  {
    icon: '⭐',
    title: '品牌提升',
    items: [
      { label: 'OTA评分提升', value: '0.8-1.2分' },
      { label: '复购率提升', value: '45-68%' },
      { label: '差异化竞争力', value: '显著增强' },
      { label: '会员忠诚度', value: '大幅提升' },
    ],
  },
  {
    icon: '♻️',
    title: '可持续增长',
    items: [
      { label: '长期陪跑支持', value: '18-24月+' },
      { label: '月度内容更新', value: '持续' },
      { label: '季度数据分析', value: '持续' },
      { label: '持续优化迭代', value: '持续' },
    ],
  },
  {
    icon: '🛡️',
    title: '风险降低',
    items: [
      { label: '前期诊断投入', value: '✓' },
      { label: '专业团队保障', value: '✓' },
      { label: '利益完全绑定', value: '✓' },
      { label: '项目经验', value: '100+' },
    ],
  },
];

const summaryStats = [
  { label: 'ROI', value: '3-5年' },
  { label: '评分', value: '4.8+' },
  { label: '合作', value: '24月+' },
  { label: '成功率', value: '90%+' },
];

export default function Value() {
  const { ref, visible } = useReveal();

  return (
    <section id="value" className="section-pad bg-cream"
      style={{ backgroundImage: 'url(/images/landscape.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0" style={{ position: 'relative' }}>
        <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="text-center mb-16">
            <span className="text-gold text-xs tracking-[.4em] uppercase">Cooperation Value</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mt-4 mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
              为什么选择达成文化
            </h2>
            <p className="text-stone text-base font-light max-w-xl mx-auto">
              选择我们，不仅是选择一个设计公司，而是选择一个长期的增长伙伴
            </p>
          </div>

          {/* Value cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {valueCards.map((card, i) => (
              <div key={i} className="glass rounded-3xl p-8 hover-glow">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{card.icon}</span>
                  <h3 className="text-charcoal text-xl" style={{ fontFamily: 'var(--font-serif)' }}>{card.title}</h3>
                </div>
                <div className="space-y-3">
                  {card.items.map((item, j) => (
                    <div key={j} className="flex items-center justify-between py-2 border-b border-cream-dark/40 last:border-none">
                      <span className="text-stone text-sm">{item.label}</span>
                      <span className="text-gold font-medium text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {summaryStats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-light text-gold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
                  <p className="text-stone text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
