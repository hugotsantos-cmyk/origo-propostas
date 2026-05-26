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

    <div
      className="
        min-h-screen
        bg-[#EEF2F7]
        flex
      "
    >

      {/* SIDEBAR DESKTOP */}

      <aside
        className="
          hidden
          lg:flex
          flex-shrink-0
        "
      >
        <Sidebar />
      </aside>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div
          className="
            fixed
            inset-0
            z-50
            lg:hidden
          "
        >

          {/* OVERLAY */}

          <button
            className="
              absolute
              inset-0
              bg-black/30
            "
            onClick={() => setMenuOpen(false)}
          />

          {/* SIDEBAR */}

          <div
            className="
              relative
              z-50
              w-[280px]
              max-w-[85vw]
              h-full
              bg-white
              shadow-xl
            "
          >

            <Sidebar />

          </div>

        </div>

      )}

      {/* CONTEÚDO */}

      <main
        className="
          flex-1
          min-w-0
        "
      >

        {/* HEADER MOBILE */}

        <header
          className="
            lg:hidden
            sticky
            top-0
            z-40
            bg-white/95
            backdrop-blur-sm
            border-b
            border-gray-100
            px-4
            py-4
            flex
            items-center
            justify-between
          "
        >

          {/* MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(true)}
            className="
              w-11
              h-11
              rounded-2xl
              bg-[#832472]
              text-white
              text-xl
              flex
              items-center
              justify-center
              active:scale-95
              transition-transform
            "
          >
            ☰
          </button>

          {/* LOGO */}

          <h1
            className="
              text-base
              font-black
              text-[#832472]
              tracking-tight
            "
          >
            Órigo Energia
          </h1>

          {/* SPACE */}

          <div className="w-11" />

        </header>

        {/* PÁGINA */}

        <div
          className="
            p-4
            md:p-6
            lg:p-8
          "
        >
          {children}
        </div>

      </main>

    </div>

  )
}