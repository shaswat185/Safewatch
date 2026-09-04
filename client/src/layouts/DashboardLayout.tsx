import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { Container, Navbar, Badge } from "react-bootstrap"
import { useAuth } from "../hooks/useAuth"

import {
  FiGrid,
  FiActivity,
  FiBell,
  FiSettings,
  FiLogOut,
  FiShield,
  FiCheckCircle,
  FiSearch,
  FiUsers, FiFileText
} from "react-icons/fi"

const DashboardLayout = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <div
      className="d-flex min-vh-100"
      style={{
        backgroundColor: "#f8fafc",
        color: "#1e293b",
      }}
    >

      {/* ================= SIDEBAR ================= */}

      <aside
        className="d-flex flex-column flex-shrink-0 text-white"
        style={{
          width: "260px",
          minHeight: "100vh",
          backgroundColor: "#0f172a",
        }}
      >

        {/* Logo */}

        <div
          className="px-4 py-4"
          style={{
            borderBottom: "1px solid #334155",
          }}
        >
          <div className="d-flex align-items-center gap-3">

            <div
              className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
              style={{
                width: "42px",
                height: "42px",
                backgroundColor: "#2563eb",
              }}
            >
              <FiShield size={23} />
            </div>

            <div>
              <h5
                className="fw-bold mb-0"
                style={{ color: "#ffffff" }}
              >
                SafeWatch
              </h5>

              <small
                style={{
                  color: "#cbd5e1",
                  fontSize: "12px",
                }}
              >
                Security Platform
              </small>
            </div>

          </div>
        </div>


        {/* Navigation */}

        <div className="px-3 pt-4 flex-grow-1">

          <div
            className="px-3 mb-3"
            style={{
              color: "#94a3b8",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            MAIN MENU
          </div>

          <nav className="d-flex flex-column gap-2">

            {/* Dashboard */}

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `text-decoration-none rounded-3 px-3 py-3 d-flex align-items-center gap-3 ${isActive ? "text-white" : ""
                }`
              }
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "#2563eb"
                  : "transparent",

                color: isActive
                  ? "#ffffff"
                  : "#e2e8f0",

                fontWeight: isActive ? 600 : 500,

                fontSize: "15px",

                transition: "all 0.2s ease",
              })}
            >
              <FiGrid size={19} />

              <span>
                Dashboard
              </span>
            </NavLink>


            {/* Events */}

            <NavLink
              to="/events"
              className="text-decoration-none rounded-3 px-3 py-3 d-flex align-items-center gap-3"
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "#2563eb"
                  : "transparent",

                color: isActive
                  ? "#ffffff"
                  : "#e2e8f0",

                fontWeight: isActive ? 600 : 500,

                fontSize: "15px",

                transition: "all 0.2s ease",
              })}
            >
              <FiActivity size={19} />

              <span>
                Events
              </span>
            </NavLink>


            {/* Alerts */}

            <NavLink
              to="/alerts"
              className="text-decoration-none rounded-3 px-3 py-3 d-flex align-items-center justify-content-between"
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "#2563eb"
                  : "transparent",

                color: isActive
                  ? "#ffffff"
                  : "#e2e8f0",

                fontWeight: isActive ? 600 : 500,

                fontSize: "15px",

                transition: "all 0.2s ease",
              })}
            >

              <span className="d-flex align-items-center gap-3">
                <FiBell size={19} />

                <span>
                  Alerts
                </span>
              </span>

              <Badge
                bg="danger"
                pill
                style={{
                  fontSize: "11px",
                  padding: "5px 8px",
                }}
              >
                3
              </Badge>

            </NavLink>



            {/* Users */}

            <NavLink
              to="/users"
              className="text-decoration-none rounded-3 px-3 py-3 d-flex align-items-center gap-3"
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "#2563eb"
                  : "transparent",

                color: isActive
                  ? "#ffffff"
                  : "#e2e8f0",

                fontWeight: isActive ? 600 : 500,

                fontSize: "15px",

                transition: "all 0.2s ease",
              })}
            >
              <FiUsers size={19} />

              <span>
                Users
              </span>
            </NavLink>


            {/* Audit Logs */}


            <NavLink
              to="/audit-logs"
              className="text-decoration-none rounded-3 px-3 py-3 d-flex align-items-center gap-3"
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "#2563eb"
                  : "transparent",

                color: isActive
                  ? "#ffffff"
                  : "#e2e8f0",

                fontWeight: isActive ? 600 : 500,

                fontSize: "15px",

                transition: "all 0.2s ease",
              })}
            >
              <FiFileText size={19} />

              <span>
                Audit Logs
              </span>
            </NavLink>



            {/* Settings */}

            <NavLink
              to="/settings"
              className="text-decoration-none rounded-3 px-3 py-3 d-flex align-items-center gap-3"
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "#2563eb"
                  : "transparent",

                color: isActive
                  ? "#ffffff"
                  : "#e2e8f0",

                fontWeight: isActive ? 600 : 500,

                fontSize: "15px",

                transition: "all 0.2s ease",
              })}
            >
              <FiSettings size={19} />

              <span>
                Settings
              </span>
            </NavLink>

          </nav>

        </div>


        {/* System Status */}

        <div className="px-3 mb-3">

          <div
            className="rounded-3 p-3"
            style={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
            }}
          >

            <div className="d-flex align-items-center gap-2 mb-1">

              <FiCheckCircle
                size={17}
                className="text-success"
              />

              <span
                className="fw-semibold"
                style={{
                  fontSize: "13px",
                  color: "#f8fafc",
                }}
              >
                System Online
              </span>

            </div>

            <div
              style={{
                color: "#cbd5e1",
                fontSize: "12px",
              }}
            >
              All systems operational
            </div>

          </div>

        </div>


        {/* Logout */}

        <div
          className="p-3"
          style={{
            borderTop: "1px solid #334155",
          }}
        >

          <button
            type="button"
            className="btn w-100 d-flex align-items-center justify-content-center gap-2 rounded-3"
            style={{
              backgroundColor: "#1e293b",
              color: "#f1f5f9",
              border: "1px solid #475569",
              padding: "10px",
              fontSize: "14px",
              fontWeight: 500,
            }}
            onClick={handleLogout}
          >
            <FiLogOut size={18} />

            Logout
          </button>

        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <div className="flex-grow-1 d-flex flex-column">

        {/* TOPBAR */}

        <Navbar
          bg="white"
          className="border-bottom px-4"
          style={{
            minHeight: "72px",
          }}
        >

          <Container fluid>

            {/* Page title */}

            <div>

              <h5
                className="fw-bold mb-1"
                style={{
                  color: "#0f172a",
                }}
              >
                Security Dashboard
              </h5>

              <small
                style={{
                  color: "#64748b",
                }}
              >
                Monitor your security environment
              </small>

            </div>


            {/* Right side */}

            <div className="d-flex align-items-center gap-4">

              {/* Search */}

              <button
                type="button"
                className="btn p-0 border-0"
                style={{
                  color: "#64748b",
                }}
              >
                <FiSearch size={20} />
              </button>


              {/* Online status */}

              <div className="d-flex align-items-center gap-2">

                <span
                  className="rounded-circle bg-success"
                  style={{
                    width: "8px",
                    height: "8px",
                  }}
                />

                <span
                  className="small fw-medium"
                  style={{
                    color: "#475569",
                  }}
                >
                  Online
                </span>

              </div>


              {/* User */}

              <div className="d-flex align-items-center gap-2">

                <div
                  className="d-flex align-items-center justify-content-center rounded-circle fw-semibold"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#dbeafe",
                    color: "#2563eb",
                  }}
                >
                  S
                </div>

                <div className="d-none d-md-block">

                  <div
                    className="fw-semibold"
                    style={{
                      fontSize: "13px",
                      color: "#1e293b",
                    }}
                  >
                    User
                  </div>

                  <div
                    style={{
                      fontSize: "11px",
                      color: "#64748b",
                    }}
                  >
                    Administrator
                  </div>

                </div>

              </div>

            </div>

          </Container>

        </Navbar>


        {/* PAGE CONTENT */}

        <main
          className="p-4 flex-grow-1"
          style={{
            backgroundColor: "#f8fafc",
          }}
        >
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default DashboardLayout