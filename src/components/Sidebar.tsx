import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Sidebar() {

  const location = useLocation()

  const menus = [

    {
      nome: 'Dashboard',
      rota: '/dashboard',
      icone: '🏠'
    },

    {
      nome: 'Nova Proposta',
      rota: '/nova-proposta',
      icone: '⚡'
    },

    {
      nome: 'Preview',
      rota: '/preview',
      icone: '📄'
    }

  ]

  return (
    <aside
      className="
        w-[320px]
        min-h-screen
        bg-white
        border-r
        border-gray-100
        shadow-xl
        flex
        flex-col
        justify-between
        relative
        overflow-hidden
      "
    >

      {/* SOL */}

      <div
        className="
          absolute
          top-[-120px]
          right-[-120px]
          w-[260px]
          h-[260px]
          rounded-full
          bg-[#FFC837]
          opacity-80
        "
      />

      {/* CONTEÚDO */}

      <div className="relative z-10">

        {/* LOGO */}

        <div className="p-10">

          <img
            src={logo}
            alt="Órigo Energia"
            className="w-40"
          />

          <p
            className="
              text-gray-500
              mt-6
              text-lg
              leading-relaxed
            "
          >
            Plataforma comercial premium para geração
            de propostas inteligentes.
          </p>

        </div>

        {/* MENU */}

        <div className="px-6 mt-6 space-y-3">

          {menus.map((menu) => {

            const ativo =
              location.pathname === menu.rota

            return (

              <Link
                key={menu.nome}
                to={menu.rota}
                className={`
                  flex
                  items-center
                  gap-5
                  px-6
                  py-5
                  rounded-[24px]
                  transition-all
                  duration-300
                  text-xl
                  font-bold

                  ${
                    ativo
                      ? `
                        bg-[#832472]
                        text-white
                        shadow-xl
                      `
                      : `
                        text-[#282828]
                        hover:bg-[#F6F2F8]
                      `
                  }
                `}
              >

                <span className="text-2xl">
                  {menu.icone}
                </span>

                <span>
                  {menu.nome}
                </span>

              </Link>

            )
          })}

        </div>

      </div>

      {/* FOOTER */}

      <div className="relative z-10 p-8">

        <div
          className="
            bg-gradient-to-r
            from-[#832472]
            to-[#5A189A]
            rounded-[32px]
            p-8
            text-white
            shadow-xl
            overflow-hidden
            relative
          "
        >

          {/* CÍRCULO */}

          <div
            className="
              absolute
              bottom-[-70px]
              right-[-70px]
              w-[180px]
              h-[180px]
              rounded-full
              bg-[#A4328C]
              opacity-40
            "
          />

          <div className="relative z-10">

            <p className="text-purple-200 text-sm">
              Energia Inteligente
            </p>

            <h2
              className="
                text-3xl
                font-black
                mt-4
                leading-tight
              "
            >
              Economia
              com energia
              renovável.
            </h2>

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">

                <span className="text-[#FFC837]">
                  ●
                </span>

                <span className="text-lg">
                  Sem instalação
                </span>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-[#FFC837]">
                  ●
                </span>

                <span className="text-lg">
                  Sem obras
                </span>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-[#FFC837]">
                  ●
                </span>

                <span className="text-lg">
                  Energia sustentável
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </aside>
  )
}