'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['about', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F0E8] border-b-2 border-[#0A0A0A] shadow-[0_4px_0_#0A0A0A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-black text-xl tracking-tight flex items-center gap-2 group"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            {/* Huruf D diganti menjadi I */}
            <span className="w-8 h-8 bg-[#FFE500] border-2 border-[#0A0A0A] flex items-center justify-center text-sm font-black shadow-[2px_2px_0_#0A0A0A] group-hover:shadow-[4px_4px_0_#0A0A0A] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              I
            </span>
            {/* Nama DEV.PORTO diganti menjadi IBNU SAID */}
            <span className="font-display">IBNU SAID</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 font-display font-bold text-sm uppercase tracking-wider border-2 transition-all duration-150 ${
                  active === item.href.slice(1)
                    ? 'bg-[#0A0A0A] text-[#FFE500] border-[#0A0A0A] shadow-[2px_2px_0_#FFE500]'
                    : 'bg-transparent text-[#0A0A0A] border-transparent hover:border-[#0A0A0A] hover:bg-[#FFE500] hover:shadow-[2px_2px_0_#0A0A0A]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="ml-2 px-5 py-2 bg-[#0A0A0A] text-[#F5F0E8] font-display font-black text-sm uppercase tracking-wider border-2 border-[#0A0A0A] shadow-[3px_3px_0_#FFE500] hover:shadow-[1px_1px_0_#FFE500] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              Hire Me →
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 border-2 border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F5F0E8] border-t-2 border-[#0A0A0A]">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-6 py-4 font-display font-bold uppercase tracking-wider border-b-2 border-[#0A0A0A] hover:bg-[#FFE500] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}