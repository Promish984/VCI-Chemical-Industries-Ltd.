import React from 'react';

export function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDEwMEwzMCA1MEwwIDBIMzBMMzAgNTBMMCAxMDBaIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">About VCI Chemical Industries</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Driving industrial progress through advanced carbon chemistry and specialized chemical manufacturing for over two decades.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be the globally preferred partner in advanced carbon materials and specialty chemicals, driving sustainable innovation that empowers the industries of the future, from electric mobility to resilient infrastructure.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              We engineer high-performance chemical solutions through relentless R&D, operational excellence, and unyielding commitment to environmental stewardship, creating lasting value for our customers, employees, and shareholders.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Timeline or Stats */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From a regional chemical provider to a global leader in the carbon value chain.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">1998</div>
              <p className="text-slate-800 font-medium">Foundation</p>
              <p className="text-sm text-slate-500 mt-2">Established first coal tar distillation unit.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">2005</div>
              <p className="text-slate-800 font-medium">Global Expansion</p>
              <p className="text-sm text-slate-500 mt-2">Opened operations targeting global aluminum and tire industries.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">2015</div>
              <p className="text-slate-800 font-medium">Advanced Materials</p>
              <p className="text-sm text-slate-500 mt-2">Initiated R&D into synthetic graphite & EV battery anodes.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">2024</div>
              <p className="text-slate-800 font-medium">Sustainability Frontier</p>
              <p className="text-sm text-slate-500 mt-2">Achieved milestone in reducing carbon intensity and scaling circular solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Guided by visionaries with deep roots in industrial chemistry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Placeholder for Leadership - keeping it generic as requested for corporate vibe */}
             {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                  <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 border-4 border-white shadow-md"></div>
                  <h3 className="text-xl font-bold text-slate-900">Executive Name</h3>
                  <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">Board Member</p>
                  <p className="text-slate-500 text-sm">Decades of strategic leadership driving the company's global footprint and innovation pipeline.</p>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
