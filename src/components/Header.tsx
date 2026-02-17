'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AI Crew</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-600 hover:text-indigo-600 transition">機能</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-indigo-600 transition">料金</Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-indigo-600 transition">ダッシュボード</Link>
            <Link href="/dashboard" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              無料で始める
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/#features" className="block text-gray-600 hover:text-indigo-600">機能</Link>
            <Link href="/pricing" className="block text-gray-600 hover:text-indigo-600">料金</Link>
            <Link href="/dashboard" className="block text-gray-600 hover:text-indigo-600">ダッシュボード</Link>
            <Link href="/dashboard" className="block bg-indigo-600 text-white px-4 py-2 rounded-lg text-center">
              無料で始める
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
