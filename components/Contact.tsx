'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setSent(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE500] border-l-4 border-b-4 border-[#0A0A0A]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-0.5 bg-[#0A0A0A]" />
          <span className="font-mono text-[#0A0A0A]/50 text-sm uppercase tracking-widest">04 / Contact</span>
        </div>

        <div className="mb-12">
          <h2 className="font-display font-black text-4xl sm:text-5xl leading-tight">
            LET'S
            <span className="block bg-[#7B2FFF] text-white px-3 py-1 inline-block shadow-[4px_4px_0_#0A0A0A] -rotate-1">CONNECT</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div>
            <p className="font-body text-lg text-[#0A0A0A]/70 mb-8 leading-relaxed">
              Tertarik berkolaborasi atau punya project menarik? Saya selalu terbuka untuk diskusi dan peluang baru. Mari bicara!
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: 'Email', value: 'ibnusaid500@gmail.com', color: '#FF3CAC' },
                { icon: Phone, label: 'WhatsApp', value: '+62 877 7634 7658', color: '#AAFF00' },
                { icon: MapPin, label: 'Location', value: 'Indonesia 🇮🇩', color: '#00E5FF' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 border-2 border-[#0A0A0A] bg-white shadow-[3px_3px_0_#0A0A0A] hover:shadow-[5px_5px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center border-2 border-[#0A0A0A]"
                    style={{ background: color }}
                  >
                    <Icon size={18} className="text-[#0A0A0A]" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#0A0A0A]/50 uppercase">{label}</p>
                    <p className="font-display font-bold text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
<div>
  <p className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/50 mb-4">Follow Me</p>
  <div className="flex gap-3">
    {[
      { 
        icon: Github, 
        color: '#0A0A0A', 
        bg: '#F5F0E8', 
        label: 'GitHub', 
        href: 'https://github.com/ibnusaid13' // <-- Ganti dengan link GitHub Anda
      },
      { 
        icon: Linkedin, 
        color: '#0A77B5', 
        bg: '#EBF4FC', 
        label: 'LinkedIn', 
        href: 'https://linkedin.com/in/ibnu-said' // <-- Ganti dengan link LinkedIn Anda
      },
      { 
        icon: Instagram, 
        color: '#E1306C', 
        bg: '#FDE8EF', 
        label: 'Instagram', 
        href: 'https://instagram.com/skynuu_' // <-- Ganti dengan link Instagram Anda
      },
      { 
        icon: Mail, 
        color: '#FF6B00', 
        bg: '#FFF0E5', 
        label: 'Email', 
        href: 'mailto:ibnusaid500@gmail.com' // <-- Ganti dengan alamat email Anda
      },
    ].map(({ icon: Icon, color, bg, label, href }) => (
      <a
        key={label}
        href={href}
        target={label === 'Email' ? '_self' : '_blank'}
        rel={label === 'Email' ? '' : 'noopener noreferrer'}
        className="w-12 h-12 border-2 border-[#0A0A0A] flex items-center justify-center shadow-[2px_2px_0_#0A0A0A] hover:shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
        style={{ background: bg }}
        aria-label={label}
      >
        <Icon size={18} style={{ color }} />
      </a>
    ))}
  </div>
</div>

            {/* Availability badge */}
            <div className="mt-10 inline-flex items-center gap-3 bg-[#AAFF00] border-2 border-[#0A0A0A] px-5 py-3 shadow-[4px_4px_0_#0A0A0A]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0A0A0A] animate-pulse" />
              <span className="font-display font-black text-sm uppercase tracking-wider">Open to Work</span>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center p-12 border-2 border-[#AAFF00] bg-white shadow-[8px_8px_0_#AAFF00] text-center">
                <CheckCircle size={64} className="text-[#AAFF00] mb-4" />
                <h3 className="font-display font-black text-2xl mb-2">Pesan Terkirim!</h3>
                <p className="font-body text-[#0A0A0A]/60">Terima kasih! Saya akan segera membalas pesanmu.</p>
                <button
                  className="mt-6 neo-btn px-6 py-3 bg-[#0A0A0A] text-[#FFE500] font-display font-black text-sm uppercase"
                  onClick={() => setSent(false)}
                >
                  Kirim Lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'name', label: 'Nama Lengkap', placeholder: 'John Doe', type: 'text' },
                    { name: 'email', label: 'Email', placeholder: 'john@email.com', type: 'email' },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="font-mono text-xs uppercase tracking-wider text-[#0A0A0A]/50 block mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-[#0A0A0A] bg-white font-body text-sm outline-none focus:shadow-[3px_3px_0_#7B2FFF] focus:border-[#7B2FFF] transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-[#0A0A0A]/50 block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Kolaborasi Project / Freelance / Lainnya"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#0A0A0A] bg-white font-body text-sm outline-none focus:shadow-[3px_3px_0_#7B2FFF] focus:border-[#7B2FFF] transition-all"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-[#0A0A0A]/50 block mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    placeholder="Ceritakan project atau idemu..."
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#0A0A0A] bg-white font-body text-sm outline-none focus:shadow-[3px_3px_0_#7B2FFF] focus:border-[#7B2FFF] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full neo-btn px-8 py-4 bg-[#0A0A0A] text-[#FFE500] font-display font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#FFE500] border-t-transparent rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
