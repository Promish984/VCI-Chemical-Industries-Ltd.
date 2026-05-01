import React from 'react';

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 text-center px-4">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
      <p className="text-lg text-slate-600 max-w-lg">
        This section is currently being updated with our latest corporate documentation and insights. Please check back soon.
      </p>
    </div>
  );
}
