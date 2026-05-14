import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const cases = [
  {
    name: '西安 JW 万豪',
    location: '陕西·西安',
    type: '星级酒店',
    image: '/images/hotel-exterior.png',
    tagline: '千年古都的现代奢华',
    desc: '深度融入十三朝古都的历史底蕴，将大唐盛世的文化符号以当代设计语言重新诠释，打造兼具东方韵味与国际品质的奢华体验。',
  },
  {
    name: '自贡国投豪生大酒店',
    location: '四川·自贡',
    type: '城市度假',
    tagline: '邂逅千年盐都，尽享灯城盛宴',
    image: '/images/zigonghaosheng.png',
    desc: '以自贡千年盐业文化与彩灯非遗为灵魂，将在地文化基因融入酒店空间与体验产品，打造具有强烈地域辨识度的文化酒店标杆。',
  },
  {
    name: '重庆美利亚酒店',
    location: '重庆·两江新区',
    type: '国际度假',
    tagline: '东方遇见西班牙',
    image: '/images/dining.png',
    desc: '以"东方遇见西班牙"为文化主题，结合在地山水与地中海生活美学，打造融合式度假体验，开发特色SPA疗愈与户外探索项目。',
  },
  {
    name: '良瑜国际度假酒店',
    location: '重庆',
    type: '度假酒店',
    tagline: '自然与艺术的对话',
    image: '/images/liangyu.png',
    desc: '以山水自然为底色，以当代艺术为笔触，构建沉浸式度假体验空间。深入挖掘在地文化资源，打造一系列独特的文化体验产品。',
  },
  {
    name: '重庆金陵大饭店',
    location: '重庆',
    type: '城市酒店',
    tagline: '经典焕新，文化重生',
    image: '/images/art-space.png',
    desc: '为经典酒店注入新的文化活力，以巴渝码头文化为切入，结合现代设计语言，实现存量酒店的文化升级与品牌焕新。',
  },
];

export default function Cases() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal();
  const c = cases[active];

  return (
    <section id="cases" className="section-pad bg-paper">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[.4em] uppercase">Success Cases</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mt-4 mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
            成功案例展示
          </h2>
          <p className="text-stone text-base font-light max-w-xl mx-auto">
            定制化服务，卓越成果
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cases.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 ${
                active === i ? 'bg-charcoal text-paper' : 'bg-cream text-stone hover:bg-charcoal hover:text-paper'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Active case */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <img src={c.image} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-gold text-sm tracking-wider mb-2">{c.tagline}</p>
              <h3 className="text-paper text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>{c.name}</h3>
              <p className="text-paper/50 text-sm mt-1">{c.location} · {c.type}</p>
            </div>
          </div>

          <div>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-gold/10 to-transparent border-l-4 border-gold mb-8">
              <p className="text-charcoal text-lg" style={{ fontFamily: 'var(--font-serif)' }}>{c.tagline}</p>
            </div>
            <p className="text-stone text-base font-light leading-relaxed mb-8">{c.desc}</p>
            <a href="#contact" className="btn-gold">咨询类似项目</a>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {cases.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${active === i ? 'bg-gold w-8' : 'bg-cream-dark w-2'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
