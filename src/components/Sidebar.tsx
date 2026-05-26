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
        w-[280px]
        lg:w-[300px]
        min-h-screen
        bg-white
        border-r
        border-gray-100
        flex
        flex-col
        justify-between
      "
    >

      {/* CONTEÚDO */}

      <div>

        {/* LOGO */}

        <div className="px-6 pt-8 pb-6">

          <img
            src={logo}
            alt="Órigo Energia"
            className="
              w-24
              lg:w-32
              opacity-90
            "
          />

          <p
            className="
              text-gray-500
              mt-4
              text-sm
              leading-relaxed
            "
          >
            Plataforma comercial para geração
            de propostas inteligentes.
          </p>

        </div>

        {/* MENU */}

        <nav className="px-4 space-y-2">

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
                  gap-4
                  px-5
                  py-4
                  rounded-2xl
                  transition-all
                  text-base
                  font-bold

                  ${
                    ativo
                      ? `
                        bg-[#832472]
                        text-white
                      `
                      : `
                        text-[#282828]
                        hover:bg-[#F6F2F8]
                      `
                  }
                `}
              >

                <span className="text-xl">
                  {menu.icone}
                </span>

                <span>
                  {menu.nome}
                </span>

              </Link>

            )
          })}

        </nav>

      </div>

      {/* FOOTER */}

      <div className="p-4">

        <div
          className="
            bg-[#832472]
            rounded-[24px]
            p-5
            text-white
          "
        >

          <p className="text-purple-200 text-xs">
            Energia Inteligente
          </p>

          <h2
            className="
              text-xl
              font-black
              mt-3
              leading-tight
            "
          >
            Economia com
            energia renovável.
          </h2>

          <div className="mt-5 space-y-2">

            <div className="flex items-center gap-2">

              <span className="text-[#FFC837]">
                ●
              </span>

              <span className="text-sm">
                Sem instalação
              </span>

            </div>

            <div className="flex items-center gap-2">

              <span className="text-[#FFC837]">
                ●
              </span>

              <span className="text-sm">
                Sem obras
              </span>

            </div>

            <div className="flex items-center gap-2">

              <span className="text-[#FFC837]">
                ●
              </span>

              <span className="text-sm">
                Energia sustentável
              </span>

            </div>

          </div>

        </div>

      </div>

    </aside>

  )
}