'use client'

import { useState } from 'react'

type Skill = {
  name: string
  level: number
  icon: string
  color: string
  bg: string
  category: string
}

const skills: Skill[] = [
  // Web Frontend
  { name: 'HTML5', level: 95, icon: '🌐', color: '#E34F26', bg: '#FFF0EB', category: 'Frontend' },
  { name: 'CSS3', level: 90, icon: '🎨', color: '#264DE4', bg: '#EBEFFF', category: 'Frontend' },
  { name: 'JavaScript', level: 85, icon: '⚡', color: '#F7DF1E', bg: '#FEFDE5', category: 'Frontend' },
  // Backend
  { name: 'PHP', level: 80, icon: '🐘', color: '#777BB4', bg: '#F0EEFF', category: 'Backend' },
  { name: 'Python', level: 75, icon: '🐍', color: '#3776AB', bg: '#EBF4FF', category: 'Backend' },
  { name: 'Java', level: 70, icon: '☕', color: '#ED8B00', bg: '#FFF5E5', category: 'Backend' },
  { name: 'C++', level: 65, icon: '⚙️', color: '#00599C', bg: '#EBF5FF', category: 'Backend' },
  { name: 'Laravel', level: 78, icon: '🔴', color: '#FF2D20', bg: '#FFEBEA', category: 'Backend' },
  // Mobile
  { name: 'Flutter', level: 72, icon: '📱', color: '#02569B', bg: '#EBF4FF', category: 'Mobile' },
  { name: 'Dart', level: 70, icon: '🎯', color: '#0175C2', bg: '#EBF3FF', category: 'Mobile' },
  // Database & Network
  { name: 'MySQL', level: 82, icon: '🗄️', color: '#4479A1', bg: '#EBF2FF', category: 'Database' },
  { name: 'Basis Data', level: 80, icon: '📊', color: '#00758F', bg: '#E5F6FF', category: 'Database' },
  { name: 'Cisco PKT', level: 68, icon: '🔌', color: '#1BA0D7', bg: '#EBF6FF', category: 'Network' },
  // Design
  { name: 'Figma', level: 85, icon: '🎭', color: '#F24E1E', bg: '#FFEBEA', category: 'Design' },
  { name: 'Photoshop', level: 75, icon: '🖼️', color: '#31A8FF', bg: '#EBF6FF', category: 'Design' },
  { name: 'Illustrator', level: 70, icon: '✏️', color: '#FF9A00', bg: '#FFF5E5', category: 'Design' },
]

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'Network', 'Design']

const categoryColors: Record<string, string> = {
  All: '#0A0A0A',
  Frontend: '#FF3CAC',
  Backend: '#7B2FFF',
  Mobile: '#00E5FF',
  Database: '#AAFF00',
  Network: '#FF6B00',
  Design: '#FFE500',
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Big decorative text */}
      <div className="absolute top-0 right-0 font-display font-black text-[180px] text-[#0A0A0A]/5 leading-none select-none pointer-events-none overflow-hidden">
        SKILLS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-0.5 bg-[#0A0A0A]" />
          <span className="font-mono text-[#0A0A0A]/50 text-sm uppercase tracking-widest">02 / Skills</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <h2 className="font-display font-black text-4xl sm:text-5xl leading-tight">
            TECH
            <span className="block bg-[#FF3CAC] text-white px-3 py-1 inline-block shadow-[4px_4px_0_#0A0A0A] -rotate-1">STACK</span>
          </h2>
          <p className="font-body text-[#0A0A0A]/60 max-w-xs">
            Teknologi & tools yang saya kuasai dalam pengembangan digital
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 font-display font-bold text-xs uppercase tracking-wider border-2 border-[#0A0A0A] transition-all duration-150"
              style={{
                background: activeCategory === cat ? categoryColors[cat] : 'transparent',
                color: activeCategory === cat ? (cat === 'Frontend' || cat === 'Design' ? '#0A0A0A' : '#0A0A0A') : '#0A0A0A',
                boxShadow: activeCategory === cat ? '3px 3px 0 #0A0A0A' : 'none',
                transform: activeCategory === cat ? 'none' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="neo-card bg-white p-5 cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 flex items-center justify-center text-2xl border-2 border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A] transition-transform"
                    style={{
                      background: skill.bg,
                      transform: hoveredSkill === skill.name ? 'rotate(-6deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                    }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm">{skill.name}</h3>
                    <span
                      className="font-mono text-xs px-2 py-0.5 font-bold"
                      style={{ background: categoryColors[skill.category], color: '#0A0A0A', border: '1px solid #0A0A0A' }}
                    >
                      {skill.category}
                    </span>
                  </div>
                </div>
                <span className="font-display font-black text-xl" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>

              {/* Skill bar */}
              <div className="w-full h-4 bg-[#0A0A0A]/10 border-2 border-[#0A0A0A] relative overflow-hidden">
                <div
                  className="h-full transition-all duration-1000 ease-out relative"
                  style={{
                    width: hoveredSkill === skill.name ? `${skill.level}%` : `${skill.level * 0.9}%`,
                    background: skill.color,
                    borderRight: hoveredSkill === skill.name ? `2px solid ${skill.color}` : 'none',
                  }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-white/20" style={{ clipPath: 'polygon(0 0, 30% 0, 20% 100%, 0 100%)' }} />
                </div>
              </div>

              {/* Level label */}
              <div className="flex justify-between mt-2">
                <span className="font-mono text-xs text-[#0A0A0A]/40">Beginner</span>
                <span className="font-mono text-xs text-[#0A0A0A]/40">Expert</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          {[
            { num: '17', label: 'Total Skills', color: '#FFE500', shadow: '#0A0A0A' },
            { num: '6', label: 'Categories', color: '#FF3CAC', shadow: '#0A0A0A' },
            { num: '83%', label: 'Avg Mastery', color: '#AAFF00', shadow: '#0A0A0A' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 border-2 border-[#0A0A0A] text-center transition-all hover:-translate-y-1"
              style={{ background: stat.color, boxShadow: `6px 6px 0 ${stat.shadow}` }}
            >
              <div className="font-display font-black text-4xl text-[#0A0A0A]">{stat.num}</div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
