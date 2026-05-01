import React, { useState } from 'react';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { useAuth } from '../lib/AuthContext';
import { AdminInquiries } from './admin/AdminInquiries';

export function Contact() {
  const { isAdmin } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const generateId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const id = generateId();
      const payload: any = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
        status: 'new'
      };
      if (formData.phone) {
        payload.phone = formData.phone;
      }
      
      await setDoc(doc(db, 'contactInquiries', id), payload);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
       setStatus('error');
       handleFirestoreError(error, OperationType.CREATE, `contactInquiries`);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-6">Partner With Us</h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Whether you are looking for specific chemical solutions or advanced carbon materials, our technical team is ready to assist you.
          </p>

          <div className="space-y-6">
             <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Corporate Headquarters</h3>
                <p className="text-slate-600">8th Floor, Chemical Plaza<br/>Andheri East, Mumbai, Maharashtra 400069<br/>India</p>
             </div>
             <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">General Inquiries</h3>
                <p className="text-slate-600">info@vcichemicals.com<br/>+91 (022) 2345 6789</p>
             </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {status === 'success' && (
              <div className="p-4 bg-green-50 text-green-800 rounded-lg text-sm font-medium">
                Thank you for your inquiry. We will contact you shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-800 rounded-lg text-sm font-medium">
                There was an error submitting your form. Please try again.
              </div>
            )}
            
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition resize-none"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Submitting...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {isAdmin && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-800">Admin View: Submitted Inquiries</h2>
            </div>
            <AdminInquiries />
          </div>
        </div>
      )}
    </div>
  );
}
