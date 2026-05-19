import { supabase } from './lib/supabase'

export default function App() {

  console.log('SUPABASE CLIENT:', supabase)

  const testarSupabase = async () => {

    console.log('Tentando salvar...')

    const { data, error } = await supabase
      .from('clientes')
      .insert([
        {
          nome: 'Teste',
          telefone: '62999999999',
          email: 'teste@email.com',
          tipo_proposta: 'PF'
        }
      ])

    console.log('DATA:', data)
    console.log('ERROR:', error)

    if (error) {
      alert('Erro ao salvar')
    } else {
      alert('Cliente salvo com sucesso!')
    }
  }

  return (
    <div
      style={{
        padding: '40px'
      }}
    >
      <button
        onClick={testarSupabase}
        style={{
          padding: '16px 24px',
          background: '#16968D',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Testar Supabase
      </button>
    </div>
  )
}