import html2pdf from 'html2pdf.js'
import Layout from '../components/Layout'
import logo from '../assets/logo.png'

export default function PreviewProposta() {

  /* SAFE STORAGE */

  const propostaStorage =
    localStorage.getItem('proposta')

  const dados =
    propostaStorage
      ? JSON.parse(propostaStorage)
      : null

  /* FALLBACK */

  if (!dados) {

    return (

      <Layout>

        <div
          className="
            min-h-[80vh]
            flex
            items-center
            justify-center
            px-6
          "
        >

          <div
            className="
              bg-white
              rounded-[32px]
              shadow-2xl
              p-10
              max-w-xl
              w-full
              text-center
            "
          >

            <h1
              className="
                text-3xl
                font-extrabold
                text-[#832472]
              "
            >
              Nenhuma proposta encontrada
            </h1>

            <p
              className="
                text-gray-600
                mt-4
                leading-relaxed
              "
            >
              Crie uma nova proposta para visualizar o preview.
            </p>

          </div>

        </div>

      </Layout>

    )
  }

  /* PDF */

  const gerarPDF = () => {

    const elemento =
      document.getElementById('proposta')

    if (!elemento) return

    const isMobile =
      window.innerWidth < 768

    const options = {

      margin: 0,

      filename: 'proposta-origo.pdf',

      image: {
        type: 'jpeg',
        quality: 1
      },

      html2canvas: {
        scale: isMobile ? 1.5 : 3,
        useCORS: true,
        letterRendering: true,
        allowTaint: true
      },

      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'landscape',
        compress: false
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

  /* DADOS */

  const dataAtual =
    new Date().toLocaleDateString('pt-BR')

  const isPJ =
    dados.tipoProposta === 'PJ'

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

        {/* BOTÃO */}

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

        {/* PROPOSTA */}

        <div id="proposta" className="bg-[#ECECEC]">

          {/* ======================= */}
          {/* PÁGINA 1 */}
          {/* ======================= */}

          <section
            className="
              w-[297mm]
              h-[210mm]
              bg-white
              overflow-hidden
              relative
              mx-auto
            "
          >

            {/* CÍRCULO */}

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

            {/* GRID */}

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

                  {/* LOGO */}

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

                  {/* TAG */}

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

                  {/* TEXTO PEQUENO */}

                  <p className="text-xs tracking-[3px] uppercase text-gray-400 mb-3">
                    SOLUÇÃO HOMOLOGADA ANEEL • ENERGIA LIMPA POR ASSINATURA
                  </p>

                  {/* TÍTULO */}

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

                  {/* CLIENTE */}

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

                  {/* SUBTÍTULO */}

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

                  {/* CARD 1 */}

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

                  {/* CARD 2 */}

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

                  {/* CARD 3 */}

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

                {/* DATA */}

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

                  {/* CÍRCULO INTERNO */}

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

                  {/* TAG */}

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

                  {/* TÍTULO */}

                  <h2 className="text-3xl font-extrabold leading-tight">
                    O jeito de
                    <br />
                    consumir energia
                    <br />
                    mudou.
                  </h2>

                  {/* TEXTO */}

                  <p className="mt-5 text-base leading-relaxed text-purple-100">
                    {textoLateral}
                  </p>

                  {/* BULLETS */}

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

                  {/* SELO */}

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

          </section>

        </div>

      </div>

    </Layout>

  )
}