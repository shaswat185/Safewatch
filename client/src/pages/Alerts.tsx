import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Form,
  Button,
} from "react-bootstrap"

import {
  FiAlertTriangle,
  FiShield,
  FiClock,
  FiUser,
  FiSearch,
  FiArrowRight,
} from "react-icons/fi"

interface SecurityAlert {
  id: string
  title: string
  description: string
  user: string
  time: string
  risk: number
  severity: "Critical" | "High" | "Medium" | "Low"
  status: "Open" | "Investigating" | "Resolved"
}

const Alerts = () => {
  const navigate = useNavigate()

  const [search, setSearch] = useState("")
  const [severity, setSeverity] = useState("All")

  const alerts: SecurityAlert[] = [
    {
      id: "SW-1024",
      title: "Multiple Failed Login Attempts",
      description:
        "Five failed authentication attempts detected within five minutes.",
      user: "john@example.com",
      time: "2 min ago",
      risk: 92,
      severity: "Critical",
      status: "Open",
    },
    {
      id: "SW-1023",
      title: "New Device Detected",
      description:
        "User signed in from a device that has not been seen before.",
      user: "alex@example.com",
      time: "15 min ago",
      risk: 74,
      severity: "High",
      status: "Investigating",
    },
    {
      id: "SW-1022",
      title: "API Activity Spike",
      description:
        "Unusual increase in API requests detected from a single source.",
      user: "api-service",
      time: "42 min ago",
      risk: 68,
      severity: "High",
      status: "Open",
    },
    {
      id: "SW-1021",
      title: "Unusual Login Activity",
      description:
        "Login activity detected from an unusual geographic location.",
      user: "maria@example.com",
      time: "1 hour ago",
      risk: 51,
      severity: "Medium",
      status: "Investigating",
    },
    {
      id: "SW-1020",
      title: "Password Changed",
      description:
        "Account password was successfully changed by the user.",
      user: "sam@example.com",
      time: "2 hours ago",
      risk: 18,
      severity: "Low",
      status: "Resolved",
    },
  ]

  // ================= FILTER =================

  const filteredAlerts = alerts.filter((alert) => {
    const searchText = search.toLowerCase()

    const matchesSearch =
      alert.title.toLowerCase().includes(searchText) ||
      alert.description.toLowerCase().includes(searchText) ||
      alert.user.toLowerCase().includes(searchText) ||
      alert.id.toLowerCase().includes(searchText)

    const matchesSeverity =
      severity === "All" || alert.severity === severity

    return matchesSearch && matchesSeverity
  })

  // ================= SEVERITY COLOR =================

  const getSeverityColor = (
    value: SecurityAlert["severity"]
  ) => {
    switch (value) {
      case "Critical":
        return {
          background: "#fee2e2",
          color: "#dc2626",
        }

      case "High":
        return {
          background: "#fef3c7",
          color: "#d97706",
        }

      case "Medium":
        return {
          background: "#dbeafe",
          color: "#2563eb",
        }

      default:
        return {
          background: "#e2e8f0",
          color: "#475569",
        }
    }
  }

  // ================= STATUS =================

  const getStatusVariant = (
    status: SecurityAlert["status"]
  ) => {
    if (status === "Open") return "danger"

    if (status === "Investigating") {
      return "warning"
    }

    return "success"
  }

  // ================= RISK COLOR =================

  const getRiskColor = (risk: number) => {
    if (risk >= 80) {
      return "#dc2626"
    }

    if (risk >= 60) {
      return "#d97706"
    }

    if (risk >= 30) {
      return "#2563eb"
    }

    return "#16a34a"
  }

  return (
    <Container fluid>

      {/* ================= HEADER ================= */}

      <div className="mb-4">

        <h2
          className="fw-bold mb-1"
          style={{
            color: "#0f172a",
          }}
        >
          Security Alerts
        </h2>

        <p
          className="mb-0"
          style={{
            color: "#64748b",
          }}
        >
          Investigate and manage suspicious security activity
        </p>

      </div>


      {/* ================= SUMMARY ================= */}

      <Row className="g-4 mb-4">

        {/* Total */}

        <Col xs={12} sm={6} xl={3}>

          <Card
            className="border-0 h-100"
            style={{
              borderRadius: "14px",
              boxShadow:
                "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <p
                    className="mb-2"
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                    }}
                  >
                    Total Alerts
                  </p>

                  <h3
                    className="fw-bold mb-0"
                    style={{
                      color: "#0f172a",
                    }}
                  >
                    12
                  </h3>

                </div>

                <div
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#dbeafe",
                    color: "#2563eb",
                  }}
                >
                  <FiShield size={21} />
                </div>

              </div>

            </Card.Body>

          </Card>

        </Col>


        {/* Critical */}

        <Col xs={12} sm={6} xl={3}>

          <Card
            className="border-0 h-100"
            style={{
              borderRadius: "14px",
              boxShadow:
                "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <p
                    className="mb-2"
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                    }}
                  >
                    Critical
                  </p>

                  <h3
                    className="fw-bold mb-0"
                    style={{
                      color: "#dc2626",
                    }}
                  >
                    3
                  </h3>

                </div>

                <div
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#fee2e2",
                    color: "#dc2626",
                  }}
                >
                  <FiAlertTriangle size={21} />
                </div>

              </div>

            </Card.Body>

          </Card>

        </Col>


        {/* Investigating */}

        <Col xs={12} sm={6} xl={3}>

          <Card
            className="border-0 h-100"
            style={{
              borderRadius: "14px",
              boxShadow:
                "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <p
                    className="mb-2"
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                    }}
                  >
                    Investigating
                  </p>

                  <h3
                    className="fw-bold mb-0"
                    style={{
                      color: "#d97706",
                    }}
                  >
                    4
                  </h3>

                </div>

                <div
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#fef3c7",
                    color: "#d97706",
                  }}
                >
                  <FiClock size={21} />
                </div>

              </div>

            </Card.Body>

          </Card>

        </Col>


        {/* Resolved */}

        <Col xs={12} sm={6} xl={3}>

          <Card
            className="border-0 h-100"
            style={{
              borderRadius: "14px",
              boxShadow:
                "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <p
                    className="mb-2"
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                    }}
                  >
                    Resolved
                  </p>

                  <h3
                    className="fw-bold mb-0"
                    style={{
                      color: "#16a34a",
                    }}
                  >
                    5
                  </h3>

                </div>

                <div
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#dcfce7",
                    color: "#16a34a",
                  }}
                >
                  <FiShield size={21} />
                </div>

              </div>

            </Card.Body>

          </Card>

        </Col>

      </Row>


      {/* ================= ALERT LIST ================= */}

      <Card
        className="border-0"
        style={{
          borderRadius: "14px",
          boxShadow:
            "0 4px 20px rgba(15, 23, 42, 0.06)",
        }}
      >

        <Card.Body className="p-4">

          {/* ================= TOOLBAR ================= */}

          <div
            className="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-4"
          >

            <div>

              <h5
                className="fw-bold mb-1"
                style={{
                  color: "#0f172a",
                }}
              >
                Active Alerts
              </h5>

              <small
                style={{
                  color: "#64748b",
                }}
              >
                {filteredAlerts.length} alerts found
              </small>

            </div>


            <div
              className="d-flex flex-column flex-sm-row gap-2"
            >

              {/* Search */}

              <div
                className="position-relative"
                style={{
                  minWidth: "250px",
                }}
              >

                <FiSearch
                  size={17}
                  className="position-absolute"
                  style={{
                    left: "12px",
                    top: "11px",
                    color: "#94a3b8",
                  }}
                />

                <Form.Control
                  placeholder="Search alerts..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  style={{
                    paddingLeft: "36px",
                    borderRadius: "9px",
                    borderColor: "#e2e8f0",
                  }}
                />

              </div>


              {/* Severity */}

              <Form.Select
                value={severity}
                onChange={(e) =>
                  setSeverity(e.target.value)
                }
                style={{
                  minWidth: "150px",
                  borderRadius: "9px",
                  borderColor: "#e2e8f0",
                }}
              >

                <option value="All">
                  All Severity
                </option>

                <option value="Critical">
                  Critical
                </option>

                <option value="High">
                  High
                </option>

                <option value="Medium">
                  Medium
                </option>

                <option value="Low">
                  Low
                </option>

              </Form.Select>

            </div>

          </div>


          {/* ================= ALERT CARDS ================= */}

          <div className="d-flex flex-column gap-3">

            {filteredAlerts.map((alert) => {

              const severityStyle =
                getSeverityColor(alert.severity)

              return (

                <div
                  key={alert.id}
                  className="p-3 rounded-3"
                  style={{
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                  }}
                >

                  <Row
                    className="align-items-center g-3"
                  >

                    {/* Icon */}

                    <Col xs="auto">

                      <div
                        className="d-flex align-items-center justify-content-center rounded-3"
                        style={{
                          width: "46px",
                          height: "46px",
                          backgroundColor:
                            severityStyle.background,
                          color:
                            severityStyle.color,
                        }}
                      >
                        <FiAlertTriangle size={21} />
                      </div>

                    </Col>


                    {/* Details */}

                    <Col>

                      <div
                        className="d-flex align-items-center gap-2 flex-wrap"
                      >

                        <h6
                          className="fw-bold mb-0"
                          style={{
                            color: "#1e293b",
                          }}
                        >
                          {alert.title}
                        </h6>

                        <Badge
                          bg={
                            alert.severity === "Critical"
                              ? "danger"
                              : alert.severity === "High"
                              ? "warning"
                              : alert.severity === "Medium"
                              ? "primary"
                              : "secondary"
                          }
                        >
                          {alert.severity}
                        </Badge>

                      </div>


                      <p
                        className="mb-2 mt-1"
                        style={{
                          color: "#64748b",
                          fontSize: "13px",
                        }}
                      >
                        {alert.description}
                      </p>


                      <div
                        className="d-flex align-items-center gap-3 flex-wrap"
                      >

                        <small
                          className="d-flex align-items-center gap-1"
                          style={{
                            color: "#64748b",
                          }}
                        >
                          <FiUser size={13} />
                          {alert.user}
                        </small>


                        <small
                          className="d-flex align-items-center gap-1"
                          style={{
                            color: "#64748b",
                          }}
                        >
                          <FiClock size={13} />
                          {alert.time}
                        </small>


                        <Badge
                          bg={getStatusVariant(alert.status)}
                        >
                          {alert.status}
                        </Badge>

                      </div>

                    </Col>


                    {/* Risk */}

                    <Col
                      xs={12}
                      md="auto"
                      className="text-md-center"
                    >

                      <div
                        style={{
                          color: "#64748b",
                          fontSize: "11px",
                          fontWeight: 600,
                        }}
                      >
                        RISK SCORE
                      </div>

                      <div
                        className="fw-bold"
                        style={{
                          fontSize: "22px",
                          color: getRiskColor(alert.risk),
                        }}
                      >
                        {alert.risk}

                        <span
                          style={{
                            fontSize: "12px",
                            color: "#94a3b8",
                          }}
                        >
                          /100
                        </span>

                      </div>

                    </Col>


                    {/* Investigate */}

                    <Col
                      xs={12}
                      md="auto"
                    >

                      <Button
                        variant="light"
                        className="d-flex align-items-center justify-content-center gap-2 w-100"
                        style={{
                          border:
                            "1px solid #e2e8f0",
                          color: "#334155",
                          borderRadius: "9px",
                          minWidth: "135px",
                        }}
                        onClick={() =>
                          navigate(
                            `/alerts/${alert.id}`
                          )
                        }
                      >

                        Investigate

                        <FiArrowRight size={16} />

                      </Button>

                    </Col>

                  </Row>

                </div>

              )
            })}

          </div>


          {/* ================= EMPTY STATE ================= */}

          {filteredAlerts.length === 0 && (

            <div className="text-center py-5">

              <FiShield
                size={35}
                style={{
                  color: "#94a3b8",
                }}
              />

              <h6
                className="mt-3 mb-1"
                style={{
                  color: "#334155",
                }}
              >
                No alerts found
              </h6>

              <small
                style={{
                  color: "#64748b",
                }}
              >
                Try changing your search or severity filter.
              </small>

            </div>

          )}

        </Card.Body>

      </Card>

    </Container>
  )
}

export default Alerts