import React, { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { Product, Category } from '../types';

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const catSnapshot = await getDocs(collection(db, 'categories'));
        const cats = catSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Category));
        setCategories(cats);

        const prodSnapshot = await getDocs(collection(db, 'products'));
        const prods = prodSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
        setProducts(prods);
      } catch (error) {
        handleFirestoreError(error, OperationType.LIST, 'categories/products');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredProducts = selectedCategory 
    ? products.filter(p => p.categoryId === selectedCategory)
    : products;

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Products & Services</h1>
          <p className="text-xl text-slate-600">
            Discover our diverse portfolio of specialty chemicals, engineered carbon, and advanced materials designed for modern industrial applications.
          </p>
        </div>

        {loading ? (
          <div>Loading products...</div>
        ) : (
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar Categories */}
            <div className="w-full md:w-64 flex-shrink-0">
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${
                      selectedCategory === null ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${
                        selectedCategory === cat.id ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition">
                  <div className="h-48 bg-slate-200 relative">
                     {product.imageUrl ? (
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                     ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">No Image provided</div>
                     )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">
                      {categories.find(c => c.id === product.categoryId)?.name || 'Uncategorized'}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-slate-600 line-clamp-3">{product.description}</p>
                  </div>
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-12 text-center text-slate-500 bg-white border border-slate-200 rounded-xl border-dashed">
                  No products found in this category.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
