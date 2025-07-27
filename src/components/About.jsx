import React from 'react'

function About() {
  return (
    <section id="about" className="py-20 bg-white px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <img 
                src="/about.jpg" 
                alt="Personas felices en Glaciar Café" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c5282] mb-8">
              Nuestro Refugio de Paz
            </h2>
            <p className="text-lg text-[#2d3748] mb-6">
              En Glaciar Café, creemos que el verdadero lujo es tener un momento de tranquilidad en medio del ajetreo diario. 
              Nuestro espacio fue diseñado como un santuario urbano donde el tiempo parece detenerse y las conversaciones fluyen con calma.
            </p>
            <p className="text-lg text-[#2d3748] mb-6">
              Fundado en 2022 por Clara y Martín, dos amantes del café que buscaban crear más que una cafetería, 
              Glaciar nació del deseo de ofrecer un refugio donde las personas pudieran reconectar consigo mismas 
              y con otros en un ambiente sereno y acogedor.
            </p>
            <div className="bg-[#f0f5ff] p-6 rounded-lg border-l-4 border-[#81e6d9]">
              <p className="text-lg italic text-[#2d3748]">
                "Cada rincón, cada taza, cada suspiro en Glaciar está diseñado para que encuentres ese momento de paz que tu día necesita."
              </p>
              <p className="mt-4 text-[#2c5282] font-medium">- Clara & Martín, Fundadores</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#f0f5ff] rounded-xl">
            <div className="text-5xl text-[#81e6d9] font-bold mb-4">3</div>
            <h3 className="text-xl font-bold text-[#2c5282] mb-2">Años de Serenidad</h3>
            <p className="text-[#2d3748]">Sirviendo momentos de calma desde 2022</p>
          </div>
          
          <div className="text-center p-6 bg-[#f0f5ff] rounded-xl">
            <div className="text-5xl text-[#81e6d9] font-bold mb-4">100%</div>
            <h3 className="text-xl font-bold text-[#2c5282] mb-2">Café Consciente</h3>
            <p className="text-[#2d3748]">Granos de comercio justo y prácticas sostenibles</p>
          </div>
          
          <div className="text-center p-6 bg-[#f0f5ff] rounded-xl">
            <div className="text-5xl text-[#81e6d9] font-bold mb-4">∞</div>
            <h3 className="text-xl font-bold text-[#2c5282] mb-2">Sonrisas Compartidas</h3>
            <p className="text-[#2d3748]">El mejor ingrediente de nuestra receta</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 