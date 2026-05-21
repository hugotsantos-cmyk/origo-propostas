import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NovaProposta from './pages/NovaProposta'
import PreviewProposta from './pages/PreviewProposta'

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

export default function App() {

  return (
    <BrowserRouter>

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

    </BrowserRouter>
  )
}