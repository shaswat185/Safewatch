import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Events from "./pages/Events"
import Alerts from "./pages/Alerts"
import AlertDetails from "./pages/AlertDetails"
import Settings from "./pages/Settings"

import ProtectedRoute from "./components/ProtectedRoute"
import DashboardLayout from "./layouts/DashboardLayout"
import Users from "./pages/Users"
import AuditLogs from "./pages/AuditLogs"

import { useAuth } from "./hooks/useAuth"

const App = () => {
  const { isAuthenticated } = useAuth()

  return (
    <BrowserRouter>

      <Routes>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={
            <Navigate
              to={
                isAuthenticated
                  ? "/dashboard"
                  : "/login"
              }
              replace
            />
          }
        />


        {/* ================= LOGIN ================= */}

        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate
                to="/dashboard"
                replace
              />
            ) : (
              <Login />
            )
          }
        />


        {/* ================= REGISTER ================= */}

        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate
                to="/dashboard"
                replace
              />
            ) : (
              <Register />
            )
          }
        />


        {/* ================= PROTECTED AREA ================= */}

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          {/* Dashboard */}

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />


          {/* Events */}

          <Route
            path="/events"
            element={<Events />}
          />


          {/* Alerts */}

          <Route
            path="/alerts"
            element={<Alerts />}
          />


          {/* Alert Details */}

          <Route
            path="/alerts/:id"
            element={<AlertDetails />}
          />


          {/* Settings */}

          <Route
            path="/settings"
            element={<Settings />}
          />



          {/* Users */}

          <Route
            path="/users"
            element={<Users />}
          />

          {/* AuditLogs */}

          <Route
            path="/audit-logs"
            element={<AuditLogs />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App