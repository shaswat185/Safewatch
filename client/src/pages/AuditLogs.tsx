import { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Form,
} from "react-bootstrap"

import {
  FiFileText,
  FiSearch,
  FiUser,
  FiClock,
  FiShield,
  FiSettings,
  FiUserPlus,
  FiEdit,
} from "react-icons/fi"

interface AuditLog {
  id: string
  action: string
  description: string
  user: string
  role: string
  time: string
  type: "User" | "Security" | "Settings"
}

const AuditLogs = () => {
  const [search, setSearch] = useState("")
  const [type, setType] = useState("All")

  const logs: AuditLog[] = [
    {
      id: "LOG-1001",
      action: "User Created",
      description: "A new user account was created.",
      user: "admin@safewatch.com",
      role: "Administrator",
      time: "5 min ago",
      type: "User",
    },
    {
      id: "LOG-1002",
      action: "Alert Updated",
      description: "Security alert status was changed to Investigating.",
      user: "analyst@safewatch.com",
      role: "Security Analyst",
      time: "18 min ago",
      type: "Security",
    },
    {
      id: "LOG-1003",
      action: "Security Settings Changed",
      description: "Security monitoring configuration was updated.",
      user: "admin@safewatch.com",
      role: "Administrator",
      time: "35 min ago",
      type: "Settings",
    },
    {
      id: "LOG-1004",
      action: "User Role Changed",
      description: "User role was changed from Viewer to Analyst.",
      user: "admin@safewatch.com",
      role: "Administrator",
      time: "1 hour ago",
      type: "User",
    },
    {
      id: "LOG-1005",
      action: "Alert Resolved",
      description: "A security alert was marked as resolved.",
      user: "analyst@safewatch.com",
      role: "Security Analyst",
      time: "2 hours ago",
      type: "Security",
    },
  ]

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.description.toLowerCase().includes(search.toLowerCase()) ||
      log.user.toLowerCase().includes(search.toLowerCase())

    const matchesType =
      type === "All" || log.type === type

    return matchesSearch && matchesType
  })

  const getTypeStyle = (logType: AuditLog["type"]) => {
    switch (logType) {
      case "User":
        return {
          background: "#dbeafe",
          color: "#2563eb",
        }

      case "Security":
        return {
          background: "#fee2e2",
          color: "#dc2626",
        }

      case "Settings":
        return {
          background: "#fef3c7",
          color: "#d97706",
        }
    }
  }

  const getIcon = (logType: AuditLog["type"]) => {
    if (logType === "User") {
      return <FiUserPlus size={20} />
    }

    if (logType === "Security") {
      return <FiShield size={20} />
    }

    return <FiSettings size={20} />
  }

  return (
    <Container fluid>

      {/* Header */}

      <div className="mb-4">

        <h2
          className="fw-bold mb-1"
          style={{ color: "#0f172a" }}
        >
          Audit Logs
        </h2>

        <p
          className="mb-0"
          style={{ color: "#64748b" }}
        >
          Track important actions and activity across your organization
        </p>

      </div>


      {/* Summary */}

      <Row className="g-4 mb-4">

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
                    Total Logs
                  </p>

                  <h3
                    className="fw-bold mb-0"
                    style={{ color: "#0f172a" }}
                  >
                    128
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
                  <FiFileText size={21} />
                </div>

              </div>

            </Card.Body>
          </Card>
        </Col>


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
                    User Actions
                  </p>

                  <h3
                    className="fw-bold mb-0"
                    style={{ color: "#2563eb" }}
                  >
                    54
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
                  <FiUser size={21} />
                </div>

              </div>

            </Card.Body>
          </Card>
        </Col>


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
                    Security Actions
                  </p>

                  <h3
                    className="fw-bold mb-0"
                    style={{ color: "#dc2626" }}
                  >
                    41
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
                  <FiShield size={21} />
                </div>

              </div>

            </Card.Body>
          </Card>
        </Col>


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
                    Settings Changes
                  </p>

                  <h3
                    className="fw-bold mb-0"
                    style={{ color: "#d97706" }}
                  >
                    33
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
                  <FiSettings size={21} />
                </div>

              </div>

            </Card.Body>
          </Card>
        </Col>

      </Row>


      {/* Logs */}

      <Card
        className="border-0"
        style={{
          borderRadius: "14px",
          boxShadow:
            "0 4px 20px rgba(15, 23, 42, 0.06)",
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
                Activity History
              </h5>

              <small style={{ color: "#64748b" }}>
                {filteredLogs.length} logs found
              </small>
            </div>


            <div className="d-flex flex-column flex-sm-row gap-2">

              <div
                className="position-relative"
                style={{ minWidth: "250px" }}
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
                  placeholder="Search audit logs..."
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


              <Form.Select
                value={type}
                onChange={(e) =>
                  setType(e.target.value)
                }
                style={{
                  minWidth: "150px",
                  borderRadius: "9px",
                  borderColor: "#e2e8f0",
                }}
              >
                <option value="All">
                  All Types
                </option>

                <option value="User">
                  User
                </option>

                <option value="Security">
                  Security
                </option>

                <option value="Settings">
                  Settings
                </option>

              </Form.Select>

            </div>

          </div>


          {/* Log List */}

          <div className="d-flex flex-column gap-3">

            {filteredLogs.map((log) => {

              const typeStyle =
                getTypeStyle(log.type)

              return (
                <div
                  key={log.id}
                  className="p-3 rounded-3"
                  style={{
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                  }}
                >

                  <Row className="align-items-center g-3">

                    {/* Icon */}

                    <Col xs="auto">

                      <div
                        className="d-flex align-items-center justify-content-center rounded-3"
                        style={{
                          width: "46px",
                          height: "46px",
                          backgroundColor:
                            typeStyle.background,
                          color:
                            typeStyle.color,
                        }}
                      >
                        {getIcon(log.type)}
                      </div>

                    </Col>


                    {/* Details */}

                    <Col>

                      <div className="d-flex align-items-center gap-2 flex-wrap">

                        <h6
                          className="fw-bold mb-0"
                          style={{ color: "#1e293b" }}
                        >
                          {log.action}
                        </h6>

                        <Badge
                          bg={
                            log.type === "Security"
                              ? "danger"
                              : log.type === "Settings"
                              ? "warning"
                              : "primary"
                          }
                        >
                          {log.type}
                        </Badge>

                      </div>

                      <p
                        className="mb-2 mt-1"
                        style={{
                          color: "#64748b",
                          fontSize: "13px",
                        }}
                      >
                        {log.description}
                      </p>

                      <div className="d-flex align-items-center gap-3 flex-wrap">

                        <small
                          className="d-flex align-items-center gap-1"
                          style={{ color: "#64748b" }}
                        >
                          <FiUser size={13} />
                          {log.user}
                        </small>

                        <small
                          className="d-flex align-items-center gap-1"
                          style={{ color: "#64748b" }}
                        >
                          <FiEdit size={13} />
                          {log.role}
                        </small>

                        <small
                          className="d-flex align-items-center gap-1"
                          style={{ color: "#64748b" }}
                        >
                          <FiClock size={13} />
                          {log.time}
                        </small>

                      </div>

                    </Col>

                  </Row>

                </div>
              )
            })}

          </div>


          {/* Empty State */}

          {filteredLogs.length === 0 && (

            <div className="text-center py-5">

              <FiFileText
                size={36}
                style={{ color: "#94a3b8" }}
              />

              <h6
                className="mt-3 mb-1"
                style={{ color: "#334155" }}
              >
                No audit logs found
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

export default AuditLogs