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
        scale: 1.2,
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
              shadow-xl
              text-lg
            "
          >
            Baixar PDF
          </button>

        </div>

        <div id="proposta" className="bg-[#ECECEC]">

          {/* PÁGINA 1 */}

          <section
            className="
              w-[297mm]
              min-h-[210mm]
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

            <div className="grid grid-cols-2 gap-8 p-12 h-full">

              <div className="flex flex-col justify-between">

                <div>

                  <img
                    src={logo}
                    alt="Órigo Energia"
                    className="w-44 mb-6"
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
                      mb-6
                      bg-white
                    "
                  >
                    Economia • Sustentabilidade • Simplicidade
                  </div>

                  <h1
                    className="
                      text-5xl
                      font-black
                      leading-tight
                      text-[#282828]
                    "
                  >
                    {tituloPrincipal}
                    <br />
                    para
                    <br />

                    <span className="text-[#832472]">
                      {dados.nomeCliente}
                    </span>
                  </h1>

                  <p
                    className="
                      mt-6
                      text-lg
                      text-gray-600
                      leading-relaxed
                      max-w-2xl
                    "
                  >
                    {subtituloPrincipal}
                  </p>

                </div>

                <div className="flex gap-4 mt-8">

                  <div className="bg-white rounded-[24px] shadow-lg p-5 w-40">
                    <p className="text-gray-500 text-sm">Consumo Médio</p>
                    <h3 className="text-4xl font-black text-[#832472] mt-3">
                      {dados.mediaKwh}
                    </h3>
                    <p className="text-gray-500 mt-1 text-sm">kWh/mês</p>
                  </div>

                  <div className="bg-white rounded-[24px] shadow-lg p-5 w-40">
                    <p className="text-gray-500 text-sm">Desconto</p>
                    <h3 className="text-4xl font-black text-[#16968D] mt-3">
                      {dados.desconto}%
                    </h3>
                    <p className="text-gray-500 mt-1 text-sm">estimado</p>
                  </div>

                  <div className="bg-white rounded-[24px] shadow-lg p-5 w-40">
                    <p className="text-gray-500 text-sm">Modelo</p>
                    <h3 className="text-xl font-black text-[#282828] mt-3">
                      Sem instalação
                    </h3>
                  </div>

                </div>

                <p className="mt-8 text-gray-500 text-sm">
                  Proposta personalizada • {dataAtual}
                </p>

              </div>

              <div className="flex items-center justify-center">

                <div
                  className="
                    bg-[#832472]
                    text-white
                    rounded-[36px]
                    p-10
                    w-full
                    max-w-[470px]
                    relative
                    overflow-hidden
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
                      opacity-40
                    "
                  />

                  <div
                    className="
                      inline-flex
                      bg-[#FFC837]
                      text-[#832472]
                      font-black
                      rounded-full
                      px-6
                      py-3
                      text-base
                      mb-8
                    "
                  >
                    Energia por Assinatura
                  </div>

                  <h2 className="text-4xl font-black leading-tight">
                    O jeito de
                    <br />
                    consumir energia
                    <br />
                    mudou.
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-purple-100">
                    {textoLateral}
                  </p>

                  <div className="mt-8 space-y-4 text-lg">

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
                      mt-10
                      bg-[#FFC837]
                      text-[#832472]
                      font-black
                      px-6
                      py-4
                      rounded-[20px]
                      text-lg
                      shadow-xl
                      text-center
                    "
                  >
                    {seloInferior}
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* PÁGINA 2 */}

          <section
            className="
              w-[297mm]
              min-h-[210mm]
              bg-[#F9F9F9]
              overflow-hidden
              relative
              mx-auto
            "
          >

            <div className="bg-gradient-to-r from-[#832472] to-[#5A189A] p-10 text-white">

              <p className="uppercase tracking-[5px] text-xs text-purple-200">
                Simulação Financeira
              </p>

              <h2 className="text-4xl font-black leading-tight mt-4">
                Economia projetada para
                <br />
                {dados.nomeCliente}
              </h2>

              <p className="mt-4 text-lg text-purple-100 max-w-4xl leading-relaxed">
                Simulação personalizada baseada no perfil médio de consumo informado.
              </p>

            </div>

            <div className="p-8">

              <div className="grid grid-cols-4 gap-4">

                <div className="bg-white rounded-[28px] shadow-lg p-6">
                  <p className="text-gray-500 text-sm">Consumo Médio</p>
                  <h3 className="text-4xl font-black text-[#832472] mt-4">
                    {dados.mediaKwh}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm">kWh/mês</p>
                </div>

                <div className="bg-white rounded-[28px] shadow-lg p-6">
                  <p className="text-gray-500 text-sm">Desconto</p>
                  <h3 className="text-4xl font-black text-[#16968D] mt-4">
                    {dados.desconto}%
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm">estimado</p>
                </div>

                <div className="bg-white rounded-[28px] shadow-lg p-6">
                  <p className="text-gray-500 text-sm">Economia Mensal</p>
                  <h3 className="text-4xl font-black text-[#282828] mt-4">
                    R$ {dados.economiaMensal?.toFixed(0)}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm">aproximadamente</p>
                </div>

                <div className="bg-[#FFC837] rounded-[28px] shadow-lg p-6">
                  <p className="text-[#832472] font-bold text-sm">Economia Anual</p>
                  <h3 className="text-4xl font-black text-[#832472] mt-4">
                    R$ {dados.economiaAnual?.toFixed(0)}
                  </h3>
                  <p className="text-[#832472] mt-2 text-sm">estimativa anual</p>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-6 mt-6">

                <div className="bg-white rounded-[32px] shadow-lg p-6">

                  <h3 className="text-3xl font-black text-[#282828]">
                    Comparativo Financeiro
                  </h3>

                  <div className="mt-6 space-y-5 text-lg">

                    <div className="flex justify-between">
                      <span className="text-gray-600">Conta atual estimada</span>
                      <strong>R$ {dados.contaAtual?.toFixed(0)}</strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Conta com desconto Órigo</span>
                      <strong className="text-[#16968D]">
                        R$ {dados.contaComDesconto?.toFixed(0)}
                      </strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Economia mensal</span>
                      <strong className="text-[#832472]">
                        R$ {dados.economiaMensal?.toFixed(0)}
                      </strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Economia anual projetada</span>
                      <strong className="text-[#832472]">
                        R$ {dados.economiaAnual?.toFixed(0)}
                      </strong>
                    </div>

                  </div>

                  <div className="mt-6 bg-[#F7F7F7] rounded-[24px] p-5 border border-gray-100">

                    <h3 className="text-lg font-black text-[#832472] leading-relaxed">
                      Em 3 anos, a economia projetada poderá ultrapassar
                      R$ {(dados.economiaAnual * 3)?.toFixed(0)}.
                    </h3>

                  </div>

                </div>

                <div className="bg-white rounded-[32px] shadow-lg p-6">

                  <h3 className="text-3xl font-black text-[#282828]">
                    Como funciona?
                  </h3>

                  <div className="mt-6 space-y-5">

                    <div className="flex gap-4">

                      <div className="w-12 h-12 rounded-full bg-[#832472] text-white flex items-center justify-center font-black text-lg">
                        1
                      </div>

                      <div>
                        <h4 className="text-xl font-black text-[#282828]">
                          Energia renovável
                        </h4>

                        <p className="text-gray-600 mt-1 text-base leading-relaxed">
                          A Órigo injeta energia limpa na rede da distribuidora.
                        </p>
                      </div>

                    </div>

                    <div className="flex gap-4">

                      <div className="w-12 h-12 rounded-full bg-[#16968D] text-white flex items-center justify-center font-black text-lg">
                        2
                      </div>

                      <div>
                        <h4 className="text-xl font-black text-[#282828]">
                          Compensação automática
                        </h4>

                        <p className="text-gray-600 mt-1 text-base leading-relaxed">
                          A distribuidora aplica os créditos diretamente na conta.
                        </p>
                      </div>

                    </div>

                    <div className="flex gap-4">

                      <div className="w-12 h-12 rounded-full bg-[#FFC837] text-[#832472] flex items-center justify-center font-black text-lg">
                        3
                      </div>

                      <div>
                        <h4 className="text-xl font-black text-[#282828]">
                          Economia recorrente
                        </h4>

                        <p className="text-gray-600 mt-1 text-base leading-relaxed">
                          O cliente recebe desconto mensal sem necessidade de instalação.
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="mt-5 bg-[#FAF2FA] border border-[#832472]/10 rounded-[24px] p-5">
                    <h3 className="text-xl font-black text-[#832472] leading-relaxed">
                      Sem obras. Sem equipamentos. Sem interrupções.
                    </h3>
                  </div>

                  <div className="mt-5 bg-[#F7F7F7] border border-gray-200 rounded-[24px] p-5">
                    <p className="text-base text-[#282828] font-semibold leading-relaxed">
                      Solução homologada e integrada à distribuidora local.
                    </p>
                  </div>

                  <div className="mt-5 bg-gradient-to-r from-[#832472] to-[#5A189A] rounded-[28px] p-6 text-white shadow-xl">

                    <p className="text-purple-200 uppercase tracking-[3px] text-xs">
                      Próximo passo
                    </p>

                    <h2 className="text-2xl font-black mt-3 leading-tight">
                      Pronto para começar sua economia inteligente?
                    </h2>

                    <p className="mt-3 text-base text-purple-100 leading-relaxed">
                      A Órigo Energia está pronta para ajudar você a economizar de forma simples, moderna e sustentável.
                    </p>

                    <div className="mt-5 pt-4 border-t border-white/20">

                      <p className="text-purple-200 text-sm">
                        Atendimento especializado
                      </p>

                      <h3 className="text-lg font-black mt-2">
                        Executivo de Negócios Órigo Energia
                      </h3>

                    </div>

                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-3">

                    <p className="text-sm text-gray-500">
                      Energia limpa. Economia inteligente.
                    </p>

                    <img
                      src={logo}
                      alt="Órigo Energia"
                      className="w-24 opacity-90"
                    />

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