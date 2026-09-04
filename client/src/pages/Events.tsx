import { useState } from "react"
import { Container, Card, Badge, Form, Button } from "react-bootstrap"
import {
  FiActivity,
  FiAlertTriangle,
  FiMonitor,
  FiLock,
  FiCheckCircle,
  FiSearch,
  FiFilter,
} from "react-icons/fi"

interface SecurityEvent {
  id: number
  time: string
  event: string
  source: string
  severity: "Critical" | "High" | "Medium" | "Low"
  status: "Open" | "Review" | "Resolved"
  icon: React.ReactNode
}

const Events = () => {
  const [search, setSearch] = useState("")
  const [severity, setSeverity] = useState("All")

  const events: SecurityEvent[] = [
    {
      id: 1,
      time: "2 min ago",
      event: "Failed Login Attempt",
      source: "192.168.1.20",
      severity: "Critical",
      status: "Open",
      icon: <FiAlertTriangle />,
    },
    {
      id: 2,
      time: "15 min ago",
      event: "New Device Detected",
      source: "Chrome / macOS",
      severity: "High",
      status: "Review",
      icon: <FiMonitor />,
    },
    {
      id: 3,
      time: "1 hour ago",
      event: "Password Changed",
      source: "User Account",
      severity: "Low",
      status: "Resolved",
      icon: <FiLock />,
    },
    {
      id: 4,
      time: "2 hours ago",
      event: "API Activity Spike",
      source: "API Gateway",
      severity: "High",
      status: "Open",
      icon: <FiActivity />,
    },
    {
      id: 5,
      time: "3 hours ago",
      event: "Security Scan Completed",
      source: "Monitoring System",
      severity: "Low",
      status: "Resolved",
      icon: <FiCheckCircle />,
    },
  ]

  const filteredEvents = events.filter((item) => {
    const matchesSearch =
      item.event.toLowerCase().includes(search.toLowerCase()) ||
      item.source.toLowerCase().includes(search.toLowerCase())

    const matchesSeverity =
      severity === "All" || item.severity === severity

    return matchesSearch && matchesSeverity
  })

  const getSeverityVariant = (
    value: SecurityEvent["severity"]
  ) => {
    if (value === "Critical") return "danger"
    if (value === "High") return "warning"
    if (value === "Medium") return "primary"
    return "secondary"
  }

  const getStatusVariant = (
    value: SecurityEvent["status"]
  ) => {
    if (value === "Open") return "danger"
    if (value === "Review") return "warning"
    return "success"
  }

  return (
    <Container fluid>

      {/* Header */}

      <div className="mb-4">
        <h2
          className="fw-bold mb-1"
          style={{ color: "#0f172a" }}
        >
          Security Events
        </h2>

        <p
          className="mb-0"
          style={{ color: "#64748b" }}
        >
          Monitor, search and review security activity
        </p>
      </div>


      {/* Main Card */}

      <Card
        className="border-0"
        style={{
          borderRadius: "14px",
          boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)",
        }}
      >

        <Card.Body className="p-4">

          {/* Toolbar */}

          <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-4">

            <div>
              <h5
                className="fw-bold mb-1"
                style={{ color: "#0f172a" }}
              >
                Event Activity
              </h5>

              <small style={{ color: "#64748b" }}>
                {filteredEvents.length} events found
              </small>
            </div>


            <div className="d-flex flex-column flex-sm-row gap-2">

              {/* Search */}

              <div
                className="position-relative"
                style={{ minWidth: "240px" }}
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
                  type="text"
                  placeholder="Search events..."
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

              <div className="position-relative">

                <FiFilter
                  size={15}
                  className="position-absolute"
                  style={{
                    left: "12px",
                    top: "12px",
                    color: "#64748b",
                    zIndex: 2,
                  }}
                />

                <Form.Select
                  value={severity}
                  onChange={(e) =>
                    setSeverity(e.target.value)
                  }
                  style={{
                    paddingLeft: "34px",
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

          </div>


          {/* Desktop Table */}

          <div className="table-responsive">

            <table
              className="table align-middle mb-0"
              style={{ minWidth: "750px" }}
            >

              <thead>

                <tr
                  style={{
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  <th
                    className="py-3"
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    TIME
                  </th>

                  <th
                    className="py-3"
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    EVENT
                  </th>

                  <th
                    className="py-3"
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    SOURCE
                  </th>

                  <th
                    className="py-3"
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    SEVERITY
                  </th>

                  <th
                    className="py-3"
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    STATUS
                  </th>

                  <th className="py-3"></th>
                </tr>

              </thead>


              <tbody>

                {filteredEvents.map((item) => (

                  <tr key={item.id}>

                    {/* Time */}

                    <td
                      className="py-3"
                      style={{
                        color: "#64748b",
                        fontSize: "13px",
                      }}
                    >
                      {item.time}
                    </td>


                    {/* Event */}

                    <td className="py-3">

                      <div className="d-flex align-items-center gap-3">

                        <div
                          className="d-flex align-items-center justify-content-center rounded-3"
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor:
                              item.severity === "Critical"
                                ? "#fee2e2"
                                : item.severity === "High"
                                ? "#fef3c7"
                                : "#eff6ff",
                            color:
                              item.severity === "Critical"
                                ? "#dc2626"
                                : item.severity === "High"
                                ? "#d97706"
                                : "#2563eb",
                          }}
                        >
                          {item.icon}
                        </div>

                        <div>

                          <div
                            className="fw-semibold"
                            style={{
                              color: "#1e293b",
                              fontSize: "14px",
                            }}
                          >
                            {item.event}
                          </div>

                          <small
                            style={{
                              color: "#94a3b8",
                            }}
                          >
                            Security event
                          </small>

                        </div>

                      </div>

                    </td>


                    {/* Source */}

                    <td
                      style={{
                        color: "#475569",
                        fontSize: "13px",
                      }}
                    >
                      {item.source}
                    </td>


                    {/* Severity */}

                    <td>

                      <Badge
                        bg={getSeverityVariant(item.severity)}
                        className="px-2 py-2"
                      >
                        {item.severity}
                      </Badge>

                    </td>


                    {/* Status */}

                    <td>

                      <Badge
                        bg={getStatusVariant(item.status)}
                        className="px-2 py-2"
                      >
                        {item.status}
                      </Badge>

                    </td>


                    {/* Action */}

                    <td>

                      <Button
                        variant="light"
                        size="sm"
                        style={{
                          color: "#475569",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        View
                      </Button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* Empty State */}

          {filteredEvents.length === 0 && (

            <div className="text-center py-5">

              <FiActivity
                size={32}
                style={{ color: "#94a3b8" }}
              />

              <h6
                className="mt-3 mb-1"
                style={{ color: "#334155" }}
              >
                No events found
              </h6>

              <small style={{ color: "#64748b" }}>
                Try changing your search or filter.
              </small>

            </div>

          )}

        </Card.Body>

      </Card>

    </Container>
  )
}

export default Events