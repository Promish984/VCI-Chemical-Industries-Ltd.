import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../../lib/firebase';
import { Category } from '../../types';

export function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [newCatName, setNewCatName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const snapshot = await getDocs(query(collection(db, 'categories')));
      setCategories(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Category)));
      setLoading(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.LIST, 'categories');
      setLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!newCatName.trim()) return;

    try {
      const id = Date.now().toString();
      await setDoc(doc(db, 'categories', id), {
        name: newCatName,
        createdAt: serverTimestamp()
      });
      setNewCatName('');
      fetchCategories();
    } catch (err: any) {
      setError(err.message || 'Failed to add category');
      handleFirestoreError(err, OperationType.CREATE, 'categories');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure?')) return;
    try {
      await deleteDoc(doc(db, 'categories', id));
      fetchCategories();
    } catch (err: any) {
      setError(err.message || 'Failed to delete');
      handleFirestoreError(err, OperationType.DELETE, `categories/${id}`);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold mb-4">Add Category</h2>
        {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
        <form onSubmit={handleAdd} className="flex gap-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Category Name"
            value={newCatName}
            onChange={(e) => setNewCatName(e.target.value)}
          />
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="p-4 font-semibold text-slate-800">Name</th>
              <th className="p-4 font-semibold text-slate-800 w-32">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {categories.map(cat => (
              <tr key={cat.id} className="hover:bg-slate-50">
                <td className="p-4">{cat.name}</td>
                <td className="p-4">
                  <button onClick={() => handleDelete(cat.id)} className="text-red-600 hover:text-red-800 font-medium">Delete</button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan={2} className="p-4 text-center text-slate-500">No categories found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
