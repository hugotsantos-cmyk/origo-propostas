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
        scale: 1,
        useCORS: true
      },

      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'landscape'
      },

      pagebreak: {
        mode: ['css', 'legacy']
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
              shadow-[0_8px_30px_rgba(0,0,0,0.08)]
              text-lg
            "
          >
            Baixar PDF
          </button>

        </div>

        <div id="proposta" className="bg-[#ECECEC]">

          {/* ========================= */}
          {/* PÁGINA 1 */}
          {/* ========================= */}

          <section
            className="
              w-[297mm]
              h-[210mm]
              bg-[#F9F9F9]
              overflow-hidden
              relative
              mx-auto
            "
          >

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

            <div className="grid grid-cols-2 gap-8 p-10 h-full">

              {/* ESQUERDA */}

              <div className="flex flex-col justify-start pt-10">

                <div>

                  <img
                    src={logo}
                    alt="Órigo Energia"
                    className="w-40 mb-5"
                  />

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-full
                      border
                      border-[#832472]/20
                      text-[#832472]
                      text-sm
                      font-semibold
                      mb-5
                      bg-white
                    "
                  >
                    Economia • Sustentabilidade • Simplicidade
                  </div>

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

                  <div className="bg-white rounded-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-4 py-3 w-36">

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

                  <div className="bg-white rounded-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-4 py-3 w-36">

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

                  <div className="bg-white rounded-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-4 py-3 w-36">

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
                    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
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
                      text-lg
                      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                      text-center
                    "
                  >
                    {seloInferior}
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* ========================= */}
          {/* PÁGINA 2 */}
          {/* ========================= */}

          <section
            className="
              w-[297mm]
              h-[210mm]
              bg-[#F9F9F9]
              overflow-hidden
              relative
              mx-auto
            "
          >

            {/* HEADER */}

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

              {/* MÉTRICAS */}

              <div className="grid grid-cols-4 gap-4">

                <div className="bg-white rounded-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-4 py-3">

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

                <div className="bg-white rounded-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-4 py-3">

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

                <div className="bg-white rounded-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-4 py-3">

                  <p className="text-gray-500 text-xs">
                    Economia Mensal
                  </p>

                  <h3 className="text-3xl font-extrabold text-[#282828] mt-2">
                    R$ {dados.economiaMensal?.toFixed(0)}
                  </h3>

                  <p className="text-gray-500 mt-1 text-xs">
                    aproximadamente
                  </p>

                </div>

                <div className="bg-[#FFC837] rounded-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-4 py-3">

                  <p className="text-[#832472] font-bold text-xs">
                    Economia Anual
                  </p>

                  <h3 className="text-3xl font-extrabold text-[#832472] mt-2">
                    R$ {dados.economiaAnual?.toFixed(0)}
                  </h3>

                  <p className="text-[#832472] mt-1 text-xs">
                    estimativa anual
                  </p>

                </div>

              </div>

              {/* CONTEÚDO */}

              <div className="grid grid-cols-2 gap-4 mt-4">

                {/* COMPARATIVO */}

                <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-5">

                  <h3 className="text-2xl font-extrabold text-[#282828]">
                    Comparativo Financeiro
                  </h3>

                  <div className="mt-5 space-y-4 text-base">

                    <div className="flex justify-between">

                      <span className="text-gray-600">
                        Conta com desconto Órigo
                      </span>

                      <strong className="text-[#16968D]">
                        R$ {dados.contaComDesconto?.toFixed(0)}
                      </strong>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-gray-600">
                        Economia mensal
                      </span>

                      <strong className="text-[#832472]">
                        R$ {dados.economiaMensal?.toFixed(0)}
                      </strong>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-gray-600">
                        Economia anual
                      </span>

                      <strong className="text-[#832472]">
                        R$ {dados.economiaAnual?.toFixed(0)}
                      </strong>

                    </div>

                  </div>

                  <div className="mt-5 bg-[#F7F7F7] rounded-[20px] p-4 border border-gray-100">

                    <h3 className="text-lg font-extrabold text-[#832472] leading-relaxed">
                      Em 3 anos, sua economia poderá ultrapassar
                      R$ {(dados.economiaAnual * 3)?.toFixed(0)}.
                    </h3>

                  </div>

                </div>

                {/* COMO FUNCIONA */}

                <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-5">

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

                  <div className="mt-4 bg-[#FAF2FA] border border-[#832472]/10 rounded-[18px] p-4">

                    <h3 className="text-base font-extrabold text-[#832472] leading-relaxed">
                      Sem obras. Sem equipamentos. Sem interrupções.
                    </h3>

                  </div>

                  {/* SELOS */}

                  <div className="mt-4 flex flex-wrap gap-2">

                    <div className="bg-[#F3F3F3] border border-gray-200 rounded-full px-3 py-2 text-[11px] font-semibold text-gray-700">
                      ✓ Economia recorrente
                    </div>

                    <div className="bg-[#F3F3F3] border border-gray-200 rounded-full px-3 py-2 text-[11px] font-semibold text-gray-700">
                      ✓ Sem instalação
                    </div>

                    <div className="bg-[#F3F3F3] border border-gray-200 rounded-full px-3 py-2 text-[11px] font-semibold text-gray-700">
                      ✓ Sem fidelidade
                    </div>

                    <div className="bg-[#F3F3F3] border border-gray-200 rounded-full px-3 py-2 text-[11px] font-semibold text-gray-700">
                      ✓ Energia limpa homologada
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>

        </div>

      </div>

    </Layout>
  )
}