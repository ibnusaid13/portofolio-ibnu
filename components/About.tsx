'use client'

import { MapPin, Mail, Github, Linkedin, Coffee, Heart, Rocket } from 'lucide-react'
// Ikon User dihapus karena kita menggunakan gambar foto asli

const traits = [
  { icon: Coffee, label: 'Coffee Addict', color: '#FF6B00' },
  { icon: Heart, label: 'Open Source', color: '#FF3CAC' },
  { icon: Rocket, label: 'Fast Learner', color: '#7B2FFF' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background grid in dark */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,229,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,229,0,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFE500] border-r-4 border-b-4 border-[#FFE500]/30" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FF3CAC]" style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-0.5 bg-[#FFE500]" />
          <span className="font-mono text-[#FFE500] text-sm uppercase tracking-widest">01 / About</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Text */}
          <div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#F5F0E8] leading-tight mb-6">
              TENTANG
              <span className="block text-[#FFE500]">SAYA</span>
            </h2>

            <div className="space-y-4 text-[#F5F0E8]/70 font-body text-base leading-relaxed">
              <p>
                Halo! Saya adalah seorang <span className="text-[#FFE500] font-bold">Full Stack Developer & Designer</span> yang bersemangat dalam membangun produk digital yang memiliki dampak nyata.
              </p>
              <p>
                Dengan latar belakang di bidang Teknologi Informasi, saya telah menguasai berbagai teknologi — dari pengembangan web dengan HTML/CSS/JavaScript, backend dengan PHP, Python, Java, hingga pengembangan mobile dengan Flutter dan Dart.
              </p>
              <p>
                Saya juga memiliki keahlian dalam desain UI/UX menggunakan Figma, manipulasi gambar dengan Photoshop & Illustrator, dan manajemen jaringan komputer menggunakan Cisco Packet Tracer.
              </p>
            </div>

            {/* Traits */}
            <div className="flex flex-wrap gap-3 mt-8">
              {traits.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 border-2 border-[#F5F0E8]/20 px-4 py-2 bg-[#F5F0E8]/5 hover:bg-[#F5F0E8]/10 transition-all"
                >
                  <Icon size={16} style={{ color }} />
                  <span className="font-mono text-xs text-[#F5F0E8]">{label}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-8">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-12 h-12 border-2 border-[#F5F0E8]/30 flex items-center justify-center text-[#F5F0E8] hover:bg-[#FFE500] hover:border-[#FFE500] hover:text-[#0A0A0A] transition-all hover:shadow-[3px_3px_0_#FFE500]"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Info card + education */}
          <div className="space-y-6">
            {/* Profile card */}
            <div className="border-2 border-[#F5F0E8]/20 p-6 bg-[#F5F0E8]/5">
              <div className="flex items-center gap-4 mb-6">
                
                {/* --- BAGIAN FOTO PROFIL DITAMBAHKAN DI SINI --- */}
                <div className="w-20 h-20 bg-[#FFE500] border-2 border-[#FFE500] flex items-center justify-center shadow-[4px_4px_0_#FF3CAC] overflow-hidden">
                  <img 
                    src="/pp.jpeg" 
                    alt="Foto Ibnu Said" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* ---------------------------------------------- */}

                <div>
                  {/* --- NAMA DIUBAH DI SINI --- */}
                  <h3 className="font-display font-black text-xl text-[#F5F0E8]">Ibnu Said</h3>
                  <p className="font-mono text-xs text-[#FFE500]">Full Stack Developer</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: MapPin, text: 'Indonesia 🇮🇩', color: '#FF3CAC' },
                  { icon: Mail, text: 'ibnusaid500@gmail.com', color: '#00E5FF' },
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-3 text-[#F5F0E8]/70">
                    <Icon size={16} style={{ color }} />
                    <span className="font-mono text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education timeline */}
            <div className="border-2 border-[#F5F0E8]/20 p-6 bg-[#F5F0E8]/5">
              <h3 className="font-display font-bold text-[#FFE500] text-sm uppercase tracking-widest mb-4">Pendidikan</h3>
              <div className="space-y-4">
                {[
                  { year: '2024–Now', title: 'Sistem Informasi', sub: 'Universitas Pamulang', color: '#FFE500' },
                  { year: '2021–2024', title: 'MAN 1 Bogor', sub: 'IPA', color: '#AAFF00' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 border-2 border-[#FFE500] bg-[#FFE500]" />
                      {i < 1 && <div className="w-0.5 h-full bg-[#FFE500]/30 mt-1" />}
                    </div>
                    <div className="-mt-1">
                      <span className="font-mono text-xs text-[#FFE500]/60">{item.year}</span>
                      <p className="font-display font-bold text-[#F5F0E8] text-sm mt-0.5">{item.title}</p>
                      <p className="font-body text-xs text-[#F5F0E8]/50">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun fact marquee */}
            <div className="border-2 border-[#FFE500] bg-[#FFE500] py-3 overflow-hidden shadow-[4px_4px_0_#FF3CAC]">
              <div className="marquee-content font-display font-black text-sm text-[#0A0A0A] uppercase tracking-wider">
                {Array(6).fill('⚡ ALWAYS LEARNING • 🚀 BUILD FAST • 💡 THINK CREATIVE • 🎯 SHIP IT').map((text, i) => (
                  <span key={i} className="mx-6">{text}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}