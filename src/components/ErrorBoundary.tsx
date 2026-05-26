import React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  componentDidCatch(error: Error) {
    console.error('Erro capturado:', error)
  }

  render() {

    if (this.state.hasError) {

      return (

        <div
          className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-gradient-to-br
            from-[#832472]
            to-[#5A189A]
            p-6
          "
        >

          <div
            className="
              bg-white
              rounded-[32px]
              p-10
              max-w-lg
              w-full
              text-center
              shadow-2xl
            "
          >

            <h1
              className="
                text-4xl
                font-extrabold
                text-[#832472]
              "
            >
              Órigo Propostas
            </h1>

            <p
              className="
                mt-6
                text-gray-600
                leading-relaxed
              "
            >
              Ocorreu um erro inesperado.
              Atualize a página para continuar utilizando a plataforma.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="
                mt-8
                bg-[#832472]
                text-white
                px-8
                py-4
                rounded-[18px]
                font-bold
                hover:opacity-90
                transition
              "
            >
              Atualizar Página
            </button>

          </div>

        </div>

      )
    }

    return this.props.children
  }
}

export default ErrorBoundary