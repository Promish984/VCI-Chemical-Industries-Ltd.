import React from 'react';
import { CarFront, Zap, Factory, PaintBucket } from 'lucide-react';

export function Industries() {
  const industries = [
    {
      title: "Aluminum Smelting",
      icon: <Factory size={32} className="text-blue-600 mb-4" />,
      description: "We are a critical supply chain partner to the global aluminum industry. Our premium Coal Tar Pitch acts as an essential binder in the manufacturing of carbon anodes, a vital component in aluminum electrolysis.",
      highlights: ["High-density binder pitch", "Optimized for minimal consumption", "Consistent quality for stable smelting"]
    },
    {
      title: "Tires & Rubber",
      icon: <CarFront size={32} className="text-blue-600 mb-4" />,
      description: "Our Specialty Carbon Black products are engineered to provide maximum reinforcement, durability, and rolling resistance optimization for high-performance automotive tires and industrial rubber goods.",
      highlights: ["High structure carbon black", "Improved tread wear resistance", "Enhanced mechanical strength"]
    },
    {
      title: "EV Batteries & Energy Storage",
      icon: <Zap size={32} className="text-blue-600 mb-4" />,
      description: "Powering the green transition, we manufacture advanced carbon materials, including synthetic graphite and specialized coating materials for lithium-ion battery anodes.",
      highlights: ["High-purity synthetic graphite", "Superior charge/discharge efficiency", "Enhanced battery lifespan"]
    },
    {
      title: "Plastics & Coatings",
      icon: <PaintBucket size={32} className="text-blue-600 mb-4" />,
      description: "We supply specialized pigments and carbon additives that deliver deep color, UV protection, and electrical conductivity for the plastics, paints, and advanced coatings industries.",
      highlights: ["High tinting strength", "Excellent UV stability", "Conductive and anti-static grades"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Industries We Serve</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our specialized carbon and chemical operations empower the core industries that build, move, and store energy in the modern world.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {industries.map((ind, idx) => (
                <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition duration-300">
                   {ind.icon}
                   <h3 className="text-2xl font-bold text-slate-900 mb-4">{ind.title}</h3>
                   <p className="text-slate-600 leading-relaxed mb-6">{ind.description}</p>
                   <ul className="space-y-2">
                     {ind.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-center text-sm font-medium text-slate-700">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                          {highlight}
                        </li>
                     ))}
                   </ul>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
