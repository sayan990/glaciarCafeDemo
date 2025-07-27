import React from 'react'

function Menu() {
  return (
    <section id="menu" className="py-20 bg-white px-5 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2c5282] mb-16">Nuestras Especialidades</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Item 1 */}
        <div className="bg-[#e2e8f0] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <div className="h-48 bg-[#81e6d9] flex items-center justify-center text-white text-xl font-bold">
            Flat White
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#2c5282] mb-2">Flat White Glaciar</h3>
            <p className="text-[#2d3748] mb-4">Espresso suave con textura de seda</p>
            <span className="text-xl font-bold text-cyan-600">$4.20</span>
          </div>
        </div>
        
        {/* Item 2 */}
        <div className="bg-[#e2e8f0] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <div className="h-48 bg-[#81e6d9] flex items-center justify-center text-white text-xl font-bold">
            Matcha
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#2c5282] mb-2">Matcha Nórdico</h3>
            <p className="text-[#2d3748] mb-4">Ceremonial grade con leche de almendras</p>
            <span className="text-xl font-bold text-cyan-600">$5.80</span>
          </div>
        </div>
        
        {/* Item 3 */}
        <div className="bg-[#e2e8f0] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <div className="h-48 bg-[#81e6d9] flex items-center justify-center text-white text-xl font-bold">
            Croissant
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#2c5282] mb-2">Croissant de Almendra</h3>
            <p className="text-[#2d3748] mb-4">Hecho artesanalmente cada mañana</p>
            <span className="text-xl font-bold text-cyan-600">$3.50</span>
          </div>
        </div>
        
        {/* Item 4 */}
        <div className="bg-[#e2e8f0] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <div className="h-48 bg-[#81e6d9] flex items-center justify-center text-white text-xl font-bold">
            Torta
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#2c5282] mb-2">Torta de Avellanas</h3>
            <p className="text-[#2d3748] mb-4">Con chocolate belga y crema de vainilla</p>
            <span className="text-xl font-bold text-cyan-600">$6.90</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu 