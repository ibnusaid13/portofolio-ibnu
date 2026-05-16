export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t-4 border-[#FFE500] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Huruf D diubah menjadi I di sini */}
            <div className="w-8 h-8 bg-[#FFE500] border-2 border-[#FFE500] flex items-center justify-center font-display font-black text-[#0A0A0A]">
              I
            </div>
            <span className="font-display font-black text-[#F5F0E8]">Ibnu Said</span>
          </div>

          <p className="font-mono text-xs text-[#F5F0E8]/30 uppercase tracking-wider">
            © 2026 — Portofolio Ibnu Said ❤️
          </p>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#AAFF00] animate-pulse" />
            <span className="font-mono text-xs text-[#F5F0E8]/50">Open to opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  )
}