import React, { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../../lib/firebase';
import { ContactInquiry } from '../../types';

export function AdminInquiries() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const snap = await getDocs(query(collection(db, 'contactInquiries')));
      setInquiries(snap.docs.map(d => {
        const data = d.data();
        return { 
          id: d.id, 
          ...data,
          createdAt: data.createdAt?.toMillis ? data.createdAt.toMillis() : data.createdAt 
        } as ContactInquiry;
      }).sort((a,b) => b.createdAt - a.createdAt));
      setLoading(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.LIST, 'contactInquiries');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Contact Inquiries</h2>
      <div className="space-y-4">
        {inquiries.map(inq => (
          <div key={inq.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{inq.name}</h3>
                <div className="flex gap-4 items-center">
                  <a href={`mailto:${inq.email}`} className="text-blue-600 hover:underline text-sm">{inq.email}</a>
                  {inq.phone && <a href={`tel:${inq.phone}`} className="text-slate-600 hover:text-slate-900 text-sm border-l pl-4 border-slate-300">{inq.phone}</a>}
                </div>
              </div>
              <span className="text-xs font-medium text-slate-500">{new Date(inq.createdAt).toLocaleString()}</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 whitespace-pre-wrap text-slate-700 text-sm">
              {inq.message}
            </div>
          </div>
        ))}
        {inquiries.length === 0 && (
          <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-dashed border-slate-300">
            No inquiries received yet.
          </div>
        )}
      </div>
    </div>
  );
}
