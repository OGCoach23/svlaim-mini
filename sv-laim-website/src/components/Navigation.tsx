'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function Navigation() {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">SV Laim</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="hover:text-blue-200 transition-colors"
            >
              Startseite
            </Link>
            
            {user ? (
              <>
                <Link 
                  href="/dashboard" 
                  className="hover:text-blue-200 transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition-colors"
                >
                  Abmelden
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition-colors"
              >
                Anmelden
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}