import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const steps = [
  { num: '01', title: '初步洽谈', desc: '了解项目需求与合作意向' },
  { num: '02', title: '方案设计', desc: '在地调研，输出完整方案' },
  { num: '03', title: '签署协议', desc: '确认合作模式与细节' },
  { num: '04', title: '项目启动', desc: '设计执行与陪跑运营' },
];

const supports = [
  { title: '文化顾问', desc: '在地文化研究与定位' },
  { title: '品牌设计', desc: 'VI/CI系统全案设计' },
  { title: '运营指导', desc: '年度陪跑运营服务' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', company: '', message: '' });
  const { ref, visible } = useReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的咨询！我们将在24小时内与您联系。');
    setForm({ name: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="section-pad bg-charcoal text-paper relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[.06]"
        style={{ backgroundImage: 'url(/images/jincuiyihao.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[.4em] uppercase">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-paper mt-4 mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
            开启合作之旅
          </h2>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {steps.map((s, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-paper/[.03] border border-paper/[.06]">
              <span className="text-2xl font-light text-gold/40" style={{ fontFamily: 'var(--font-serif)' }}>{s.num}</span>
              <h4 className="text-paper text-sm font-medium mt-3 mb-1">{s.title}</h4>
              <p className="text-paper/40 text-xs">{s.desc}</p>
              {i < steps.length - 1 && <span className="hidden md:inline-block text-paper/15 text-2xl absolute right-[-18px] top-1/2 -translate-y-1/2">→</span>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h3 className="text-paper text-2xl mb-8" style={{ fontFamily: 'var(--font-serif)' }}>联系方式</h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 text-lg">📞</div>
                <div>
                  <span className="text-paper/50 text-sm">电话</span>
                  <p className="text-paper text-xl mt-1" style={{ fontFamily: 'var(--font-serif)' }}>18983998662</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 text-lg">✉️</div>
                <div>
                  <span className="text-paper/50 text-sm">邮箱</span>
                  <p className="text-paper text-xl mt-1" style={{ fontFamily: 'var(--font-serif)' }}>allone0306@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 text-lg">📍</div>
                <div>
                  <span className="text-paper/50 text-sm">地址</span>
                  <p className="text-paper text-lg mt-1" style={{ fontFamily: 'var(--font-serif)' }}>重庆渝北区圣聪路32号<br />万邦国新中心 V3元创 3楼</p>
                </div>
              </div>
            </div>

            {/* Services provided */}
            <h4 className="text-paper/60 text-sm tracking-wider mb-4">我们提供的支持</h4>
            <div className="space-y-3">
              {supports.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-paper/[.03] border border-paper/[.06]">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-paper/80 text-sm">{s.title}</span>
                  <span className="text-paper/30 text-xs ml-auto">{s.desc}</span>
                </div>
              ))}
            </div>

            {/* QR */}
            <div className="mt-8 p-5 rounded-2xl bg-paper/[.03] border border-paper/[.06] inline-block">
              <p className="text-paper/40 text-xs mb-3">扫码关注公众号</p>
              <div className="w-24 h-24 bg-paper/10 rounded-xl flex items-center justify-center">
                <span className="text-paper/20 text-xs text-center">公众号<br/>二维码</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-paper/[.04] backdrop-blur-md rounded-3xl p-8 md:p-10 border border-paper/[.06]">
            <h3 className="text-paper text-xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>预约免费咨询</h3>
            <p className="text-paper/40 text-sm mb-8">提交后我们将在24小时内与您联系</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: 'name', label: '您的姓名', placeholder: '请输入姓名', required: true },
                { key: 'phone', label: '联系电话', placeholder: '请输入手机号', required: true, type: 'tel' },
                { key: 'company', label: '酒店/公司名称', placeholder: '请输入酒店或公司名称' },
              ].map((f) => (
                <div key={f.key}>
                  <label className="text-paper/50 text-sm mb-2 block">{f.label} {f.required && <span className="text-gold">*</span>}</label>
                  <input
                    type={f.type || 'text'}
                    required={f.required}
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full bg-paper/[.04] border border-paper/[.08] rounded-xl px-5 py-4 text-paper text-sm placeholder:text-paper/25 focus:outline-none focus:border-gold/40 transition-colors"
                    placeholder={f.placeholder}
                  />
                </div>
              ))}
              <div>
                <label className="text-paper/50 text-sm mb-2 block">项目简述</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-paper/[.04] border border-paper/[.08] rounded-xl px-5 py-4 text-paper text-sm placeholder:text-paper/25 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                  placeholder="请简要描述您的项目情况与合作需求..."
                />
              </div>
              <button type="submit" className="btn-gold w-full py-4 text-base">提交咨询</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
