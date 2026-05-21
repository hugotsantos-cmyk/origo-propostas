import { useState } from 'react'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({
  children
}: LayoutProps) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex bg-[#EEF2F7] min-h-screen">

      {/* SIDEBAR DESKTOP */}

      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* SIDEBAR MOBILE */}

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">

          {/* OVERLAY */}

          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />

          {/* MENU */}

          <div className="relative z-50">

            <Sidebar />

          </div>

        </div>
      )}

      {/* CONTEÚDO */}

      <main className="flex-1 overflow-auto">

        {/* HEADER MOBILE */}

        <div className="lg:hidden bg-white px-6 py-5 shadow-sm flex items-center justify-between">

          <button
            onClick={() => setMenuOpen(true)}
            className="bg-slate-900 text-white w-12 h-12 rounded-2xl text-2xl"
          >
            ☰
          </button>

          <h2 className="text-xl font-bold text-gray-900">
            Órigo Energia
          </h2>

          <div className="w-12" />

        </div>

        {/* PÁGINA */}

        <div className="p-4 lg:p-8">
          {children}
        </div>

      </main>

    </div>
  )
}