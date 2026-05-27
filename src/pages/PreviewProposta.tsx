import html2pdf from 'html2pdf.js'
import Layout from '../components/Layout'
import logo from '../assets/logo.png'

export default function PreviewProposta() {

  const dados = JSON.parse(localStorage.getItem('proposta') || '{}')

  const gerarPDF = () => {

    const elemento = document.getElementById('proposta')

    const options = {
      margin: 0,

      filename: 'proposta-origo.pdf',

      image: {
        type: 'jpeg',
        quality: 1
      },

      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      },

      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'landscape',
        compress: false
      },

      pagebreak: {
        mode: ['css']
      }
    }

    html2pdf()
      .set(options)
      .from(elemento)
      .save()
  }

  const dataAtual =
    new Date().toLocaleDateString('pt-BR')

  const isPJ = dados.tipoProposta === 'PJ'

  const tituloPrincipal = isPJ
    ? 'Redução inteligente de custos operacionais'
    : 'Economia inteligente para sua casa'

  const subtituloPrincipal = isPJ
    ? 'Otimize os gastos com energia elétrica através de uma solução sustentável, moderna e escalável.'
    : 'Reduza sua conta de energia sem instalação, sem obras e sem burocracia.'

  const textoLateral = isPJ
    ? 'Energia renovável com economia recorrente para empresas que desejam crescer de forma inteligente.'
    : 'Energia limpa e economia automática para sua residência sem necessidade de instalação.'

  const bullets = isPJ
    ? [
        'Redução de custos operacionais',
        'Sem investimento inicial',
        'Previsibilidade financeira'
      ]
    : [
        'Sem obras',
        'Sem instalação',
        'Economia automática'
      ]

  const seloInferior = isPJ
    ? 'Energia Inteligente para Empresas Modernas'
    : 'Economia inteligente para sua residência'

  return (
    <Layout>

      <style>
        {`
          .pdf-page {
            width: 297mm;
            height: 210mm;
            background: white;
            overflow: hidden;
            position: relative;
            margin: 0 auto;
            page-break-after: always;
          }

          .pdf-page:last-child {
            page-break-after: auto;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-end mb-6">

          <button
            onClick={gerarPDF}
            className="
              bg-[#832472]
              hover:opacity-90
              transition
              text-white
              px-8
              py-4
              rounded-[20px]
              font-bold
              shadow-[0_10px_35px_rgba(131,36,114,0.10)]
              text-lg
            "
          >
            Baixar PDF
          </button>

        </div>

        <div id="proposta" className="bg-[#ECECEC]">

          {/* ======================= */}
          {/* PÁGINA 1 */}
          {/* ======================= */}

          <div className="pdf-page">

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

            <div
              className="
                grid
                grid-cols-2
                gap-8
                px-10
                pt-4
                pb-8
                h-full
              "
            >

              {/* ESQUERDA */}

              <div className="flex flex-col justify-start pt-0">

                <div>

                  <div className="flex flex-col items-start mb-0">

                    <img
                      src={logo}
                      alt="Órigo Energia"
                      className="
                        w-16
                        object-contain
                        opacity-90
                      "
                    />

                  </div>

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-full
                      border
                      border-[#832472]/10
                      text-[#832472]
                      text-sm
                      font-semibold
                      mb-5
                      bg-white
                      shadow-[0_4px_18px_rgba(15,23,42,0.04)]
                    "
                  >
                    Economia • Sustentabilidade • Simplicidade
                  </div>

                  <p className="text-xs tracking-[3px] uppercase text-gray-400 mb-3">
                    SOLUÇÃO HOMOLOGADA ANEEL • ENERGIA LIMPA POR ASSINATURA
                  </p>

                  <h1
                    className="
                      text-5xl
                      font-extrabold
                      leading-tight
                      text-[#282828]
                    "
                  >
                    {tituloPrincipal}
                  </h1>

                  <h2
                    className="
                      text-3xl
                      font-extrabold
                      text-[#832472]
                      mt-3
                    "
                  >
                    {dados.nomeCliente}
                  </h2>

                  <p
                    className="
                      mt-5
                      text-base
                      text-gray-600
                      leading-relaxed
                      max-w-2xl
                    "
                  >
                    {subtituloPrincipal}
                  </p>

                </div>

                {/* CARDS */}

                <div className="flex gap-4 mt-6">

                  <div
                    className="
                      bg-white
                      border border-white/40
                      backdrop-blur-sm
                      rounded-[22px]
                      shadow-[0_4px_18px_rgba(15,23,42,0.05)]
                      px-4
                      py-3
                      w-36
                    "
                  >

                    <p className="text-gray-500 text-xs">
                      Consumo Médio
                    </p>

                    <h3 className="text-3xl font-extrabold text-[#832472] mt-2">
                      {dados.mediaKwh}
                    </h3>

                    <p className="text-gray-500 mt-1 text-xs">
                      kWh/mês
                    </p>

                  </div>

                  <div
                    className="
                      bg-white
                      border border-white/40
                      backdrop-blur-sm
                      rounded-[22px]
                      shadow-[0_4px_18px_rgba(15,23,42,0.05)]
                      px-4
                      py-3
                      w-36
                    "
                  >

                    <p className="text-gray-500 text-xs">
                      Desconto
                    </p>

                    <h3 className="text-3xl font-extrabold text-[#16968D] mt-2">
                      {dados.desconto}%
                    </h3>

                    <p className="text-gray-500 mt-1 text-xs">
                      estimado
                    </p>

                  </div>

                  <div
                    className="
                      bg-white
                      border border-white/40
                      backdrop-blur-sm
                      rounded-[22px]
                      shadow-[0_4px_18px_rgba(15,23,42,0.05)]
                      px-4
                      py-3
                      w-36
                    "
                  >

                    <p className="text-gray-500 text-xs">
                      Modelo
                    </p>

                    <h3 className="text-lg font-extrabold text-[#282828] mt-2">
                      Sem instalação
                    </h3>

                  </div>

                </div>

                <p className="mt-5 text-gray-500 text-xs">
                  Proposta personalizada • {dataAtual}
                </p>

              </div>

              {/* DIREITA */}

              <div className="flex items-center justify-center">

                <div
                  className="
                    bg-[#8E2A7B]
                    text-white
                    rounded-[34px]
                    p-7
                    w-full
                    max-w-[420px]
                    relative
                    overflow-hidden
                    shadow-[0_10px_35px_rgba(131,36,114,0.10)]
                  "
                >

                  <div
                    className="
                      absolute
                      top-[-80px]
                      right-[-80px]
                      w-[220px]
                      h-[220px]
                      bg-[#A4328C]
                      rounded-full
                      opacity-30
                    "
                  />

                  <div
                    className="
                      inline-flex
                      bg-[#FFC837]
                      text-[#832472]
                      font-black
                      rounded-full
                      px-5
                      py-2
                      text-sm
                      mb-6
                    "
                  >
                    Energia por Assinatura
                  </div>

                  <h2 className="text-3xl font-extrabold leading-tight">
                    O jeito de
                    <br />
                    consumir energia
                    <br />
                    mudou.
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-purple-100">
                    {textoLateral}
                  </p>

                  <div className="mt-6 space-y-3 text-base">

                    {bullets.map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <span className="text-[#FFC837]">●</span>
                        <span>{item}</span>
                      </div>

                    ))}

                  </div>

                  <div
                    className="
                      mt-8
                      bg-[#FFC837]
                      text-[#832472]
                      font-black
                      px-5
                      py-4
                      rounded-[18px]
                      text-base
                      shadow-[0_10px_35px_rgba(131,36,114,0.10)]
                      text-center
                    "
                  >
                    {seloInferior}
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ======================= */}
          {/* PÁGINA 2 */}
          {/* ======================= */}

          <div className="pdf-page">

            <div className="bg-gradient-to-r from-[#832472] to-[#5A189A] p-7 text-white">

              <p className="uppercase tracking-[5px] text-xs text-purple-200">
                SIMULAÇÃO FINANCEIRA
              </p>

              <h2 className="text-3xl font-extrabold leading-tight mt-3">
                Economia projetada para
                <br />
                {dados.nomeCliente}
              </h2>

              <p className="mt-2 text-sm text-purple-100">
                Proposta personalizada • válida para análise comercial
              </p>

            </div>

            <div className="p-5">

              <div className="grid grid-cols-4 gap-4">

                <div className="bg-white border border-white/40 backdrop-blur-sm rounded-[22px] shadow-[0_4px_18px_rgba(15,23,42,0.05)] px-4 py-3">

                  <p className="text-gray-500 text-xs">
                    Consumo Médio
                  </p>

                  <h3 className="text-3xl font-extrabold text-[#832472] mt-2">
                    {dados.mediaKwh}
                  </h3>

                  <p className="text-gray-500 mt-1 text-xs">
                    kWh/mês
                  </p>

                </div>

                <div className="bg-white border border-white/40 backdrop-blur-sm rounded-[22px] shadow-[0_4px_18px_rgba(15,23,42,0.05)] px-4 py-3">

                  <p className="text-gray-500 text-xs">
                    Desconto
                  </p>

                  <h3 className="text-3xl font-extrabold text-[#16968D] mt-2">
                    {dados.desconto}%
                  </h3>

                  <p className="text-gray-500 mt-1 text-xs">
                    estimado
                  </p>

                </div>

                <div className="bg-white border border-white/40 backdrop-blur-sm rounded-[22px] shadow-[0_4px_18px_rgba(15,23,42,0.05)] px-4 py-3">

                  <p className="text-gray-500 text-xs">
                    Economia Mensal
                  </p>

                  <h3 className="text-3xl font-extrabold text-[#282828] mt-2">
                    R$ {dados.economiaMensal?.toFixed(0)}
                  </h3>

                </div>

                <div className="bg-[#FFC837] rounded-[22px] shadow-[0_10px_35px_rgba(131,36,114,0.10)] px-4 py-3">

                  <p className="text-[#832472] font-bold text-xs">
                    Economia Anual
                  </p>

                  <h3 className="text-3xl font-extrabold text-[#832472] mt-2">
                    R$ {dados.economiaAnual?.toFixed(0)}
                  </h3>

                </div>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">

                <div className="bg-white border border-white/40 backdrop-blur-sm rounded-[24px] shadow-[0_4px_18px_rgba(15,23,42,0.05)] p-5">

                  <h3 className="text-2xl font-extrabold text-[#282828]">
                    Comparativo Financeiro
                  </h3>

                  <div className="mt-5 space-y-4 text-base">

                    <div className="flex justify-between border-b border-gray-100 pb-3">

                      <span className="text-gray-600">
                        Conta com desconto Órigo
                      </span>

                      <strong className="text-[#16968D]">
                        R$ {dados.contaComDesconto?.toFixed(0)}
                      </strong>

                    </div>

                    <div className="flex justify-between border-b border-gray-100 pb-3">

                      <span className="text-gray-600">
                        Economia mensal
                      </span>

                      <strong className="text-[#832472]">
                        R$ {dados.economiaMensal?.toFixed(0)}
                      </strong>

                    </div>

                    <div className="flex justify-between pb-1">

                      <span className="text-gray-600">
                        Economia anual
                      </span>

                      <strong className="text-[#832472]">
                        R$ {dados.economiaAnual?.toFixed(0)}
                      </strong>

                    </div>

                  </div>

                </div>

                <div className="bg-white border border-white/40 backdrop-blur-sm rounded-[24px] shadow-[0_4px_18px_rgba(15,23,42,0.05)] p-5">

                  <h3 className="text-2xl font-extrabold text-[#282828]">
                    Como funciona?
                  </h3>

                  <div className="mt-5 space-y-4">

                    <div className="flex gap-4">

                      <div className="w-9 h-9 rounded-full bg-[#832472] text-white flex items-center justify-center font-black text-sm">
                        1
                      </div>

                      <div>

                        <h4 className="text-[15px] font-extrabold text-[#282828]">
                          Energia renovável
                        </h4>

                        <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                          A Órigo injeta energia limpa na rede da distribuidora.
                        </p>

                      </div>

                    </div>

                    <div className="flex gap-4">

                      <div className="w-9 h-9 rounded-full bg-[#16968D] text-white flex items-center justify-center font-black text-sm">
                        2
                      </div>

                      <div>

                        <h4 className="text-[15px] font-extrabold text-[#282828]">
                          Compensação automática
                        </h4>

                        <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                          Os créditos são aplicados diretamente na conta.
                        </p>

                      </div>

                    </div>

                    <div className="flex gap-4">

                      <div className="w-9 h-9 rounded-full bg-[#FFC837] text-[#832472] flex items-center justify-center font-black text-sm">
                        3
                      </div>

                      <div>

                        <h4 className="text-[15px] font-extrabold text-[#282828]">
                          Economia recorrente
                        </h4>

                        <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                          Desconto mensal sem necessidade de instalação.
                        </p>

                      </div>

                    </div>

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
