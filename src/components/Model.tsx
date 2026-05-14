import { useReveal } from '../hooks/useReveal';

const compare = [
  { dim: '收费模式', old: '全额预付设计费', dac: '七折进场 + 营业额提成' },
  { dim: '合作周期', old: '3-6个月', dac: '18-24个月+' },
  { dim: '利益关系', old: '甲乙方', dac: '利益共同体' },
  { dim: '开业后支持', old: '无 / 有偿维护', dac: '长期陪跑 + 持续迭代' },
  { dim: '成功指标', old: '交付验收', dac: '营业额增长' },
  { dim: '文化深度', old: '表面装饰', dac: '在地文化深度研究' },
];

const innovations = [
  {
    tag: '财务创新',
    title: '七折进场 + 营业额提成',
    desc: '设计费七折支付，剩余30%从开业后营业额中长期提取。利益完全一致，只有酒店赚钱，我们才赚钱。',
    icon: '💎',
  },
  {
    tag: '服务创新',
    title: '研究 + 设计 + 陪跑',
    desc: '在地文化研究先于设计启动，完整设计覆盖空间、视觉、内容全维度，长期陪跑包括季度稽查、月度内容、白皮书更新。',
    icon: '🎯',
  },
  {
    tag: '风险管理',
    title: '严格的项目筛选机制',
    desc: '前期诊断投入确保项目可行性，专业评估体系降低合作风险，长期陪跑模式持续优化运营。',
    icon: '🛡️',
  },
];

export default function Model() {
  const { ref, visible } = useReveal();

  return (
    <section id="model" className="section-pad bg-cream">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="text-center mb-20">
          <span className="text-gold text-xs tracking-[.4em] uppercase">Business Model</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mt-4 mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
            陪跑合伙人模式
          </h2>
          <p className="text-stone text-base md:text-lg font-light max-w-2xl mx-auto">
            不是一次性交付，而是与您共同成长的长期合伙关系
          </p>
        </div>

        {/* Innovations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {innovations.map((inn, i) => (
            <div key={i} className="p-8 rounded-3xl bg-paper border border-cream-dark/50 hover:border-gold/30 hover:shadow-xl transition-all duration-500 hover-up">
              <span className="text-3xl">{inn.icon}</span>
              <span className="block text-gold text-xs tracking-widest mt-5 mb-2">{inn.tag}</span>
              <h3 className="text-charcoal text-lg font-medium mb-3">{inn.title}</h3>
              <p className="text-stone text-sm font-light leading-relaxed">{inn.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-charcoal rounded-3xl p-8 md:p-12 overflow-x-auto">
          <h3 className="text-paper text-xl text-center mb-10" style={{ fontFamily: 'var(--font-serif)' }}>
            模式对比
          </h3>
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr>
                <th className="text-left py-4 text-paper/40 font-normal text-xs tracking-wider w-1/4">对比维度</th>
                <th className="text-center py-4 text-paper/40 font-normal text-xs tracking-wider w-1/3">传统设计公司</th>
                <th className="text-center py-4 text-gold font-normal text-xs tracking-wider w-1/3">DAC 达成文化</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((r, i) => (
                <tr key={i} className="border-t border-paper/[.06]">
                  <td className="py-4 text-paper/70">{r.dim}</td>
                  <td className="py-4 text-center text-paper/35">{r.old}</td>
                  <td className="py-4 text-center text-gold font-medium">{r.dac}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
