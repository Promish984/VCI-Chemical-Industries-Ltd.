export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           {/* We can use a pattern or gradient for industrial look */}
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDEwMEwzMCA1MEwwIDBIMzBMMzAgNTBMMCAxMDBaIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-30"></div>
           <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[150px] opacity-20 translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Advanced Materials & Chemicals</span>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                    Powering the Future of Industry.
                </h1>
                <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                    VCI Chemical Industries Ltd. is a global leader in specialty chemicals, carbon products, and advanced materials.
                </p>
                <div className="pt-4 flex gap-4">
                  <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded shadow-lg transition-all">Explore Products</a>
                  <a href="/about" className="border border-slate-600 hover:border-slate-400 text-white font-medium py-3 px-8 rounded transition-all">About Us</a>
                </div>
            </div>
            <div className="hidden md:block">
               {/* Decorative structural element */}
               <div className="grid grid-cols-2 gap-4">
                 <div className="h-48 bg-slate-800 rounded-lg shadow-2xl overflow-hidden relative group">
                   <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition duration-500"></div>
                 </div>
                 <div className="h-48 bg-slate-800 rounded-lg shadow-2xl relative translate-y-8 overflow-hidden group">
                     <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition duration-500"></div>
                 </div>
                 <div className="h-48 bg-slate-800 rounded-lg shadow-2xl col-span-2 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition duration-500"></div>
                 </div>
               </div>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200">
                  <div className="text-center px-4">
                      <div className="text-4xl font-extrabold text-blue-600 mb-2">25+</div>
                      <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years of Excellence</div>
                  </div>
                  <div className="text-center px-4">
                      <div className="text-4xl font-extrabold text-blue-600 mb-2">5</div>
                      <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Global Manufacturing Facilities</div>
                  </div>
                  <div className="text-center px-4">
                      <div className="text-4xl font-extrabold text-blue-600 mb-2">30+</div>
                      <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Countries Served</div>
                  </div>
                  <div className="text-center px-4">
                      <div className="text-4xl font-extrabold text-blue-600 mb-2">₹50B+</div>
                      <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Annual Revenue</div>
                  </div>
              </div>
          </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl font-bold text-slate-900 mb-4">Leading the World in Carbon Chemistry</h2>
                 <p className="text-lg text-slate-600 leading-relaxed">
                     VCI Chemical Industries is deeply integrated in the carbon value chain. We supply critical components
                     for lithium-ion batteries, aluminum smelting, and specialty tires, focusing on innovation and sustainable
                     practices.
                 </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
                     <h3 className="text-xl font-bold text-slate-900 mb-3">Coal Tar Pitch</h3>
                     <p className="text-slate-600">Premium binder pitch used in the aluminum industry, maximizing smelter efficiency.</p>
                 </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
                     <h3 className="text-xl font-bold text-slate-900 mb-3">Carbon Black</h3>
                     <p className="text-slate-600">Essential reinforcement material for tires, plastics, and high-performance coatings.</p>
                 </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
                     <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Materials</h3>
                     <p className="text-slate-600">Next-generation synthetic graphite and anode materials for EV batteries and energy storage.</p>
                 </div>
             </div>
          </div>
      </section>
    </div>
  );
}
