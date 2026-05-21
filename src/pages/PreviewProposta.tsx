import html2pdf from 'html2pdf.js'
import Layout from '../components/Layout'
import logo from '../assets/logo.png'

export default function PreviewProposta() {

  const dados =
    JSON.parse(
      localStorage.getItem('proposta') || '{}'
    )

  const gerarPDF = () => {

    const elemento =
      document.getElementById('proposta')

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
              shadow-xl
              text-lg
            "
          >
            Baixar PDF
          </button>

        </div>

        {/* PDF */}

        <div id="proposta" className="bg-[#ECECEC]">

          {/* ========================= */}
          {/* PÁGINA 1 */}
          {/* ========================= */}

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

            {/* SOL */}

            <div
              className="
                absolute
                top-[-120px]
                right-[-120px]
                w-[320px]
                h-[320px