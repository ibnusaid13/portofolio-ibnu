'use client'

import { useState } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

type Project = {
  id: number
  title: string
  desc: string
  tags: string[]
  color: string
  accent: string
  emoji: string
  type: string
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Web App',
    desc: 'Platform belanja online dengan fitur lengkap: katalog produk, keranjang belanja, pembayaran, dan admin dashboard. Dibangun dengan Laravel & MySQL.',
    tags: ['Laravel', 'PHP', 'MySQL', 'CSS'],
    color: '#FF3CAC',
    accent: '#FFE500',
    emoji: '🛒',
    type: 'Web App',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    desc: 'Aplikasi mobile banking dengan fitur transfer, cek saldo, riwayat transaksi, dan notifikasi real-time. Dikembangkan menggunakan Flutter & Dart.',
    tags: ['Flutter', 'Dart', 'Firebase', 'UI/UX'],
    color: '#7B2FFF',
    accent: '#00E5FF',
    emoji: '💳',
    type: 'Mobile App',
  },
  {
    id: 3,
    title: 'Network Topology Design',
    desc: 'Desain dan konfigurasi jaringan komputer enterprise dengan VLAN, routing protocol OSPF, dan firewall rules menggunakan Cisco Packet Tracer.',
    tags: ['Cisco PKT', 'Networking', 'VLAN', 'OSPF'],
    color: '#FF6B00',
    accent: '#AAFF00',
    emoji: '🔌',
    type: 'Network',
  },
  {
    id: 4,
    title: 'Database Management System',
    desc: 'Sistem manajemen database untuk perpustakaan digital dengan query optimization, stored procedures, dan backup otomatis menggunakan MySQL.',
    tags: ['MySQL', 'Basis Data', 'PHP', 'SQL'],
    color: '#00E5FF',
    accent: '#FF3CAC',
    emoji: '📊',
    type: 'Database',
  },
  {
    id: 5,
    title: 'UI/UX Design System',
    desc: 'Design system komprehensif dengan komponen library, style guide, dan prototype interaktif untuk aplikasi fintech modern.',
    tags: ['Figma', 'Photoshop', 'Illustrator', 'UI'],
    color: '#AAFF00',
    accent: '#7B2FFF',
    emoji: '🎨',
    type: 'Design',
  },
  {
    id: 6,
    title: 'Python Data Analyzer',
    desc: 'Tool analisis data dengan visualisasi interaktif, machine learning predictions, dan reporting otomatis untuk data akademik.',
    tags: ['Python', 'Data Science', 'ML', 'Matplotlib'],
    color: '#FFE500',
    accent: '#FF6B00',
    emoji: '🐍',
    type: 'Data Science',
  },
]

const typeFilters = ['All', 'Web App', 'Mobile App', 'Network', 'Database', 'Design', 'Data Science']

export default function Projects() {
  const [activeType, setActiveType] = useState('All')
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = activeType === 'All' ? projects : projects.filter(p => p.type === activeType)

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF3CAC] via-[#FFE500] to-[#00E5FF]" />
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,229,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,229,0,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-0.5 bg-[#FFE500]" />
          <span className="font-mono text-[#FFE500] text-sm uppercase tracking-widest">03 / Projects</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#F5F0E8] leading-tight">
            MY
            <span className="block bg-[#FFE500] text-[#0A0A0A] px-3 py-1 inline-block shadow-[4px_4px_0_#FF3CAC] rotate-1">WORKS</span>
          </h2>
          <p className="font-body text-[#F5F0E8]/50 max-w-xs">
            Proyek-proyek yang telah saya kerjakan menggunakan berbagai teknologi
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {typeFilters.map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className="px-4 py-2 font-display font-bold text-xs uppercase tracking-wider border-2 transition-all"
              style={{
                borderColor: activeType === type ? '#FFE500' : 'rgba(245,240,232,0.2)',
                background: activeType === type ? '#FFE500' : 'transparent',
                color: activeType === type ? '#0A0A0A' : 'rgba(245,240,232,0.6)',
                boxShadow: activeType === type ? '3px 3px 0 #FF3CAC' : 'none',
              }}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <div
              key={project.id}
              className="group relative border-2 border-[#F5F0E8]/10 bg-[#F5F0E8]/5 overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                boxShadow: hovered === project.id ? `8px 8px 0 ${project.color}` : '4px 4px 0 rgba(245,240,232,0.1)',
                transform: hovered === project.id ? 'translate(-4px, -4px)' : 'translate(0, 0)',
                borderColor: hovered === project.id ? project.color : 'rgba(245,240,232,0.1)',
              }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Color bar top */}
              <div className="h-2 w-full" style={{ background: project.color }} />

              {/* Content */}
              <div className="p-6">
                {/* Emoji + type */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-3xl border-2 border-[#F5F0E8]/20 transition-transform group-hover:rotate-6 group-hover:scale-110"
                    style={{ background: `${project.color}20` }}
                  >
                    {project.emoji}
                  </div>
                  <span
                    className="font-mono text-xs px-3 py-1 font-bold border"
                    style={{ color: project.color, borderColor: project.color }}
                  >
                    {project.type}
                  </span>
                </div>

                <h3 className="font-display font-black text-lg text-[#F5F0E8] mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-[#F5F0E8]/50 leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 font-bold"
                      style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}40` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-[#F5F0E8]/10">
                  <button className="flex items-center gap-1.5 font-display font-bold text-xs text-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-colors uppercase tracking-wider">
                    <Github size={14} />
                    Code
                  </button>
                  <button
                    className="flex items-center gap-1.5 font-display font-bold text-xs uppercase tracking-wider transition-all"
                    style={{ color: project.color }}
                  >
                    <ExternalLink size={14} />
                    Demo
                  </button>
                  <div className="ml-auto">
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                      style={{ color: project.color }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12">
          <button className="neo-btn px-10 py-4 bg-transparent text-[#F5F0E8] font-display font-black uppercase tracking-widest text-sm border-[#F5F0E8] hover:bg-[#FFE500] hover:text-[#0A0A0A] hover:border-[#FFE500] transition-colors">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  )
}
