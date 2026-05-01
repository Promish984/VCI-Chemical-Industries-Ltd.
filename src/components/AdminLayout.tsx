import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, FolderTree, MessageSquare, Briefcase, LogOut, Settings } from 'lucide-react';
import { cn } from '../lib/utils';
import { auth } from '../lib/firebase';

const ADMIN_LINKS = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Products', path: '/admin/products', icon: Package },
  { name: 'Categories', path: '/admin/categories', icon: FolderTree },
  { name: 'Contact Data', path: '/admin/inquiries', icon: MessageSquare },
  { name: 'Careers', path: '/admin/careers', icon: Briefcase },
];

export const AdminLayout: React.FC = () => {
  const location = useLocation();

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shadow-2xl">
        <div className="h-20 flex items-center px-6 bg-slate-950">
          <Link to="/" className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Settings className="text-blue-500" />
            VCI Admin
          </Link>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {ADMIN_LINKS.map(link => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive ? "bg-blue-600 text-white" : "hover:bg-slate-800 hover:text-white"
                )}
              >
                <Icon size={20} />
                <span className="font-medium">{link.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 bg-slate-950">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-900 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center px-8">
          <h1 className="text-2xl font-bold text-slate-800">
            {ADMIN_LINKS.find(link => link.path === location.pathname)?.name || 'Admin Panel'}
          </h1>
        </header>
        <div className="flex-1 overflow-auto p-8 bg-slate-50">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
