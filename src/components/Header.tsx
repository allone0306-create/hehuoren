import { useState, useEffect } from 'react';

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '行业洞察', href: '#insight' },
  { label: '品牌故事', href: '#brand' },
  { label: '商业模式', href: '#model' },
  { label: '解决方案', href: '#solution' },
  { label: '成功案例', href: '#cases' },
  { label: '合作价值', href: '#value' },
  { label: '联系我们', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-paper/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <span className={`text-2xl font-light tracking-[.18em] transition-colors ${scrolled ? 'text-charcoal' : 'text-paper'}`}>DAC</span>
          <div className={`hidden sm:flex flex-col leading-none transition-colors ${scrolled ? 'text-stone' : 'text-paper/60'}`}>
            <span className="text-[10px] tracking-[.3em]">达成文化</span>
            <span className="text-[9px] tracking-[.15em] mt-0.5">DESIGN ART CULTURE</span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-7">
          {navItems.map(n => (
            <a key={n.href} href={n.href} className={`text-[13px] tracking-wider transition-colors hover:text-gold ${scrolled ? 'text-charcoal' : 'text-paper/90'}`}>{n.label}</a>
          ))}
          <a href="#contact" className="btn-gold ml-3 !py-2.5 !px-6 !text-[12px]">预约咨询</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="xl:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5">
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-paper'} ${open ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-4 h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-paper'} ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-paper'} ${open ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`xl:hidden absolute top-full left-0 right-0 bg-paper shadow-xl transition-all duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col py-4 px-6">
          {navItems.map(n => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-charcoal text-sm border-b border-cream-dark/50 hover:text-gold transition-colors">{n.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-5 text-center">预约咨询</a>
        </nav>
      </div>
    </header>
  );
}
