import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Dashboard() {

  return (

    <Layout>

      <div className="space-y-6 md:space-y-8">

        {/* HERO */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            md:rounded-[36px]
            bg-gradient-to-r
            from-[#832472]
            to-[#5A189A]
            px-6
            py-8
            md:px-10
            md:py-10
            text-white
            shadow-2xl
          "
        >

          {/* EFEITOS */}

          <div
            className="
              absolute
              top-[-100px]
              right-[-100px]
              w-[220px]
              h-[220px]
              md:w-[260px]
              md:h-[260px]
              rounded-full
              bg-[#A4328C]
              opacity-20
            "
          />

          <div
            className="
              absolute
              bottom-[-90px]
              left-[-90px]
              w-[180px]
              h-[180px]
              md:w-[220px]
              md:h-[220px]
              rounded-full
              bg-[#FFC837]
              opacity-10
            "
          />

          <div className="relative z-10">

            <p
              className="
                uppercase
                tracking-[3px]
                text-[10px]
                md:text-xs
                text-purple-200
                font-semibold
              "
            >
              Plataforma Comercial Órigo Energia
            </p>

            <h1
              className="
                text-3xl
                md:text-5xl
                font-black
                mt-4
                leading-tight
                max-w-3xl
              "
            >
              Gere propostas comerciais
              premium com rapidez.
            </h1>

            <p
              className="
                mt-4
                text-base
                md:text-lg
                text-purple-100
                max-w-2xl
                leading-relaxed
              "
            >
              Plataforma inteligente para geração de propostas
              comerciais com energia por assinatura.
            </p>

            {/* BOTÕES */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                mt-8
              "
            >

              <Link
                to="/nova-proposta"
                className="
                  bg-[#FFC837]
                  hover:scale-[1.02]
                  transition-all
                  text-[#832472]
                  px-6
                  py-4
                  rounded-[18px]
                  font-black
                  text-base
                  md:text-lg
                  shadow-xl
                  text-center
                "
              >
                Nova Proposta
              </Link>

              <Link
                to="/preview"
                className="
                  bg-white/10
                  backdrop-blur-sm
                  border
                  border-white/20
                  hover:bg-white/20
                  transition-all
                  text-white
                  px-6
                  py-4
                  rounded-[18px]
                  font-black
                  text-base
                  md:text-lg
                  text-center
                "
              >
                Visualizar
              </Link>

            </div>

          </div>

        </div>

        {/* CARDS */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
          "
        >

          {/* CARD 1 */}

          <Link
            to="/nova-proposta"
            className="
              bg-[#FFC837]
              rounded-[28px]
              shadow-xl
              p-6
              relative
              overflow-hidden
              hover:-translate-y-1
              hover:scale-[1.01]
              transition-all
              min-h-[200px]
              flex
              flex-col
              justify-between
            "
          >

            <div
              className="
                absolute
                bottom-[-40px]
                right-[-40px]
                w-[120px]
                h-[120px]
                rounded-full
                bg-white/20
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-[#832472]
                  text-sm
                  font-semibold
                "
              >
                Principal ação
              </p>

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                  text-[#832472]
                  mt-4
                  leading-tight
                "
              >
                Criar
                <br />
                Proposta
              </h2>

            </div>

            <p
              className="
                relative
                z-10
                text-[#832472]
                text-sm
                md:text-base
                leading-relaxed
                font-medium
              "
            >
              Gere propostas premium
              em poucos minutos.
            </p>

          </Link>

          {/* CARD 2 */}

          <Link
            to="/preview"
            className="
              bg-white
              rounded-[28px]
              shadow-xl
              border
              border-gray-100
              p-6
              hover:-translate-y-1
              hover:scale-[1.01]
              transition-all
              min-h-[200px]
              flex
              flex-col
              justify-between
            "
          >

            <div>

              <p className="text-gray-500 text-sm">
                Histórico
              </p>

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                  text-[#832472]
                  mt-4
                  leading-tight
                "
              >
                Propostas
              </h2>

            </div>

            <p
              className="
                text-gray-500
                text-sm
                md:text-base
                leading-relaxed
              "
            >
              Visualize rapidamente
              propostas geradas.
            </p>

          </Link>

          {/* CARD 3 */}

          <div
            className="
              bg-white
              rounded-[28px]
              shadow-xl
              border
              border-gray-100
              p-6
              min-h-[200px]
              flex
              flex-col
              justify-between
            "
          >

            <div>

              <p className="text-gray-500 text-sm">
                Economia média
              </p>

              <h2
                className="
                  text-5xl
                  md:text-6xl
                  font-black
                  text-[#16968D]
                  mt-3
                "
              >
                18%
              </h2>

            </div>

            <p
              className="
                text-gray-500
                text-sm
                md:text-base
                leading-relaxed
              "
            >
              desconto estimado
              na conta de energia.
            </p>

          </div>

          {/* CARD 4 */}

          <div
            className="
              bg-[#16968D]
              rounded-[28px]
              shadow-xl
              p-6
              text-white
              relative
              overflow-hidden
              min-h-[200px]
              flex
              flex-col
              justify-between
            "
          >

            <div
              className="
                absolute
                top-[-40px]
                right-[-40px]
                w-[120px]
                h-[120px]
                rounded-full
                bg-white/10
              "
            />

            <div className="relative z-10">

              <p className="text-white/80 text-sm">
                Solução homologada
              </p>

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                  mt-4
                  leading-tight
                "
              >
                Sem
                <br />
                fidelidade
              </h2>

            </div>

            <p
              className="
                relative
                z-10
                text-white/90
                text-sm
                md:text-base
                leading-relaxed
              "
            >
              Adesão simples,
              sem burocracia
              e sem instalação.
            </p>

          </div>

        </div>

      </div>

    </Layout>

  )
}