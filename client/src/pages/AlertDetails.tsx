import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Form,
} from "react-bootstrap"

import {
  FiArrowLeft,
  FiAlertTriangle,
  FiShield,
  FiUser,
  FiGlobe,
  FiClock,
  FiActivity,
  FiCheckCircle,
  FiMessageSquare,
  FiUserPlus,
} from "react-icons/fi"

const AlertDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [status, setStatus] = useState("Open")
  const [notes, setNotes] = useState("")

  const alertId = id || "SW-1024"

  const handleResolve = () => {
    setStatus("Resolved")
  }

  return (
    <Container fluid>

      {/* ================= HEADER ================= */}

      <div className="d-flex align-items-center justify-content-between mb-4">

        <div className="d-flex align-items-center gap-3">

          <Button
            variant="light"
            onClick={() => navigate("/alerts")}
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "9px",
              border: "1px solid #e2e8f0",
            }}
          >
            <FiArrowLeft size={18} />
          </Button>

          <div>

            <h2
              className="fw-bold mb-1"
              style={{ color: "#0f172a" }}
            >
              Alert Details
            </h2>

            <p
              className="mb-0"
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              Investigate and manage security alert
            </p>

          </div>

        </div>


        <Badge
          bg={status === "Resolved" ? "success" : "danger"}
          className="px-3 py-2"
          style={{
            fontSize: "12px",
            borderRadius: "7px",
          }}
        >
          {status}
        </Badge>

      </div>


      {/* ================= ALERT SUMMARY ================= */}

      <Card
        className="border-0 mb-4"
        style={{
          borderRadius: "14px",
          boxShadow:
            "0 4px 20px rgba(15, 23, 42, 0.06)",
        }}
      >

        <Card.Body className="p-4">

          <div className="d-flex align-items-start gap-3">

            <div
              className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#fee2e2",
                color: "#dc2626",
              }}
            >
              <FiAlertTriangle size={23} />
            </div>

            <div className="flex-grow-1">

              <div className="d-flex align-items-center gap-2 mb-1">

                <h5
                  className="fw-bold mb-0"
                  style={{ color: "#0f172a" }}
                >
                  Multiple Failed Login Attempts
                </h5>

                <Badge bg="danger">
                  CRITICAL
                </Badge>

              </div>

              <p
                className="mb-3"
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                Multiple failed authentication attempts were
                detected from the same user within a short period.
              </p>

              <div className="d-flex flex-wrap gap-4">

                <div>
                  <small
                    className="d-block"
                    style={{ color: "#94a3b8" }}
                  >
                    Alert ID
                  </small>

                  <span
                    className="fw-semibold"
                    style={{ color: "#334155" }}
                  >
                    {alertId}
                  </span>
                </div>

                <div>
                  <small
                    className="d-block"
                    style={{ color: "#94a3b8" }}
                  >
                    Risk Score
                  </small>

                  <span
                    className="fw-bold"
                    style={{ color: "#dc2626" }}
                  >
                    87 / 100
                  </span>
                </div>

                <div>
                  <small
                    className="d-block"
                    style={{ color: "#94a3b8" }}
                  >
                    Detected
                  </small>

                  <span
                    className="fw-semibold"
                    style={{ color: "#334155" }}
                  >
                    10 min ago
                  </span>
                </div>

              </div>

            </div>

          </div>

        </Card.Body>

      </Card>


      <Row className="g-4">

        {/* ================= LEFT ================= */}

        <Col xl={8}>


          {/* Event Information */}

          <Card
            className="border-0 mb-4"
            style={{
              borderRadius: "14px",
              boxShadow:
                "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <div className="d-flex align-items-center gap-3 mb-4">

                <div
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#dbeafe",
                    color: "#2563eb",
                  }}
                >
                  <FiActivity size={20} />
                </div>

                <div>

                  <h5
                    className="fw-bold mb-1"
                    style={{ color: "#0f172a" }}
                  >
                    Event Information
                  </h5>

                  <small style={{ color: "#64748b" }}>
                    Details about the security event
                  </small>

                </div>

              </div>


              <Row className="g-4">

                <Col md={6}>

                  <div className="d-flex gap-3">

                    <FiUser
                      size={18}
                      style={{ color: "#64748b" }}
                    />

                    <div>

                      <small
                        className="d-block"
                        style={{ color: "#94a3b8" }}
                      >
                        User
                      </small>

                      <span
                        className="fw-semibold"
                        style={{ color: "#334155" }}
                      >
                        john@example.com
                      </span>

                    </div>

                  </div>

                </Col>


                <Col md={6}>

                  <div className="d-flex gap-3">

                    <FiGlobe
                      size={18}
                      style={{ color: "#64748b" }}
                    />

                    <div>

                      <small
                        className="d-block"
                        style={{ color: "#94a3b8" }}
                      >
                        IP Address
                      </small>

                      <span
                        className="fw-semibold"
                        style={{ color: "#334155" }}
                      >
                        192.168.1.10
                      </span>

                    </div>

                  </div>

                </Col>


                <Col md={6}>

                  <div className="d-flex gap-3">

                    <FiShield
                      size={18}
                      style={{ color: "#64748b" }}
                    />

                    <div>

                      <small
                        className="d-block"
                        style={{ color: "#94a3b8" }}
                      >
                        Event Type
                      </small>

                      <span
                        className="fw-semibold"
                        style={{ color: "#334155" }}
                      >
                        LOGIN_FAILED
                      </span>

                    </div>

                  </div>

                </Col>


                <Col md={6}>

                  <div className="d-flex gap-3">

                    <FiClock
                      size={18}
                      style={{ color: "#64748b" }}
                    />

                    <div>

                      <small
                        className="d-block"
                        style={{ color: "#94a3b8" }}
                      >
                        Detection Time
                      </small>

                      <span
                        className="fw-semibold"
                        style={{ color: "#334155" }}
                      >
                        10:25 AM
                      </span>

                    </div>

                  </div>

                </Col>

              </Row>

            </Card.Body>

          </Card>


          {/* ================= TIMELINE ================= */}

          <Card
            className="border-0 mb-4"
            style={{
              borderRadius: "14px",
              boxShadow:
                "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <div className="d-flex align-items-center gap-3 mb-4">

                <div
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#fef3c7",
                    color: "#d97706",
                  }}
                >
                  <FiClock size={20} />
                </div>

                <div>

                  <h5
                    className="fw-bold mb-1"
                    style={{ color: "#0f172a" }}
                  >
                    Event Timeline
                  </h5>

                  <small style={{ color: "#64748b" }}>
                    Sequence of detected activity
                  </small>

                </div>

              </div>


              <div className="d-flex flex-column">

                {[
                  ["10:21 AM", "LOGIN_FAILED"],
                  ["10:22 AM", "LOGIN_FAILED"],
                  ["10:23 AM", "LOGIN_FAILED"],
                  ["10:24 AM", "LOGIN_FAILED"],
                  ["10:25 AM", "LOGIN_FAILED"],
                ].map(([time, event], index) => (

                  <div
                    key={index}
                    className="d-flex gap-3"
                  >

                    <div
                      className="d-flex flex-column align-items-center"
                      style={{ width: "20px" }}
                    >

                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: "#dc2626",
                          marginTop: "6px",
                        }}
                      />

                      {index !== 4 && (
                        <div
                          style={{
                            width: "1px",
                            flex: 1,
                            backgroundColor: "#e2e8f0",
                            minHeight: "42px",
                          }}
                        />
                      )}

                    </div>

                    <div className="pb-3">

                      <div
                        className="fw-semibold"
                        style={{ color: "#334155" }}
                      >
                        {event}
                      </div>

                      <small style={{ color: "#94a3b8" }}>
                        {time} • Authentication failure detected
                      </small>

                    </div>

                  </div>

                ))}

              </div>

            </Card.Body>

          </Card>


          {/* ================= INVESTIGATION NOTES ================= */}

          <Card
            className="border-0"
            style={{
              borderRadius: "14px",
              boxShadow:
                "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <div className="d-flex align-items-center gap-3 mb-4">

                <div
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#ede9fe",
                    color: "#7c3aed",
                  }}
                >
                  <FiMessageSquare size={20} />
                </div>

                <div>

                  <h5
                    className="fw-bold mb-1"
                    style={{ color: "#0f172a" }}
                  >
                    Investigation Notes
                  </h5>

                  <small style={{ color: "#64748b" }}>
                    Add notes about this investigation
                  </small>

                </div>

              </div>


              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write investigation notes..."
                value={notes}
                onChange={(e) =>
                  setNotes(e.target.value)
                }
                style={{
                  borderRadius: "9px",
                  borderColor: "#e2e8f0",
                  resize: "vertical",
                }}
              />

              <div className="d-flex justify-content-end mt-3">

                <Button
                  style={{
                    backgroundColor: "#2563eb",
                    borderColor: "#2563eb",
                    borderRadius: "8px",
                  }}
                >
                  Save Notes
                </Button>

              </div>

            </Card.Body>

          </Card>

        </Col>


        {/* ================= RIGHT ================= */}

        <Col xl={4}>


          {/* Risk Analysis */}

          <Card
            className="border-0 mb-4"
            style={{
              borderRadius: "14px",
              boxShadow:
                "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <h5
                className="fw-bold mb-4"
                style={{ color: "#0f172a" }}
              >
                Risk Analysis
              </h5>


              <div className="text-center mb-4">

                <div
                  className="fw-bold"
                  style={{
                    fontSize: "42px",
                    color: "#dc2626",
                  }}
                >
                  87
                </div>

                <div
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                  }}
                >
                  Risk Score / 100
                </div>

              </div>


              <div className="d-flex flex-column gap-3">

                <div className="d-flex justify-content-between">

                  <span style={{ color: "#64748b" }}>
                    Failed attempts
                  </span>

                  <strong style={{ color: "#334155" }}>
                    +35
                  </strong>

                </div>

                <div className="d-flex justify-content-between">

                  <span style={{ color: "#64748b" }}>
                    Unusual activity
                  </span>

                  <strong style={{ color: "#334155" }}>
                    +25
                  </strong>

                </div>

                <div className="d-flex justify-content-between">

                  <span style={{ color: "#64748b" }}>
                    Unknown IP
                  </span>

                  <strong style={{ color: "#334155" }}>
                    +27
                  </strong>

                </div>

              </div>

            </Card.Body>

          </Card>


          {/* Assignment */}

          <Card
            className="border-0 mb-4"
            style={{
              borderRadius: "14px",
              boxShadow:
                "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <div className="d-flex align-items-center gap-2 mb-3">

                <FiUserPlus
                  size={19}
                  style={{ color: "#2563eb" }}
                />

                <h6
                  className="fw-bold mb-0"
                  style={{ color: "#0f172a" }}
                >
                  Assign Analyst
                </h6>

              </div>

              <Form.Select
                style={{
                  borderRadius: "9px",
                  borderColor: "#e2e8f0",
                }}
              >
                <option>Unassigned</option>
                <option>Alex Morgan</option>
                <option>Sarah Wilson</option>
                <option>Michael Chen</option>
              </Form.Select>

            </Card.Body>

          </Card>


          {/* Alert Actions */}

          <Card
            className="border-0"
            style={{
              borderRadius: "14px",
              boxShadow:
                "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <h6
                className="fw-bold mb-3"
                style={{ color: "#0f172a" }}
              >
                Alert Actions
              </h6>

              <div className="d-grid gap-2">

                <Button
                  variant="outline-success"
                  className="d-flex align-items-center justify-content-center gap-2"
                  onClick={handleResolve}
                  disabled={status === "Resolved"}
                >
                  <FiCheckCircle size={17} />
                  {status === "Resolved"
                    ? "Alert Resolved"
                    : "Resolve Alert"}
                </Button>

                <Button
                  variant="outline-secondary"
                >
                  Mark as False Positive
                </Button>

              </div>

            </Card.Body>

          </Card>

        </Col>

      </Row>

    </Container>
  )
}

export default AlertDetails