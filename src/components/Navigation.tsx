'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Next.js Demo
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              首页
            </Link>
            <Link href="/components" className="text-gray-600 hover:text-gray-900 transition-colors">
              组件
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              关于
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                首页
              </Link>
              <Link href="/components" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                组件
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                关于
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}