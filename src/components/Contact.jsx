import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#f0f5ff] px-5 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2c5282] mb-16">Visítanos</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-[#2c5282] mb-6">Información</h3>
          <p className="text-[#2d3748] mb-4 flex items-center">
            <span className="mr-2">📍</span> Calle Aurora Boreal 42, Distrito Polar
          </p>
          <p className="text-[#2d3748] mb-4 flex items-center">
            <span className="mr-2">📞</span> +34 915 123 456
          </p>
          <p className="text-[#2d3748] mb-4 flex items-center">
            <span className="mr-2">✉️</span> hola@glaciarcafe.com
          </p>
          
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-[#2c5282] mb-6">Horario</h3>
            <p className="text-[#2d3748] mb-2">Lunes - Viernes: 7:30 - 20:00</p>
            <p className="text-[#2d3748] mb-2">Sábados: 8:00 - 22:00</p>
            <p className="text-[#2d3748]">Domingos: 9:00 - 18:00</p>
          </div>
        </div>
        
        <div className="bg-[#e2e8f0] rounded-xl flex items-center justify-center h-80">
          <p className="text-xl text-[#2d3748]">Mapa: Glaciar Café, Calle Aurora Boreal</p>
        </div>
      </div>
    </section>
  )
}

export default Contact 