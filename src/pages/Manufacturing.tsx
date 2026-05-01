import React from 'react';
import { MapPin, Server, Activity } from 'lucide-react';

export function Manufacturing() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">World-Class Manufacturing</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              State-of-the-art facilities integrated with advanced automation, ensuring uncompromising quality and scale across our global operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Operational Excellence</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              VCI Chemical Industries operates multiple technologically advanced manufacturing plants strategically located near major raw material sources and port infrastructures.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our facilities utilize continuous distillation and proprietary reactor technologies to maximize yields, guarantee identical batch-to-batch consistency, and minimize environmental impact.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><Activity size={24}/></div>
                 <div>
                    <h4 className="font-bold text-slate-900">Distributed Control Systems (DCS)</h4>
                    <p className="text-slate-600 text-sm mt-1">Fully automated, data-driven plant operations ensuring precision control over complex chemical reactions.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><Server size={24}/></div>
                 <div>
                    <h4 className="font-bold text-slate-900">Integrated Captive Power</h4>
                    <p className="text-slate-600 text-sm mt-1">Self-sustaining energy models recovering waste heat and tail-gases for uninterrupted production.</p>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-200 rounded-2xl p-8 flex flex-col justify-center border border-slate-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply"></div>
             {/* Abstract representation of locations */}
             <h3 className="text-xl font-bold text-slate-900 mb-6 relative z-10 flex items-center gap-2"><MapPin className="text-blue-600"/> Global Plant Locations</h3>
             <ul className="space-y-4 relative z-10">
                <li className="bg-white p-4 rounded-xl shadow-sm">
                   <h4 className="font-bold text-slate-900 text-lg">Hooghly Complex, India</h4>
                   <p className="text-sm text-slate-500 mt-1">Flagship integrated carbon chemical facility.</p>
                   <div className="mt-3 flex gap-2">
                     <span className="px-2 py-1 bg-slate-100 text-xs font-medium rounded text-slate-600 border border-slate-200">Distillation</span>
                     <span className="px-2 py-1 bg-slate-100 text-xs font-medium rounded text-slate-600 border border-slate-200">Carbon Black</span>
                   </div>
                </li>
                <li className="bg-white p-4 rounded-xl shadow-sm">
                   <h4 className="font-bold text-slate-900 text-lg">Visakhapatnam SEZ</h4>
                   <p className="text-sm text-slate-500 mt-1">Export-oriented unit with deep-water port access.</p>
                   <div className="mt-3 flex gap-2">
                     <span className="px-2 py-1 bg-slate-100 text-xs font-medium rounded text-slate-600 border border-slate-200">Advanced Materials</span>
                   </div>
                </li>
                <li className="bg-white p-4 rounded-xl shadow-sm">
                   <h4 className="font-bold text-slate-900 text-lg">Shandong Joint Venture, China</h4>
                   <p className="text-sm text-slate-500 mt-1">Strategic facility to serve the East Asian aluminum market.</p>
                </li>
             </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
