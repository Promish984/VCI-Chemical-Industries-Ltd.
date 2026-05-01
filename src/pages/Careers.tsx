import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { Career } from '../types';
import { Briefcase, ArrowRight } from 'lucide-react';

export function Careers() {
  const [jobs, setJobs] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const q = query(collection(db, 'careers'));
        const snap = await getDocs(q);
        const allJobs = snap.docs.map(d => ({ id: d.id, ...d.data() } as Career));
        // Client-side filter because no composite index is needed for this small dataset, 
        // though `where('status', '==', 'open')` usually requires index if order by createdAt.
        // The firestore rules allow listing all, and we'll just filter open ones.
        setJobs(allJobs.filter(j => j.status === 'open').sort((a, b) => b.createdAt - a.createdAt));
      } catch (err) {
        handleFirestoreError(err, OperationType.LIST, 'careers');
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <section className="bg-slate-900 text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Careers at VCI</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Join a globally dynamic team pioneering the next generation of industrial chemistry and sustainable materials.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-40px] relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center">
               <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation Culture</h3>
               <p className="text-slate-600 text-sm">We invest heavily in R&D, empowering our scientists and engineers to experiment and break new ground.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center">
               <h3 className="text-xl font-bold text-slate-900 mb-3">Global Exposure</h3>
               <p className="text-slate-600 text-sm">Work across borders with operations spanning multiple continents and diverse industrial markets.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center">
               <h3 className="text-xl font-bold text-slate-900 mb-3">Continuous Growth</h3>
               <p className="text-slate-600 text-sm">Robust learning pathways and leadership development programs to accelerate your career trajectory.</p>
            </div>
         </div>

         <div>
           <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
             <Briefcase className="text-blue-600"/> Open Positions
           </h2>

           {loading ? (
             <div className="text-center py-12 text-slate-500">Loading open positions...</div>
           ) : jobs.length > 0 ? (
             <div className="space-y-6">
                {jobs.map(job => (
                   <div key={job.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
                      <div className="md:flex justify-between items-start">
                         <div className="mb-4 md:mb-0">
                           <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                           <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4">Location: Varies</p>
                           <p className="text-slate-600 max-w-3xl whitespace-pre-line">{job.description}</p>
                         </div>
                         <button className="flex-shrink-0 flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-lg font-medium transition">
                           Apply Now <ArrowRight size={18}/>
                         </button>
                      </div>
                   </div>
                ))}
             </div>
           ) : (
             <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 border-dashed">
                <p className="text-lg text-slate-600">Currently, there are no open positions available.</p>
                <p className="text-slate-500 mt-2">However, we are always looking for exceptional talent. Submit your resume to <a href="mailto:careers@vcichemicals.com" className="text-blue-600 hover:underline">careers@vcichemicals.com</a></p>
             </div>
           )}
         </div>
      </section>
    </div>
  );
}
