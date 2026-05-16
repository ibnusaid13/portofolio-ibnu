'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Zap, Code2, Sparkles } from 'lucide-react'

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Mobile Developer', 'Database Architect']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 60 : 100
    const pauseTime = isDeleting ? 500 : 1800

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      } else {
        setIsDeleting(false)
        setRoleIndex(prev => (prev + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFE500] blob-anim opacity-60 -z-0" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#FF3CAC] blob-anim opacity-40 -z-0" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-[#00E5FF] blob-anim opacity-30 -z-0" style={{ animationDelay: '4s' }} />

      {/* Floating geometric shapes */}
      <div className="absolute top-32 left-1/4 w-12 h-12 bg-[#AAFF00] border-2 border-[#0A0A0A] float-anim shadow-[3px_3px_0_#0A0A0A] rotate-12" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-[#7B2FFF] border-2 border-[#0A0A0A] float-anim shadow-[3px_3px_0_#0A0A0A] -rotate-6" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-2/3 left-16 w-6 h-6 border-2 border-[#0A0A0A] float-anim rotate-45" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 text-[#FF6B00] float-anim" style={{ animationDelay: '0.8s' }}>
        <Sparkles size={32} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#AAFF00] border-2 border-[#0A0A0A] px-4 py-2 mb-6 shadow-[3px_3px_0_#0A0A0A] font-display font-bold text-sm uppercase tracking-widest">
              <Zap size={14} className="text-[#0A0A0A]" />
              Available for Work
            </div>

            {/* Main heading */}
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-none mb-6">
              <span className="block">CRAFTING</span>
              <span className="block bg-[#0A0A0A] text-[#FFE500] px-3 py-1 -rotate-1 inline-block my-1 shadow-[4px_4px_0_#FFE500]">DIGITAL</span>
              <span className="block">EXPERIENCES</span>
            </h1>

            {/* Typing effect */}
            <div className="flex items-center gap-2 mb-8">
              <Code2 size={20} className="text-[#FF3CAC]" />
              <p className="font-mono text-lg font-bold text-[#0A0A0A]">
                {displayText}<span className="typing-cursor text-[#FF3CAC]">|</span>
              </p>
            </div>

            <p className="font-body text-lg text-[#0A0A0A]/70 mb-8 max-w-md leading-relaxed">
              Seorang developer yang passionate membangun web, mobile, dan solusi digital yang inovatif. Menguasai teknologi modern dari frontend hingga backend.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="neo-btn px-8 py-4 bg-[#0A0A0A] text-[#FFE500] font-display font-black text-base uppercase tracking-wider"
              >
                View Projects →
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="neo-btn px-8 py-4 bg-[#FFE500] text-[#0A0A0A] font-display font-black text-base uppercase tracking-wider"
              >
                Let's Talk ✉
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {[
                { num: '17+', label: 'Skills' },
                { num: '10+', label: 'Projects' },
                { num: '2+', label: 'Years Exp' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 border-2 border-[#0A0A0A] bg-white/50 shadow-[3px_3px_0_#0A0A0A]">
                  <div className="font-display font-black text-2xl">{stat.num}</div>
                  <div className="font-body text-xs text-[#0A0A0A]/60 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Avatar card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main card */}
              <div className="w-80 h-80 bg-[#FFE500] border-4 border-[#0A0A0A] shadow-[12px_12px_0_#0A0A0A] relative overflow-hidden">
                {/* Stripes decoration */}
                <div className="absolute inset-0 stripe-bg opacity-20" />
                {/* Avatar placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  
                  {/* --- LINGKARAN HURUF D DIUBAH MENJADI GAMBAR DI SINI --- */}
                  <div className="w-36 h-36 rounded-full border-4 border-[#0A0A0A] bg-[#0A0A0A] flex items-center justify-center shadow-[4px_4px_0_#FF3CAC] mb-4 overflow-hidden">
                    <img 
                      src="/pp.jpeg" 
                      alt="Foto Profil Ibnu Said" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* ------------------------------------------------------- */}

                  {/* --- NAMA DI BAWAH FOTO DIUBAH DI SINI --- */}
                  <p className="font-display font-black text-xl">Ibnu Said</p>
                  <p className="font-body text-sm text-[#0A0A0A]/70">Indonesia 🇮🇩</p>
                </div>
              </div>

              {/* Floating mini cards */}
              <div className="absolute -top-4 -right-8 bg-[#FF3CAC] border-2 border-[#0A0A0A] shadow-[3px_3px_0_#0A0A0A] px-3 py-2 font-display font-bold text-xs text-white float-anim">
                💻 Code
              </div>
              <div className="absolute -bottom-4 -left-8 bg-[#00E5FF] border-2 border-[#0A0A0A] shadow-[3px_3px_0_#0A0A0A] px-3 py-2 font-display font-bold text-xs text-[#0A0A0A] float-anim" style={{ animationDelay: '1s' }}>
                🎨 Design
              </div>
              <div className="absolute top-1/2 -right-12 bg-[#AAFF00] border-2 border-[#0A0A0A] shadow-[3px_3px_0_#0A0A0A] px-3 py-2 font-display font-bold text-xs text-[#0A0A0A] float-anim" style={{ animationDelay: '0.5s' }}>
                📱 Mobile
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}