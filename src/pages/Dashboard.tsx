import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Dashboard() {

  return (
    <Layout>

      <div className="space-y-10">

        {/* HERO */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[42px]
            bg-gradient-to-r
            from-[#832472]
            to-[#5A189A]
            p-14
            text-white
            shadow-2xl
          "
        >

          {/* SOL */}

          <div
            className="
              absolute
              top-[-120px]
              right-[-120px]
              w-[320px]
              h-[320px]
              bg-[#FFC837]
              rounded-full
              opacity-90
            "
          />

          {/* CONTEÚDO */}

          <div className="relative z-10">

            <p
              className="
                uppercase
                tracking-[6px]
                text-sm
                text-purple-200
              "
            >
              Plataforma Comercial
            </p>

            <h1
              className="
                text-6xl
                lg:text-7xl
                font-black
                leading-tight
                mt-6
                max-w-4xl
              "
            >
              Bem-vindo ao
              <br />

              sistema Órigo
              <br />

              Energia
            </h1>

            <p
              className="
                mt-8
                text-2xl
                text-purple-100
                leading-relaxed
                max-w-3xl
              "
            >
              Gere propostas premium, simulações inteligentes e
              apresente soluções modernas de energia por assinatura.
            </p>

            {/* BOTÕES */}

            <div className="flex gap-6 mt-12 flex-wrap">

              <Link
                to="/nova-proposta"
                className="
                  bg-[#FFC837]
                  text-[#832472]
                  font-black
                  px-10
                  py-5
                  rounded-[22px]
                  text-xl
                  shadow-xl
                  hover:scale-105
                  transition
                "
              >
                Nova Proposta
              </Link>

              <Link
                to="/preview"
                className="
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/20
                  text-white
                  font-bold
                  px-10
                  py-5
                  rounded-[22px]
                  text-xl
                  hover:bg-white/20
                  transition
                "
              >
                Visualizar Proposta
              </Link>

            </div>

          </div>

        </div>

        {/* CARDS */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* CARD */}

          <div
            className="
              bg-white
              rounded-[36px]
              p-10
              shadow-xl
              border
              border-gray-100
            "
          >

            <p className="text-gray-500 text-lg">
              Economia Média
            </p>

            <h2
              className="
                text-6xl
                font-black
                text-[#16968D]
                mt-6
              "
            >
              18%
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              desconto estimado
            </p>

          </div>

          {/* CARD */}

          <div
            className="
              bg-white
              rounded-[36px]
              p-10
              shadow-xl
              border
              border-gray-100
            "
          >

            <p className="text-gray-500 text-lg">
              Modelo
            </p>

            <h2
              className="
                text-4xl
                font-black
                text-[#832472]
                mt-6
                leading-tight
              "
            >
              Sem
              <br />
              instalação
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              energia por assinatura
            </p>

          </div>

          {/* CARD */}

          <div
            className="
              bg-white
              rounded-[36px]
              p-10
              shadow-xl
              border
              border-gray-100
            "
          >

            <p className="text-gray-500 text-lg">
              Plataforma
            </p>

            <h2
              className="
                text-5xl
                font-black
                text-[#282828]
                mt-6
              "
            >
              SaaS
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              experiência premium
            </p>

          </div>

          {/* CARD */}

          <div
            className="
              bg-[#FFC837]
              rounded-[36px]
              p-10
              shadow-xl
            "
          >

            <p className="text-[#832472] text-lg font-bold">
              Energia Inteligente
            </p>

            <h2
              className="
                text-5xl
                font-black
                text-[#832472]
                mt-6
                leading-tight
              "
            >
              Órigo
            </h2>

            <p className="text-[#832472] mt-4 text-lg">
              sustentabilidade e economia
            </p>

          </div>

        </div>

        {/* ÁREA INSTITUCIONAL */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* BLOCO */}

          <div
            className="
              bg-white
              rounded-[42px]
              shadow-xl
              p-12
            "
          >

            <p
              className="
                uppercase
                tracking-[4px]
                text-sm
                text-[#832472]
                font-bold
              "
            >
              Sobre a plataforma
            </p>

            <h2
              className="
                text-5xl
                font-black
                text-[#282828]
                mt-6
                leading-tight
              "
            >
              Propostas comerciais
              com identidade premium.
            </h2>

            <p
              className="
                mt-8
                text-xl
                text-gray-600
                leading-relaxed
              "
            >
              O sistema Órigo foi desenvolvido para gerar propostas
              modernas, profissionais e altamente comerciais,
              proporcionando uma experiência visual premium para seus clientes.
            </p>

          </div>

          {/* BLOCO */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[42px]
              bg-[#832472]
              p-12
              text-white
              shadow-xl
            "
          >

            {/* CÍRCULO */}

            <div
              className="
                absolute
                bottom-[-100px]
                right-[-100px]
                w-[260px]
                h-[260px]
                rounded-full
                bg-[#A4328C]
                opacity-40
              "
            />

            <div className="relative z-10">

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-sm
                  text-purple-200
                  font-bold
                "
              >
                Energia Inteligente
              </p>

              <h2
                className="
                  text-5xl
                  font-black
                  mt-6
                  leading-tight
                "
              >
                Sustentabilidade
                com economia
                recorrente.
              </h2>

              <div className="mt-10 space-y-5 text-xl">

                <div className="flex items-center gap-4">
                  <span className="text-[#FFC837]">●</span>
                  <span>Sem obras</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#FFC837]">●</span>
                  <span>Sem investimento inicial</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#FFC837]">●</span>
                  <span>Economia automática</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#FFC837]">●</span>
                  <span>Energia renovável</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </Layout>
  )
}