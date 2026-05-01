import React, { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../../lib/firebase';
import { Link } from 'react-router-dom';
import { Package, FolderTree, MessageSquare, Briefcase } from 'lucide-react';

export function AdminDashboard() {
  const [stats, setStats] = useState({
    products: 0,
    categories: 0,
    inquiries: 0,
    careers: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [prodSnap, catSnap, inqSnap, carSnap] = await Promise.all([
          getDocs(query(collection(db, 'products'))),
          getDocs(query(collection(db, 'categories'))),
          getDocs(query(collection(db, 'contactInquiries'))),
          getDocs(query(collection(db, 'careers')))
        ]);

        setStats({
          products: prodSnap.size,
          categories: catSnap.size,
          inquiries: inqSnap.size,
          careers: carSnap.size
        });
        setLoading(false);
      } catch (err) {
        console.error("Dashboard error", err);
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <div>Loading dashboard stats...</div>;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-slate-800">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Products"
          value={stats.products}
          icon={<Package className="w-8 h-8 text-blue-500" />}
          linkTo="/admin/products"
          color="bg-blue-50"
        />
         <StatCard
          title="Categories"
          value={stats.categories}
          icon={<FolderTree className="w-8 h-8 text-indigo-500" />}
          linkTo="/admin/categories"
          color="bg-indigo-50"
        />
         <StatCard
          title="Contact Inquiries"
          value={stats.inquiries}
          icon={<MessageSquare className="w-8 h-8 text-emerald-500" />}
          linkTo="/admin/inquiries"
          color="bg-emerald-50"
        />
         <StatCard
          title="Open Careers"
           value={stats.careers}
          icon={<Briefcase className="w-8 h-8 text-orange-500" />}
          linkTo="/admin/careers"
          color="bg-orange-50"
        />
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, linkTo, color }: { title: string, value: number, icon: React.ReactNode, linkTo: string, color: string }) {
  return (
    <Link to={linkTo} className={`flex items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group`}>
      <div className={`p-4 rounded-xl ${color} mr-4 group-hover:scale-105 transition-transform`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-3xl font-bold text-slate-900">{value}</p>
      </div>
    </Link>
  );
}
