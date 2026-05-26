import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import {
  lazy,
  Suspense
} from 'react'

/* LAZY LOAD */

const Login = lazy(() => import('./pages/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const NovaProposta = lazy(() => import('./pages/NovaProposta'))
const PreviewProposta = lazy(() => import('./pages/PreviewProposta'))

/* PROTECTED ROUTE */

function ProtectedRoute({
  children
}: {
  children: React.ReactNode
}) {

  const logado =
    localStorage.getItem('logado')

  if (!logado) {
    return <Navigate to="/" />
  }

  return children
}

/* LOADING SCREEN */

function LoadingScreen() {

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
      "
    >

      <div className="text-center">

        <div
          className="
            w-16
            h-16
            border-4
            border-white/30
            border-t-white
            rounded-full
            animate-spin
            mx-auto
          "
        />

        <p
          className="
            text-white
            mt-6
            text-lg
            font-semibold
          "
        >
          Carregando plataforma...
        </p>

      </div>

    </div>

  )
}

/* APP */

export default function App() {

  return (

    <BrowserRouter>

      <Suspense fallback={<LoadingScreen />}>

        <Routes>

          {/* LOGIN */}

          <Route
            path="/"
            element={<Login />}
          />

          {/* DASHBOARD */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* NOVA PROPOSTA */}

          <Route
            path="/nova-proposta"
            element={
              <ProtectedRoute>
                <NovaProposta />
              </ProtectedRoute>
            }
          />

          {/* PREVIEW */}

          <Route
            path="/preview"
            element={
              <ProtectedRoute>
                <PreviewProposta />
              </ProtectedRoute>
            }
          />

        </Routes>

      </Suspense>

    </BrowserRouter>

  )
}