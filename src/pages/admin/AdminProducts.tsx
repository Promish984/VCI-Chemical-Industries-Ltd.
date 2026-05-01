import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../../lib/firebase';
import { Product, Category } from '../../types';

export function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // form
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const catSnap = await getDocs(query(collection(db, 'categories')));
      setCategories(catSnap.docs.map(d => ({ id: d.id, ...d.data() } as Category)));

      const prodSnap = await getDocs(query(collection(db, 'products')));
      setProducts(prodSnap.docs.map(d => ({ id: d.id, ...d.data() } as Product)));
      setLoading(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.LIST, 'products/categories');
      setLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !categoryId || !description) return;
    try {
      const id = Date.now().toString();
      const payload: any = {
         name,
         categoryId,
         description,
         createdAt: serverTimestamp(),
         updatedAt: serverTimestamp()
      };
      if (imageUrl) payload.imageUrl = imageUrl;
      
      await setDoc(doc(db, 'products', id), payload);
      setName(''); setCategoryId(''); setDescription(''); setImageUrl('');
      fetchData();
    } catch (err: any) {
      setError(err.message || 'Failed to add product');
      handleFirestoreError(err, OperationType.CREATE, 'products');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete product?')) return;
    try {
      await deleteDoc(doc(db, 'products', id));
      fetchData();
    } catch (err: any) {
      setError(err.message || 'Failed to delete');
      handleFirestoreError(err, OperationType.DELETE, `products/${id}`);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleAdd} className="space-y-4 max-w-2xl">
          <div className="grid grid-cols-2 gap-4">
            <input className="px-4 py-2 border rounded-lg" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} required />
            <select className="px-4 py-2 border rounded-lg" value={categoryId} onChange={e => setCategoryId(e.target.value)} required>
              <option value="">Select Category</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <input className="w-full px-4 py-2 border rounded-lg" placeholder="Image URL (optional)" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
          <textarea className="w-full px-4 py-2 border rounded-lg" placeholder="Description" rows={4} value={description} onChange={e => setDescription(e.target.value)} required></textarea>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add Product</button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="p-4 font-semibold text-slate-800">Image</th>
              <th className="p-4 font-semibold text-slate-800">Name</th>
              <th className="p-4 font-semibold text-slate-800">Category</th>
              <th className="p-4 font-semibold text-slate-800 w-32">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {products.map(p => (
              <tr key={p.id}>
                <td className="p-4">{p.imageUrl ? <img src={p.imageUrl} className="w-12 h-12 object-cover rounded" /> : 'None'}</td>
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4 text-slate-500">{categories.find(c => c.id === p.categoryId)?.name}</td>
                <td className="p-4">
                  <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr><td colSpan={4} className="p-4 text-center text-slate-500">No products found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
