'use client'

import Navigation from '@/components/Navigation'
import ProtectedRoute from '@/components/ProtectedRoute'
import { useAuth } from '@/contexts/AuthContext'

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Willkommen im Dashboard
            </h1>
            <p className="text-gray-600">
              Hallo {user?.email}! Hier finden Sie alle Informationen zu Ihrer Mitgliedschaft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mitgliedschaftsinfo */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">Mitgliedschaft</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Status: <span className="text-green-600 font-semibold">Aktiv</span></p>
                <p className="text-sm text-gray-600">Mitglied seit: Januar 2024</p>
                <p className="text-sm text-gray-600">Mitgliedsnummer: #12345</p>
              </div>
            </div>

            {/* Termine */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">Nächste Termine</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm font-medium">Fußballtraining</span>
                  <span className="text-xs text-gray-600">Mi, 18:00</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm font-medium">Vereinssitzung</span>
                  <span className="text-xs text-gray-600">Fr, 19:30</span>
                </div>
              </div>
            </div>

            {/* Neuigkeiten */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 17H4l5 5v-5zM12 3v18M5 5h14" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">Neuigkeiten</h3>
              </div>
              <div className="space-y-3">
                <div className="p-2 bg-gray-50 rounded">
                  <p className="text-sm font-medium">Neue Trainingszeiten</p>
                  <p className="text-xs text-gray-600">Ab nächster Woche gelten neue Zeiten...</p>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <p className="text-sm font-medium">Vereinsfest 2024</p>
                  <p className="text-xs text-gray-600">Save the Date: 15. Juni 2024</p>
                </div>
              </div>
            </div>

            {/* Beiträge */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">Beiträge</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Monatsbeitrag: 35,00 €</p>
                <p className="text-sm text-gray-600">Letzter Einzug: 01.12.2024</p>
                <p className="text-sm text-gray-600">Status: <span className="text-green-600 font-semibold">Aktuell</span></p>
              </div>
            </div>

            {/* Meine Gruppen */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">Meine Gruppen</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Herren 1. Mannschaft</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Aktiv</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Fitness-Gruppe</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Aktiv</span>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">Kontakt</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Geschäftsstelle:</p>
                <p className="text-sm text-gray-600">Mo-Fr: 9:00-17:00</p>
                <p className="text-sm text-gray-600">Tel: 089/123456</p>
                <p className="text-sm text-gray-600">info@sv-laim.de</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}