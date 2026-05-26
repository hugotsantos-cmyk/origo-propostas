import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault()

    if (!usuario || !senha) {
      return
    }

    try {

      setLoading(true)

      /* SIMULA LOGIN */

      await new Promise(resolve =>
        setTimeout(resolve, 600)
      )

      /* SALVA LOGIN */

      localStorage.setItem('logado', 'true')

      /* REDIRECIONA */

      navigate('/dashboard')

    } catch (error) {

      console.error(error)

      alert('Erro ao entrar.')

    } finally {

      setLoading(false)

    }

  }

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
        p-4
      "
    >

      <div
        className="
          bg-white
          rounded-[28px]
          shadow-2xl
          p-8
          md:p-12
          w-full
          max-w-md
          relative
          overflow-hidden
        "
      >

        {/* ELEMENTO */}

        <div
          className="
            absolute
            top-[-70px]
            right-[-70px]
            w-[140px]
            h-[140px]
            rounded-full
            bg-[#FFC837]
            opacity-20
          "
        />

        <div className="relative z-10">

          {/* HEADER */}

          <p
            className="
              uppercase
              tracking-[4px]
              text-[10px]
              text-[#832472]
              font-semibold
            "
          >
            Plataforma Comercial
          </p>

          <h1
            className="
              text-4xl
              md:text-5xl
              font-black
              text-[#282828]
              mt-4
              leading-tight
            "
          >
            Órigo
            <br />
            Propostas
          </h1>

          <p
            className="
              text-gray-500
              text-base
              md:text-lg
              mt-5
              leading-relaxed
            "
          >
            Gere propostas premium para clientes residenciais e empresariais.
          </p>

          {/* FORM */}

          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-5"
          >

            {/* USUÁRIO */}

            <div>

              <label
                className="
                  text-sm
                  font-semibold
                  text-gray-600
                "
              >
                Usuário
              </label>

              <input
                type="text"
                placeholder="Digite seu usuário"
                value={usuario}
                onChange={(e) =>
                  setUsuario(e.target.value)
                }
                className="
                  w-full
                  mt-2
                  px-4
                  py-4
                  rounded-[18px]
                  border
                  border-gray-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#832472]
                  text-base
                "
              />

            </div>

            {/* SENHA */}

            <div>

              <label
                className="
                  text-sm
                  font-semibold
                  text-gray-600
                "
              >
                Senha
              </label>

              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) =>
                  setSenha(e.target.value)
                }
                className="
                  w-full
                  mt-2
                  px-4
                  py-4
                  rounded-[18px]
                  border
                  border-gray-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#832472]
                  text-base
                "
              />

            </div>

            {/* BOTÃO */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-[#832472]
                hover:opacity-90
                disabled:opacity-70
                transition-all
                text-white
                py-4
                rounded-[20px]
                font-black
                text-lg
                shadow-lg
                mt-4
              "
            >

              {loading
                ? 'Entrando...'
                : 'Entrar'}

            </button>

          </form>

          {/* DOAÇÃO */}

          <div className="mt-5 flex justify-center">

            <a
              href="https://mpago.la/29qoMhi"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-[#22C55E]
                hover:bg-[#16A34A]
                transition-all
                text-white
                px-5
                py-2
                rounded-full
                text-sm
                font-bold
                shadow-md
              "
            >
              💚 Doação
            </a>

          </div>

        </div>

      </div>

    </div>

  )
}