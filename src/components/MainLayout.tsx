import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products & Services', path: '/products' },
  { name: 'Industries Served', path: '/industries' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Manufacturing', path: '/manufacturing' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export const MainLayout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold tracking-tight flex flex-col">
                <span className="text-blue-400">VCI</span>
                <span className="text-xs font-medium text-slate-300 uppercase tracking-widest">Chemical Industries</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-400",
                    location.pathname === link.path ? "text-blue-400" : "text-slate-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-slate-800"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      location.pathname === link.path ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 gap-y-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">VCI Chemical Industries Ltd.</h3>
            <p className="text-sm leading-relaxed">
              Leading the way in advanced materials, carbon products, and specialty chemicals globally.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/sustainability" className="hover:text-blue-400 transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Operations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/manufacturing" className="hover:text-blue-400 transition-colors">Manufacturing</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link></li>
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">Industries Served</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>info@vcichemicals.com</li>
              <li>+91 (0) 000 000 0000</li>
              <li>Mumbai, Maharashtra, India</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} VCI Chemical Industries Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
