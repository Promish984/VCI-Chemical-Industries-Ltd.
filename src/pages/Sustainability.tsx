import React from 'react';
import { Leaf, Recycle, Wind, ShieldCheck } from 'lucide-react';

export function Sustainability() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-green-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600 via-green-900 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Sustainability & ESG</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Integrating environmental stewardship, social responsibility, and robust governance into the molecular structure of our business.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Commitment to the Future</h2>
             <p className="text-lg text-slate-600">
               At VCI Chemical Industries, we recognize that our operations have an impact on the world. We are committed to pioneering circular carbon economies, significantly reducing our carbon footprint, and upholding the highest standards of safety and ethics.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
                <div className="flex-shrink-0">
                  <Leaf size={40} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Emissions Reduction</h3>
                  <p className="text-slate-600 leading-relaxed">Implementing advanced captive power plants that utilize waste tail-gas, drastically reducing greenhouse gas emissions and reliance on external grids.</p>
                </div>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
                <div className="flex-shrink-0">
                  <Wind size={40} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Renewable Energy</h3>
                  <p className="text-slate-600 leading-relaxed">Scaling our investments in solar and wind power installations across our manufacturing facilities to transition towards a zero-carbon energy mix.</p>
                </div>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
                <div className="flex-shrink-0">
                  <Recycle size={40} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Circular Economy</h3>
                  <p className="text-slate-600 leading-relaxed">Innovating in the recycling of industrial byproducts, turning waste streams from steel and coal sectors into high-value engineered carbon materials.</p>
                </div>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
                <div className="flex-shrink-0">
                  <ShieldCheck size={40} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Safety & Governance</h3>
                  <p className="text-slate-600 leading-relaxed">Maintaining zero-harm workplaces through rigorous safety protocols and ensuring transparent corporate governance aligned with global best practices.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-6">Download Our Latest ESG Report</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Get comprehensive insights into our sustainability metrics, community initiatives, and environmental milestones.</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded transition-all">Download PDF (10.4 MB)</button>
        </div>
      </section>
    </div>
  );
}
