import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../../lib/firebase';
import { Career } from '../../types';

export function AdminCareers() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // form
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'open' | 'closed'>('open');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const snap = await getDocs(query(collection(db, 'careers')));
      setCareers(snap.docs.map(d => ({ id: d.id, ...d.data() } as Career)).sort((a, b) => b.createdAt - a.createdAt));
      setLoading(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.LIST, 'careers');
      setLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    setError('');
    try {
      const id = Date.now().toString();
      const payload: any = {
         title,
         description,
         status,
         createdAt: serverTimestamp(),
         updatedAt: serverTimestamp()
      };
      
      await setDoc(doc(db, 'careers', id), payload);
      setTitle(''); setDescription(''); setStatus('open');
      fetchData();
    } catch (err: any) {
      setError(err.message || 'Failed to add career');
      handleFirestoreError(err, OperationType.CREATE, 'careers');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete job posting?')) return;
    try {
      await deleteDoc(doc(db, 'careers', id));
      fetchData();
    } catch (err: any) {
      setError(err.message || 'Failed to delete');
      handleFirestoreError(err, OperationType.DELETE, `careers/${id}`);
    }
  };

  const toggleStatus = async (career: Career) => {
    try {
       const nextStatus = career.status === 'open' ? 'closed' : 'open';
       await setDoc(doc(db, 'careers', career.id), {
          ...career,
          status: nextStatus,
          updatedAt: serverTimestamp()
       });
       fetchData();
    } catch (err: any) {
       setError(err.message || 'Failed to update status');
       handleFirestoreError(err, OperationType.UPDATE, `careers/${career.id}`);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold mb-4">Post a Job</h2>
        {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
        <form onSubmit={handleAdd} className="space-y-4 max-w-2xl">
          <div className="grid grid-cols-3 gap-4">
            <input className="col-span-2 px-4 py-2 border rounded-lg" placeholder="Job Title" value={title} onChange={e => setTitle(e.target.value)} required />
            <select className="px-4 py-2 border rounded-lg" value={status} onChange={e => setStatus(e.target.value as 'open'|'closed')} required>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <textarea className="w-full px-4 py-2 border rounded-lg" placeholder="Job Description & Requirements" rows={5} value={description} onChange={e => setDescription(e.target.value)} required></textarea>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add Post</button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="p-4 font-semibold text-slate-800">Job Title</th>
              <th className="p-4 font-semibold text-slate-800 w-32">Status</th>
              <th className="p-4 font-semibold text-slate-800 w-48">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {careers.map(c => (
              <tr key={c.id}>
                <td className="p-4">
                   <p className="font-medium">{c.title}</p>
                   <p className="text-xs text-slate-500 mt-1 line-clamp-1">{c.description}</p>
                </td>
                <td className="p-4">
                   <span className={`px-2 py-1 text-xs font-semibold rounded ${c.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-slate-200 text-slate-800'}`}>
                      {c.status.toUpperCase()}
                   </span>
                </td>
                <td className="p-4 space-x-3">
                  <button onClick={() => toggleStatus(c)} className="text-blue-600 hover:text-blue-800 text-sm font-medium">Toggle Status</button>
                  <button onClick={() => handleDelete(c.id)} className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
                </td>
              </tr>
            ))}
            {careers.length === 0 && (
              <tr><td colSpan={3} className="p-4 text-center text-slate-500">No careers posted.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
