'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Diensten', href: '/diensten' },
  { name: 'Over Ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center transform transition hover:scale-105">
              <Image
                src="/Logo.svg"
                alt="Floris Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  group hover:text-blue-600
                  ${pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-600'
                  }
                `}
              >
                {item.name}
                <span className={`
                  absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-bottom scale-x-0 
                  transition-transform duration-200 group-hover:scale-x-100
                  ${pathname === item.href ? 'scale-x-100' : ''}
                `} />
              </Link>
            ))}
            
            {/* Contact Button */}
            <Link
              href="/contact"
              className="
                ml-6 px-4 py-2 text-sm font-medium rounded-lg
                text-white bg-gradient-to-r from-blue-600 to-blue-700
                hover:from-blue-700 hover:to-blue-800
                transform transition-all duration-200 hover:scale-[1.02]
                shadow-sm hover:shadow-md
              "
            >
              Neem contact op
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`
          md:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-md border-b border-gray-100
          transition-all duration-300 transform
          ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  block px-4 py-2.5 text-base font-medium rounded-lg transition-colors
                  ${pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="
                block w-full text-center px-4 py-2.5 rounded-lg text-base font-medium 
                text-white bg-gradient-to-r from-blue-600 to-blue-700
                hover:from-blue-700 hover:to-blue-800 transform transition-all duration-200
                shadow-sm hover:shadow-md
              "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}