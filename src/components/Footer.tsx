export default function Footer() {
  const linkMap: Record<string, string> = {
    '首页': '#hero', '行业洞察': '#insight', '品牌故事': '#brand',
    '商业模式': '#model', '解决方案': '#solution', '成功案例': '#cases',
    '合作价值': '#value', '联系我们': '#contact',
  };

  return (
    <footer className="bg-ink text-paper pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl font-light tracking-[.18em]">DAC</span>
              <div className="flex flex-col leading-none text-paper/50">
                <span className="text-[11px] tracking-[.25em]">达成文化</span>
                <span className="text-[9px] tracking-[.12em] mt-0.5">DESIGN ART CULTURE</span>
              </div>
            </div>
            <p className="text-paper/40 text-sm font-light leading-relaxed max-w-sm mb-6">
              度假酒店的文化合伙人。从差异化设计到可持续运营，帮助投资人实现酒店从"有生意"到"有生命"的蜕变。
            </p>
            <p className="text-paper/30 text-sm mb-4">
              构建多维一体的设计思维，<br/>持续探索多元的生活方式。
            </p>
            <p className="text-gold/50 text-sm tracking-[.2em]" style={{ fontFamily: 'var(--font-serif)' }}>
              达于心，成于行
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-paper/60 text-xs tracking-widest uppercase mb-5">导航</h4>
            <ul className="space-y-3">
              {Object.entries(linkMap).map(([label, href]) => (
                <li key={href}><a href={href} className="text-paper/40 text-sm hover:text-gold transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-paper/60 text-xs tracking-widest uppercase mb-5">联系我们</h4>
            <ul className="space-y-3 text-paper/40 text-sm">
              <li className="flex items-center gap-2">📞 18983998662</li>
              <li className="flex items-center gap-2">✉️ info@dacheng-culture.com</li>
              <li className="flex items-start gap-2">📍 重庆渝北区圣聪路32号 万邦国新中心 V3元创 3楼</li>
            </ul>

            <div className="mt-8 p-4 bg-paper/[.03] rounded-xl inline-block border border-paper/[.05]">
             <p className="text-paper/30 text-xs mb-2">关注公众号</p>
              <div className="w-20 h-20 bg-paper/10 rounded-lg flex items-center justify-center">
                <img src="/images/erweima.png" alt="公众号" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-paper/[.06] mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-paper/20 text-xs">
          <p>© 2026 DAC 达成文化 · 版权所有</p>
          <div className="flex items-center gap-5">
          
          
          </div>
        </div>
      </div>
    </footer>
  );
}
