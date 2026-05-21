import { useState } from 'react'

export default function Login() {

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    if (usuario === 'admin' && senha === 'origo2026') {

      localStorage.setItem('logado', 'true')

      window.location.href = '/dashboard'

    } else {

      setErro('Usuário ou senha inválidos')

    }
  }

  return (
    <div className="min-h-screen bg-[#0B1020] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl p-10 shadow-2xl">

        <div className="flex flex-col items-center mb-8">

          <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            ⚡
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-5">
            Órigo
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Plataforma de Propostas Comerciais
          </p>

        </div>

        <form
          className="space-y-5"
          onSubmit={handleLogin}
        >

          <div>

            <label className="text-sm font-medium text-gray-700">
              Usuário
            </label>

            <input
              type="text"
              placeholder="Digite seu usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full mt-2 h-12 rounded-xl border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-purple-500"
            />

          </div>

          <div>

            <label className="text-sm font-medium text-gray-700">
              Senha
            </label>

            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full mt-2 h-12 rounded-xl border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-purple-500"
            />

          </div>

          {erro && (
            <div className="text-red-500 text-sm">
              {erro}
            </div>
          )}

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-semibold shadow-lg"
          >
            Entrar
          </button>

        </form>

      </div>

    </div>
  )
}