import { Container, Row, Col, Card, Badge } from "react-bootstrap"
import {
  FiActivity,
  FiBell,
  FiAlertTriangle,
  FiCheckCircle,
  FiShield,
  FiMonitor,
  FiDatabase,
  FiLock,
  FiArrowUp,
} from "react-icons/fi"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const Dashboard = () => {
  const activityData = [
    { day: "Mon", events: 120 },
    { day: "Tue", events: 180 },
    { day: "Wed", events: 150 },
    { day: "Thu", events: 220 },
    { day: "Fri", events: 190 },
    { day: "Sat", events: 250 },
    { day: "Sun", events: 210 },
  ]

  const stats = [
    {
      title: "Total Events",
      value: "1,248",
      change: "+12.5%",
      description: "vs last week",
      icon: <FiActivity size={22} />,
      iconBg: "#dbeafe",
      iconColor: "#2563eb",
    },
    {
      title: "Active Alerts",
      value: "12",
      change: "+4.2%",
      description: "vs last week",
      icon: <FiBell size={22} />,
      iconBg: "#fef3c7",
      iconColor: "#d97706",
    },
    {
      title: "Critical Alerts",
      value: "3",
      change: "-2.1%",
      description: "vs last week",
      icon: <FiAlertTriangle size={22} />,
      iconBg: "#fee2e2",
      iconColor: "#dc2626",
    },
    {
      title: "System Status",
      value: "Healthy",
      change: "100%",
      description: "operational",
      icon: <FiCheckCircle size={22} />,
      iconBg: "#dcfce7",
      iconColor: "#16a34a",
    },
  ]

  return (
    <Container fluid>

      {/* Header */}

      <div className="mb-4">
        <h2
          className="fw-bold mb-1"
          style={{ color: "#0f172a" }}
        >
          Dashboard
        </h2>

        <p
          className="mb-0"
          style={{ color: "#64748b" }}
        >
          Monitor your security activity and system health
        </p>
      </div>


      {/* Statistics Cards */}

      <Row className="g-4 mb-4">

        {stats.map((stat) => (
          <Col xs={12} sm={6} xl={3} key={stat.title}>

            <Card
              className="border-0 h-100"
              style={{
                borderRadius: "14px",
                boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)",
              }}
            >
              <Card.Body className="p-4">

                <div className="d-flex justify-content-between align-items-start">

                  <div>

                    <p
                      className="mb-2"
                      style={{
                        color: "#64748b",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {stat.title}
                    </p>

                    <h3
                      className="fw-bold mb-2"
                      style={{
                        color: "#0f172a",
                      }}
                    >
                      {stat.value}
                    </h3>

                    <div className="d-flex align-items-center gap-2">

                      <span
                        className="d-flex align-items-center"
                        style={{
                          color:
                            stat.title === "Critical Alerts"
                              ? "#dc2626"
                              : "#16a34a",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        <FiArrowUp
                          size={12}
                          className="me-1"
                        />
                        {stat.change}
                      </span>

                      <span
                        style={{
                          color: "#94a3b8",
                          fontSize: "12px",
                        }}
                      >
                        {stat.description}
                      </span>

                    </div>

                  </div>


                  {/* Icon */}

                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: "46px",
                      height: "46px",
                      backgroundColor: stat.iconBg,
                      color: stat.iconColor,
                    }}
                  >
                    {stat.icon}
                  </div>

                </div>

              </Card.Body>
            </Card>

          </Col>
        ))}

      </Row>


      {/* Chart + System Status */}

      <Row className="g-4 mb-4">

        {/* Chart */}

        <Col xl={8}>

          <Card
            className="border-0 h-100"
            style={{
              borderRadius: "14px",
              boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <div className="d-flex justify-content-between align-items-start mb-4">

                <div>
                  <h5
                    className="fw-bold mb-1"
                    style={{ color: "#0f172a" }}
                  >
                    Security Activity
                  </h5>

                  <small style={{ color: "#64748b" }}>
                    Events recorded over the last 7 days
                  </small>
                </div>

                <div
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#eff6ff",
                    color: "#2563eb",
                  }}
                >
                  <FiActivity size={19} />
                </div>

              </div>

              <div
                style={{
                  width: "100%",
                  height: 290,
                }}
              >

                <ResponsiveContainer>
                  <LineChart data={activityData}>

                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                    />

                    <YAxis
                      axisLine={false}
                      tickLine={false}
                    />

                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="events"
                      stroke="#2563eb"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />

                  </LineChart>
                </ResponsiveContainer>

              </div>

            </Card.Body>

          </Card>

        </Col>


        {/* System Status */}

        <Col xl={4}>

          <Card
            className="border-0 h-100"
            style={{
              borderRadius: "14px",
              boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <div className="mb-4">

                <h5
                  className="fw-bold mb-1"
                  style={{ color: "#0f172a" }}
                >
                  System Status
                </h5>

                <small style={{ color: "#64748b" }}>
                  Current infrastructure status
                </small>

              </div>


              {/* API */}

              <div className="d-flex justify-content-between align-items-center py-3 border-bottom">

                <div className="d-flex align-items-center gap-3">

                  <FiActivity
                    size={19}
                    style={{ color: "#64748b" }}
                  />

                  <span
                    className="fw-medium"
                    style={{ color: "#334155" }}
                  >
                    API
                  </span>

                </div>

                <Badge
                  bg="success"
                  className="px-2 py-2"
                >
                  Operational
                </Badge>

              </div>


              {/* Database */}

              <div className="d-flex justify-content-between align-items-center py-3 border-bottom">

                <div className="d-flex align-items-center gap-3">

                  <FiDatabase
                    size={19}
                    style={{ color: "#64748b" }}
                  />

                  <span
                    className="fw-medium"
                    style={{ color: "#334155" }}
                  >
                    Database
                  </span>

                </div>

                <Badge
                  bg="success"
                  className="px-2 py-2"
                >
                  Operational
                </Badge>

              </div>


              {/* Monitoring */}

              <div className="d-flex justify-content-between align-items-center py-3 border-bottom">

                <div className="d-flex align-items-center gap-3">

                  <FiShield
                    size={19}
                    style={{ color: "#64748b" }}
                  />

                  <span
                    className="fw-medium"
                    style={{ color: "#334155" }}
                  >
                    Monitoring
                  </span>

                </div>

                <Badge
                  bg="success"
                  className="px-2 py-2"
                >
                  Active
                </Badge>

              </div>


              {/* Authentication */}

              <div className="d-flex justify-content-between align-items-center py-3">

                <div className="d-flex align-items-center gap-3">

                  <FiLock
                    size={19}
                    style={{ color: "#64748b" }}
                  />

                  <span
                    className="fw-medium"
                    style={{ color: "#334155" }}
                  >
                    Authentication
                  </span>

                </div>

                <Badge
                  bg="success"
                  className="px-2 py-2"
                >
                  Secure
                </Badge>

              </div>

            </Card.Body>

          </Card>

        </Col>

      </Row>


      {/* Recent Events */}

      <Row>

        <Col xs={12}>

          <Card
            className="border-0"
            style={{
              borderRadius: "14px",
              boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                  <h5
                    className="fw-bold mb-1"
                    style={{ color: "#0f172a" }}
                  >
                    Recent Security Events
                  </h5>

                  <small style={{ color: "#64748b" }}>
                    Latest activity detected by SafeWatch
                  </small>

                </div>

                <FiShield
                  size={20}
                  style={{ color: "#2563eb" }}
                />

              </div>


              {/* Event 1 */}

              <div className="d-flex justify-content-between align-items-center py-3 border-bottom">

                <div className="d-flex align-items-center gap-3">

                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#fee2e2",
                      color: "#dc2626",
                    }}
                  >
                    <FiAlertTriangle size={18} />
                  </div>

                  <div>

                    <div
                      className="fw-semibold"
                      style={{ color: "#1e293b" }}
                    >
                      Failed Login Attempt
                    </div>

                    <small style={{ color: "#64748b" }}>
                      Unknown IP address
                    </small>

                  </div>

                </div>

                <small style={{ color: "#64748b" }}>
                  2 min ago
                </small>

              </div>


              {/* Event 2 */}

              <div className="d-flex justify-content-between align-items-center py-3 border-bottom">

                <div className="d-flex align-items-center gap-3">

                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#fef3c7",
                      color: "#d97706",
                    }}
                  >
                    <FiMonitor size={18} />
                  </div>

                  <div>

                    <div
                      className="fw-semibold"
                      style={{ color: "#1e293b" }}
                    >
                      New Device Detected
                    </div>

                    <small style={{ color: "#64748b" }}>
                      Chrome on macOS
                    </small>

                  </div>

                </div>

                <small style={{ color: "#64748b" }}>
                  15 min ago
                </small>

              </div>


              {/* Event 3 */}

              <div className="d-flex justify-content-between align-items-center py-3">

                <div className="d-flex align-items-center gap-3">

                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#dcfce7",
                      color: "#16a34a",
                    }}
                  >
                    <FiLock size={18} />
                  </div>

                  <div>

                    <div
                      className="fw-semibold"
                      style={{ color: "#1e293b" }}
                    >
                      Password Changed
                    </div>

                    <small style={{ color: "#64748b" }}>
                      Account security update
                    </small>

                  </div>

                </div>

                <small style={{ color: "#64748b" }}>
                  1 hour ago
                </small>

              </div>

            </Card.Body>

          </Card>

        </Col>

      </Row>

    </Container>
  )
}

export default Dashboard