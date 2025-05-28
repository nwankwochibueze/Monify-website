import React from "react";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-green-200">
    <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
    <p className="text-xl text-slate-700 mb-8">Page Not Found</p>
    <a href="/" className="text-green-700 underline">
      Go Home
    </a>
  </div>
);

export default NotFound;
