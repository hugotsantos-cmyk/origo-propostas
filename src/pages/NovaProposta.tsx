import { useState } from 'react'
import Layout from '../components/Layout'

export default function NovaProposta() {

  const [nomeCliente, setNomeCliente] = useState('')
  const [telefone, setTelefone] = useState('')
  const [tipoProposta, setTipoProposta] = useState('PF')

  const [mediaKwh, setMediaKwh] = useState(0)
  const [valorKwh, setValorKwh] = useState(0)
  const [desconto, setDesconto] = useState(18)

  const contaAtual = mediaKwh * valorKwh

  const economiaMensal =
    contaAtual * (desconto / 100)

  const economiaAnual =
    economiaMensal * 12

  const contaComDesconto =
    contaAtual - economiaMensal

  function gerarProposta() {

    const dados = {
      nomeCliente,
      telefone,
      mediaKwh,
      valorKwh,
      desconto,
      contaAtual,
      economiaMensal,
      economiaAnual,
      contaComDesconto,
      tipoProposta
    }

    localStorage.setItem(
      'proposta',
      JSON.stringify(dados)
    )

    window.location.href = '/preview'
  }

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

          <div className="relative z-10">

            <p
              className="
                uppercase
                tracking-[6px]
                text-sm
                text-purple-200
              "
            >
              Simulação Inteligente
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
              Gere propostas
              <br />
              premium em
              <br />
              segundos.
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
              Crie simulações comerciais modernas e apresente
              economia real para seus clientes com energia por assinatura.
            </p>

          </div>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

          {/* FORMULÁRIO */}

          <div
            className="
              xl:col-span-2
              bg-white
              rounded-[42px]
              shadow-xl
              p-12
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p
                  className="
                    uppercase
                    tracking-[4px]
                    text-sm
                    text-[#832472]
                    font-bold
                  "
                >
                  Dados da Proposta
                </p>

                <h2
                  className="
                    text-5xl
                    font-black
                    text-[#282828]
                    mt-4
                  "
                >
                  Nova simulação
                </h2>

              </div>

              <button
                onClick={gerarProposta}
                className="
                  bg-[#FFC837]
                  text-[#832472]
                  font-black
                  px-8
                  py-5
                  rounded-[22px]
                  text-xl
                  shadow-xl
                  hover:scale-105
                  transition
                "
              >
                Gerar Proposta
              </button>

            </div>

            {/* FORM */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

              {/* CLIENTE */}

              <div>

                <label
                  className="
                    text-sm
                    font-bold
                    text-[#832472]
                  "
                >
                  Nome do Cliente
                </label>

                <input
                  type="text"
                  placeholder="Digite o nome"
                  value={nomeCliente}
                  onChange={(e) => setNomeCliente(e.target.value)}
                  className="
                    w-full
                    h-16
                    mt-3
                    rounded-[22px]
                    border
                    border-gray-200
                    px-6
                    text-lg
                    outline-none
                    focus:border-[#832472]
                  "
                />

              </div>

              {/* TELEFONE */}

              <div>

                <label
                  className="
                    text-sm
                    font-bold
                    text-[#832472]
                  "
                >
                  Telefone
                </label>

                <input
                  type="text"
                  placeholder="(00) 00000-0000"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="
                    w-full
                    h-16
                    mt-3
                    rounded-[22px]
                    border
                    border-gray-200
                    px-6
                    text-lg
                    outline-none
                    focus:border-[#832472]
                  "
                />

              </div>

              {/* KWH */}

              <div>

                <label
                  className="
                    text-sm
                    font-bold
                    text-[#832472]
                  "
                >
                  Média kWh
                </label>

                <input
                  type="number"
                  placeholder="500"
                  value={mediaKwh}
                  onChange={(e) =>
                    setMediaKwh(Number(e.target.value))
                  }
                  className="
                    w-full
                    h-16
                    mt-3
                    rounded-[22px]
                    border
                    border-gray-200
                    px-6
                    text-lg
                    outline-none
                    focus:border-[#832472]
                  "
                />

              </div>

              {/* VALOR */}

              <div>

                <label
                  className="
                    text-sm
                    font-bold
                    text-[#832472]
                  "
                >
                  Valor do kWh
                </label>

                <input
                  type="number"
                  placeholder="1.13"
                  value={valorKwh}
                  onChange={(e) =>
                    setValorKwh(Number(e.target.value))
                  }
                  className="
                    w-full
                    h-16
                    mt-3
                    rounded-[22px]
                    border
                    border-gray-200
                    px-6
                    text-lg
                    outline-none
                    focus:border-[#832472]
                  "
                />

              </div>

              {/* DESCONTO */}

              <div>

                <label
                  className="
                    text-sm
                    font-bold
                    text-[#832472]
                  "
                >
                  Desconto %
                </label>

                <input
                  type="number"
                  placeholder="18"
                  value={desconto}
                  onChange={(e) =>
                    setDesconto(Number(e.target.value))
                  }
                  className="
                    w-full
                    h-16
                    mt-3
                    rounded-[22px]
                    border
                    border-gray-200
                    px-6
                    text-lg
                    outline-none
                    focus:border-[#832472]
                  "
                />

              </div>

              {/* TIPO */}

              <div>

                <label
                  className="
                    text-sm
                    font-bold
                    text-[#832472]
                  "
                >
                  Tipo de Cliente
                </label>

                <select
                  value={tipoProposta}
                  onChange={(e) =>
                    setTipoProposta(e.target.value)
                  }
                  className="
                    w-full
                    h-16
                    mt-3
                    rounded-[22px]
                    border
                    border-gray-200
                    px-6
                    text-lg
                    outline-none
                    focus:border-[#832472]
                  "
                >
                  <option>PF</option>
                  <option>PJ</option>
                  <option>Rural</option>
                  <option>Condomínio</option>
                </select>

              </div>

            </div>

          </div>

          {/* SIMULAÇÃO */}

          <div className="space-y-8">

            {/* CARD */}

            <div
              className="
                bg-white
                rounded-[42px]
                shadow-xl
                p-10
              "
            >

              <p className="text-gray-500 text-lg">
                Conta Atual
              </p>

              <h2
                className="
                  text-6xl
                  font-black
                  text-[#282828]
                  mt-6
                "
              >
                R$ {contaAtual.toFixed(0)}
              </h2>

            </div>

            {/* CARD */}

            <div
              className="
                bg-white
                rounded-[42px]
                shadow-xl
                p-10
              "
            >

              <p className="text-gray-500 text-lg">
                Economia Mensal
              </p>

              <h2
                className="
                  text-6xl
                  font-black
                  text-[#16968D]
                  mt-6
                "
              >
                R$ {economiaMensal.toFixed(0)}
              </h2>

            </div>

            {/* CARD */}

            <div
              className="
                bg-[#FFC837]
                rounded-[42px]
                shadow-xl
                p-10
              "
            >

              <p className="text-[#832472] text-lg font-bold">
                Economia Anual
              </p>

              <h2
                className="
                  text-6xl
                  font-black
                  text-[#832472]
                  mt-6
                "
              >
                R$ {economiaAnual.toFixed(0)}
              </h2>

            </div>

            {/* CARD ROXO */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[42px]
                bg-[#832472]
                p-10
                text-white
                shadow-xl
              "
            >

              {/* CÍRCULO */}

              <div
                className="
                  absolute
                  bottom-[-80px]
                  right-[-80px]
                  w-[220px]
                  h-[220px]
                  rounded-full
                  bg-[#A4328C]
                  opacity-40
                "
              />

              <div className="relative z-10">

                <p className="text-purple-200 text-lg">
                  Energia Inteligente
                </p>

                <h2
                  className="
                    text-4xl
                    font-black
                    mt-6
                    leading-tight
                  "
                >
                  Economia real
                  para o seu
                  cliente.
                </h2>

                <div className="mt-10 space-y-4 text-lg">

                  <div className="flex items-center gap-4">
                    <span className="text-[#FFC837]">●</span>
                    <span>Sem instalação</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-[#FFC837]">●</span>
                    <span>Sem obras</span>
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

      </div>

    </Layout>
  )
}