import React from "react";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-green-200">
    <h1 className="font-heading text-6xl md:text-7xl font-bold text-slate-900 mb-4">404</h1>
    <p className="text-base text-slate-700 mb-8">Page Not Found</p>
    <a href="/" className="text-sm text-slate-900 underline underline-offset-4 hover:opacity-70 transition-opacity">
      Go Home
    </a>
  </div>
);

export default NotFound;
