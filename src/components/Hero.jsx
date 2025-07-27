
import React from 'react'

function Hero() {
  return (
    <section className="h-[80vh] flex items-center bg-gradient-to-r from-[#f0f5ff]/80 to-[#f0f5ff]/80 bg-cover bg-center px-5 md:px-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80')" }}>
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 leading-tight drop-shadow-lg">
          Donde cada taza es una obra de arte
        </h1>
        <p className="text-xl md:text-2xl text-emerald-800 mt-4 mb-8 drop-shadow-md">
          cafe de especialidad en un ambiente minimalista diseñado para desconectar
        </p>
        <a href="#menu">
          <button className="bg-[#81e6d9] text-[#2c5282] font-semibold py-3 px-8 rounded-md hover:bg-[#4fd1c5] hover:scale-105 transition-transform duration-300">
            Ver menú
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero 