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
            rounded-[40px]
            bg-gradient-to-r
            from-[#832472]
            to-[#5A189A]
            p-12
            text-white
            shadow-2xl
          "
        >

          {/* ELEMENTOS DECORATIVOS */}

          <div
            className="
              absolute
              top-[-120px]
              right-[-120px]
              w-[320px]
              h-[320px]
              rounded-full
              bg-[#A4328C]
              opacity-30
            "
          />

          <div
            className="
              absolute
              bottom-[-100px]
              left-[-100px]
              w-[250px]
              h-[250px]
              rounded-full
              bg-[#FFC837]
              opacity-20
            "
          />

          <div className="relative z-10">

            <p
              className="
                uppercase
                tracking-[5px]
                text-sm
                text-purple-200
              "
            >
              Plataforma Comercial Órigo Energia
            </p>

            <h1
              className="
                text-5xl
                font-black
                mt-5
                leading-tight
                max-w-4xl
              "
            >
              Transforme contas de energia em
              economia inteligente.
            </h1>

            <p
              className="
                mt-6
                text-xl
                text-purple-100
                max-w-3xl
                leading-relaxed
              "
            >
              Gere propostas comerciais premium para clientes residenciais
              e empresas utilizando soluções modernas de energia por assinatura.
            </p>

            {/* BOTÕES */}

            <div className="flex gap-6 mt-10">

              <Link
                to="/nova-proposta"
                className="
                  bg-[#FFC837]
                  hover:scale-105
                  transition-all
                  text-[#832472]
                  px-10
                  py-5
                  rounded-[22px]
                  font-black
                  text-xl
                  shadow-2xl
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
                  px-10
                  py-5
                  rounded-[22px]
                  font-black
                  text-xl
                "
              >
                Visualizar Proposta
              </Link>

            </div>

          </div>

        </div>

        {/* CARDS */}

        <div className="grid grid-cols-4 gap-6">

          {/* CARD 1 */}

          <div
            className="
              bg-white
              rounded-[32px]
              shadow-xl
              p-10
              border
              border-gray-100
              hover:-translate-y-1
              transition-all
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
                mt-5
              "
            >
              18%
            </h2>

            <p
              className="
                text-gray-500
                text-xl
                mt-4
                leading-relaxed
              "
            >
              desconto estimado
            </p>

          </div>

          {/* CARD 2 */}

          <div
            className="
              bg-white
              rounded-[32px]
              shadow-xl
              p-10
              border
              border-gray-100
              hover:-translate-y-1
              transition-all
            "
          >

            <p className="text-gray-500 text-lg">
              Modelo
            </p>

            <h2
              className="
                text-5xl
                font-black
                text-[#832472]
                mt-5
                leading-tight
              "
            >
              Sem
              instalação
            </h2>

            <p
              className="
                text-gray-500
                text-xl
                mt-4
                leading-relaxed
              "
            >
              energia por assinatura
            </p>

          </div>

          {/* CARD 3 NOVO */}

          <div
            className="
              bg-[#16968D]
              rounded-[32px]
              shadow-xl
              p-10
              text-white
              hover:-translate-y-1
              transition-all
              relative
              overflow-hidden
            "
          >

            {/* EFEITO */}

            <div
              className="
                absolute
                top-[-60px]
                right-[-60px]
                w-[160px]
                h-[160px]
                rounded-full
                bg-white/10
              "
            />

            <div className="relative z-10">

              <p className="text-white/80 text-lg">
                Solução Homologada
              </p>

              <h2
                className="
                  text-5xl
                  font-black
                  mt-5
                  leading-tight
                "
              >
                Sem
                Fidelidade
              </h2>

              <p
                className="
                  text-white/80
                  text-xl
                  mt-4
                  leading-relaxed
                "
              >
                adesão simples
                <br />
                e sem burocracia
              </p>

            </div>

          </div>

          {/* CARD 4 */}

          <div
            className="
              bg-[#FFC837]
              rounded-[32px]
              shadow-xl
              p-10
              relative
              overflow-hidden
              hover:-translate-y-1
              transition-all
            "
          >

            <div
              className="
                absolute
                bottom-[-50px]
                right-[-50px]
                w-[150px]
                h-[150px]
                rounded-full
                bg-white/20
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-[#832472]
                  text-lg
                  font-semibold
                "
              >
                Energia Inteligente
              </p>

              <h2
                className="
                  text-6xl
                  font-black
                  text-[#832472]
                  mt-6
                "
              >
                Órigo
              </h2>

              <p
                className="
                  text-[#832472]
                  text-xl
                  mt-5
                  leading-relaxed
                "
              >
                sustentabilidade
                <br />
                e economia
              </p>

            </div>

          </div>

        </div>

        {/* SEÇÃO INFERIOR */}

        <div className="grid grid-cols-3 gap-6">

          {/* CARD */}

          <div
            className="
              bg-white
              rounded-[32px]
              shadow-xl
              p-8
              border
              border-gray-100
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-full
                bg-[#832472]/10
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              ⚡
            </div>

            <h3
              className="
                text-3xl
                font-black
                text-[#282828]
                mt-6
              "
            >
              Sem Obras
            </h3>

            <p
              className="
                text-gray-600
                text-lg
                mt-4
                leading-relaxed
              "
            >
              O cliente começa a economizar sem instalação
              de equipamentos ou mudanças na estrutura elétrica.
            </p>

          </div>

          {/* CARD */}

          <div
            className="
              bg-white
              rounded-[32px]
              shadow-xl
              p-8
              border
              border-gray-100
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-full
                bg-[#16968D]/10
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              💰
            </div>

            <h3
              className="
                text-3xl
                font-black
                text-[#282828]
                mt-6
              "
            >
              Economia Recorrente
            </h3>

            <p
              className="
                text-gray-600
                text-lg
                mt-4
                leading-relaxed
              "
            >
              Desconto mensal automático na conta de energia
              através de geração distribuída compartilhada.
            </p>

          </div>

          {/* CARD */}

          <div
            className="
              bg-gradient-to-r
              from-[#832472]
              to-[#5A189A]
              rounded-[32px]
              shadow-xl
              p-8
              text-white
              relative
              overflow-hidden
            "
          >

            <div
              className="
                absolute
                top-[-70px]
                right-[-70px]
                w-[180px]
                h-[180px]
                rounded-full
                bg-white/10
              "
            />

            <div className="relative z-10">

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-xs
                  text-purple-200
                "
              >
                Plataforma Premium
              </p>

              <h3
                className="
                  text-4xl
                  font-black
                  mt-5
                  leading-tight
                "
              >
                Propostas profissionais em poucos minutos.
              </h3>

              <p
                className="
                  text-purple-100
                  text-lg
                  mt-5
                  leading-relaxed
                "
              >
                Gere apresentações comerciais premium para aumentar
                conversão e fortalecer sua autoridade comercial.
              </p>

            </div>

          </div>

        </div>

      </div>

    </Layout>
  )
}