import React from 'react'

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-6 px-5 md:px-10">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-[#2c5282] tracking-tight">GLACIAR CAFÉ</div>
        <div className="hidden md:flex space-x-8">
          <a href="#menu" className="text-[#2d3748] font-medium hover:text-[#81e6d9] transition-colors">Menú</a>
          <a href="#about" className="text-[#2d3748] font-medium hover:text-[#81e6d9] transition-colors">Nosotros</a>
          <a href="#contact" className="text-[#2d3748] font-medium hover:text-[#81e6d9] transition-colors">Contacto</a>
        </div>
      </nav>
    </header>
  )
}

export default Header 