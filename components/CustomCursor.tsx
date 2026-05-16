'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX - 4 + 'px'
      dot.style.top = mouseY - 4 + 'px'
    }

    const animate = () => {
      ringX += (mouseX - ringX - 16) * 0.15
      ringY += (mouseY - ringY - 16) * 0.15
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      requestAnimationFrame(animate)
    }

    const onMouseEnterLink = () => ring.classList.add('hovered')
    const onMouseLeaveLink = () => ring.classList.remove('hovered')

    document.addEventListener('mousemove', onMouseMove)
    animate()

    const links = document.querySelectorAll('a, button, .neo-btn, .neo-card')
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
