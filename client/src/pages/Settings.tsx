import { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Badge,
} from "react-bootstrap"

import {
  FiUser,
  FiMail,
  FiShield,
  FiBell,
  FiKey,
  FiCopy,
  FiRefreshCw,
  FiSave,
  FiAlertTriangle,
  FiLock,
} from "react-icons/fi"

const Settings = () => {
  const [name, setName] = useState("SafeWatch User")
  const [email, setEmail] = useState("user@example.com")

  const [emailAlerts, setEmailAlerts] = useState(true)
  const [criticalAlerts, setCriticalAlerts] = useState(true)
  const [weeklyReport, setWeeklyReport] = useState(false)

  const [twoFactor, setTwoFactor] = useState(false)

  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 2500)
  }

  return (
    <Container fluid>

      {/* ================= HEADER ================= */}

      <div className="mb-4">

        <h2
          className="fw-bold mb-1"
          style={{ color: "#0f172a" }}
        >
          Settings
        </h2>

        <p
          className="mb-0"
          style={{ color: "#64748b" }}
        >
          Manage your account, security and notification preferences
        </p>

      </div>


      {/* ================= PROFILE ================= */}

      <Row className="g-4 mb-4">

        <Col xl={8}>

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
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#dbeafe",
                    color: "#2563eb",
                  }}
                >
                  <FiUser size={21} />
                </div>

                <div>

                  <h5
                    className="fw-bold mb-1"
                    style={{ color: "#0f172a" }}
                  >
                    Profile Information
                  </h5>

                  <small style={{ color: "#64748b" }}>
                    Update your account information
                  </small>

                </div>

              </div>


              <Row className="g-3">

                <Col md={6}>

                  <Form.Group>

                    <Form.Label
                      className="fw-semibold"
                      style={{
                        color: "#334155",
                        fontSize: "13px",
                      }}
                    >
                      Full Name
                    </Form.Label>

                    <div className="position-relative">

                      <FiUser
                        size={17}
                        className="position-absolute"
                        style={{
                          left: "12px",
                          top: "11px",
                          color: "#94a3b8",
                        }}
                      />

                      <Form.Control
                        value={name}
                        onChange={(e) =>
                          setName(e.target.value)
                        }
                        style={{
                          paddingLeft: "36px",
                          borderRadius: "9px",
                          borderColor: "#e2e8f0",
                        }}
                      />

                    </div>

                  </Form.Group>

                </Col>


                <Col md={6}>

                  <Form.Group>

                    <Form.Label
                      className="fw-semibold"
                      style={{
                        color: "#334155",
                        fontSize: "13px",
                      }}
                    >
                      Email Address
                    </Form.Label>

                    <div className="position-relative">

                      <FiMail
                        size={17}
                        className="position-absolute"
                        style={{
                          left: "12px",
                          top: "11px",
                          color: "#94a3b8",
                        }}
                      />

                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        style={{
                          paddingLeft: "36px",
                          borderRadius: "9px",
                          borderColor: "#e2e8f0",
                        }}
                      />

                    </div>

                  </Form.Group>

                </Col>

              </Row>

            </Card.Body>

          </Card>

        </Col>


        {/* Account Status */}

        <Col xl={4}>

          <Card
            className="border-0 h-100"
            style={{
              borderRadius: "14px",
              boxShadow:
                "0 4px 20px rgba(15, 23, 42, 0.06)",
            }}
          >

            <Card.Body className="p-4">

              <h5
                className="fw-bold mb-3"
                style={{ color: "#0f172a" }}
              >
                Account Status
              </h5>

              <div className="d-flex align-items-center justify-content-between mb-3">

                <span
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                  }}
                >
                  Account
                </span>

                <Badge bg="success">
                  Active
                </Badge>

              </div>

              <div className="d-flex align-items-center justify-content-between mb-3">

                <span
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                  }}
                >
                  Role
                </span>

                <span
                  className="fw-semibold"
                  style={{
                    color: "#334155",
                    fontSize: "14px",
                  }}
                >
                  Administrator
                </span>

              </div>

              <div className="d-flex align-items-center justify-content-between">

                <span
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                  }}
                >
                  Security
                </span>

                <span className="d-flex align-items-center gap-1 text-success fw-semibold">
                  <FiShield size={14} />
                  Protected
                </span>

              </div>

            </Card.Body>

          </Card>

        </Col>

      </Row>


      {/* ================= SECURITY ================= */}

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
                width: "44px",
                height: "44px",
                backgroundColor: "#dcfce7",
                color: "#16a34a",
              }}
            >
              <FiLock size={21} />
            </div>

            <div>

              <h5
                className="fw-bold mb-1"
                style={{ color: "#0f172a" }}
              >
                Security
              </h5>

              <small style={{ color: "#64748b" }}>
                Protect your SafeWatch account
              </small>

            </div>

          </div>


          {/* Password */}

          <div
            className="d-flex align-items-center justify-content-between py-3 border-bottom"
          >

            <div className="d-flex align-items-center gap-3">

              <FiKey
                size={19}
                style={{ color: "#64748b" }}
              />

              <div>

                <div
                  className="fw-semibold"
                  style={{ color: "#334155" }}
                >
                  Password
                </div>

                <small style={{ color: "#64748b" }}>
                  Last changed recently
                </small>

              </div>

            </div>

            <Button
              variant="light"
              size="sm"
              style={{
                border: "1px solid #e2e8f0",
              }}
            >
              Change
            </Button>

          </div>


          {/* 2FA */}

          <div
            className="d-flex align-items-center justify-content-between py-3"
          >

            <div className="d-flex align-items-center gap-3">

              <FiShield
                size={19}
                style={{ color: "#64748b" }}
              />

              <div>

                <div
                  className="fw-semibold"
                  style={{ color: "#334155" }}
                >
                  Two-Factor Authentication
                </div>

                <small style={{ color: "#64748b" }}>
                  Add an extra layer of account security
                </small>

              </div>

            </div>

            <Form.Check
              type="switch"
              checked={twoFactor}
              onChange={(e) =>
                setTwoFactor(e.target.checked)
              }
            />

          </div>

        </Card.Body>

      </Card>


      {/* ================= NOTIFICATIONS ================= */}

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
                width: "44px",
                height: "44px",
                backgroundColor: "#fef3c7",
                color: "#d97706",
              }}
            >
              <FiBell size={21} />
            </div>

            <div>

              <h5
                className="fw-bold mb-1"
                style={{ color: "#0f172a" }}
              >
                Notifications
              </h5>

              <small style={{ color: "#64748b" }}>
                Choose which security notifications you receive
              </small>

            </div>

          </div>


          {/* Email Alerts */}

          <div
            className="d-flex align-items-center justify-content-between py-3 border-bottom"
          >

            <div>

              <div
                className="fw-semibold"
                style={{ color: "#334155" }}
              >
                Email Notifications
              </div>

              <small style={{ color: "#64748b" }}>
                Receive important security updates by email
              </small>

            </div>

            <Form.Check
              type="switch"
              checked={emailAlerts}
              onChange={(e) =>
                setEmailAlerts(e.target.checked)
              }
            />

          </div>


          {/* Critical Alerts */}

          <div
            className="d-flex align-items-center justify-content-between py-3 border-bottom"
          >

            <div>

              <div
                className="fw-semibold"
                style={{ color: "#334155" }}
              >
                Critical Alert Notifications
              </div>

              <small style={{ color: "#64748b" }}>
                Get notified immediately about critical threats
              </small>

            </div>

            <Form.Check
              type="switch"
              checked={criticalAlerts}
              onChange={(e) =>
                setCriticalAlerts(e.target.checked)
              }
            />

          </div>


          {/* Weekly Report */}

          <div
            className="d-flex align-items-center justify-content-between py-3"
          >

            <div>

              <div
                className="fw-semibold"
                style={{ color: "#334155" }}
              >
                Weekly Security Report
              </div>

              <small style={{ color: "#64748b" }}>
                Receive a weekly security activity summary
              </small>

            </div>

            <Form.Check
              type="switch"
              checked={weeklyReport}
              onChange={(e) =>
                setWeeklyReport(e.target.checked)
              }
            />

          </div>

        </Card.Body>

      </Card>


      {/* ================= API INTEGRATION ================= */}

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
                width: "44px",
                height: "44px",
                backgroundColor: "#ede9fe",
                color: "#7c3aed",
              }}
            >
              <FiKey size={21} />
            </div>

            <div>

              <h5
                className="fw-bold mb-1"
                style={{ color: "#0f172a" }}
              >
                API Integration
              </h5>

              <small style={{ color: "#64748b" }}>
                Connect your application with SafeWatch
              </small>

            </div>

          </div>


          <Form.Label
            className="fw-semibold"
            style={{
              color: "#334155",
              fontSize: "13px",
            }}
          >
            API Key
          </Form.Label>

          <div className="d-flex gap-2">

            <Form.Control
              value="sw_live_••••••••••••••••"
              readOnly
              style={{
                borderRadius: "9px",
                borderColor: "#e2e8f0",
                backgroundColor: "#f8fafc",
              }}
            />

            <Button
              variant="light"
              title="Copy API key"
              style={{
                border: "1px solid #e2e8f0",
              }}
            >
              <FiCopy size={17} />
            </Button>

            <Button
              variant="light"
              title="Regenerate API key"
              style={{
                border: "1px solid #e2e8f0",
              }}
            >
              <FiRefreshCw size={17} />
            </Button>

          </div>

          <small
            className="d-block mt-2"
            style={{ color: "#94a3b8" }}
          >
            Keep your API key private. Never expose it in frontend code.
          </small>

        </Card.Body>

      </Card>


      {/* ================= DANGER ZONE ================= */}

      <Card
        className="border-0 mb-4"
        style={{
          borderRadius: "14px",
          borderLeft: "4px solid #dc2626",
          boxShadow:
            "0 4px 20px rgba(15, 23, 42, 0.06)",
        }}
      >

        <Card.Body className="p-4">

          <div className="d-flex align-items-center gap-3">

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

            <div className="flex-grow-1">

              <h5
                className="fw-bold mb-1"
                style={{ color: "#991b1b" }}
              >
                Danger Zone
              </h5>

              <small style={{ color: "#64748b" }}>
                Permanently delete your account and associated data.
              </small>

            </div>

            <Button
              variant="outline-danger"
              size="sm"
            >
              Delete Account
            </Button>

          </div>

        </Card.Body>

      </Card>


      {/* ================= SAVE ================= */}

      <div className="d-flex justify-content-end align-items-center gap-3 pb-4">

        {saved && (
          <span
            className="text-success fw-semibold"
            style={{ fontSize: "14px" }}
          >
            Settings saved successfully
          </span>
        )}

        <Button
          onClick={handleSave}
          className="d-flex align-items-center gap-2 px-4"
          style={{
            backgroundColor: "#2563eb",
            borderColor: "#2563eb",
            borderRadius: "9px",
          }}
        >
          <FiSave size={17} />
          Save Changes
        </Button>

      </div>

    </Container>
  )
}

export default Settings