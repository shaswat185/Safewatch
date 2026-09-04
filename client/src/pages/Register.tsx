import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import {
  FiShield,
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi"
import { useAuth } from "../hooks/useAuth"

const Register = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [agree, setAgree] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError("")

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    if (!agree) {
      setError("Please accept the terms to continue.")
      return
    }

    // Temporary frontend authentication
    login()

    navigate("/dashboard")
  }

  return (
    <div
      className="min-vh-100 d-flex"
      style={{
        backgroundColor: "#f8fafc",
      }}
    >

      {/* ================= LEFT BRANDING ================= */}

      <div
        className="d-none d-lg-flex flex-column justify-content-between text-white p-5"
        style={{
          width: "48%",
          minHeight: "100vh",
          backgroundColor: "#0f172a",
        }}
      >

        <div>

          {/* Logo */}

          <div className="d-flex align-items-center gap-3 mb-5">

            <div
              className="d-flex align-items-center justify-content-center rounded-3"
              style={{
                width: "46px",
                height: "46px",
                backgroundColor: "#2563eb",
              }}
            >
              <FiShield size={25} />
            </div>

            <div>

              <h4
                className="fw-bold mb-0"
                style={{ color: "#ffffff" }}
              >
                SafeWatch
              </h4>

              <small style={{ color: "#94a3b8" }}>
                Security Monitoring Platform
              </small>

            </div>

          </div>


          {/* Main content */}

          <div
            style={{
              maxWidth: "500px",
              marginTop: "90px",
            }}
          >

            <div
              className="mb-3"
              style={{
                color: "#60a5fa",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
              }}
            >
              BUILD • MONITOR • PROTECT
            </div>

            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "44px",
                lineHeight: "1.15",
                color: "#ffffff",
              }}
            >
              Start securing
              <br />
              your applications
              <br />
              <span style={{ color: "#60a5fa" }}>
                today.
              </span>
            </h1>

            <p
              className="mb-5"
              style={{
                color: "#cbd5e1",
                fontSize: "16px",
                lineHeight: "1.7",
                maxWidth: "450px",
              }}
            >
              Create your SafeWatch account and get a
              centralized view of your application's security
              activity.
            </p>


            {/* Features */}

            <div className="d-flex flex-column gap-3">

              <div className="d-flex align-items-center gap-3">

                <FiCheckCircle
                  size={19}
                  style={{ color: "#60a5fa" }}
                />

                <span style={{ color: "#e2e8f0" }}>
                  Monitor security events
                </span>

              </div>


              <div className="d-flex align-items-center gap-3">

                <FiCheckCircle
                  size={19}
                  style={{ color: "#60a5fa" }}
                />

                <span style={{ color: "#e2e8f0" }}>
                  Detect suspicious activity
                </span>

              </div>


              <div className="d-flex align-items-center gap-3">

                <FiCheckCircle
                  size={19}
                  style={{ color: "#60a5fa" }}
                />

                <span style={{ color: "#e2e8f0" }}>
                  Investigate security alerts
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* Footer */}

        <div
          style={{
            color: "#64748b",
            fontSize: "12px",
          }}
        >
          © 2026 SafeWatch. Security monitoring platform.
        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div
        className="flex-grow-1 d-flex align-items-center justify-content-center p-4"
        style={{
          minHeight: "100vh",
        }}
      >

        <div
          style={{
            width: "100%",
            maxWidth: "450px",
          }}
        >

          {/* Mobile logo */}

          <div className="d-flex d-lg-none align-items-center gap-2 mb-5">

            <div
              className="d-flex align-items-center justify-content-center rounded-3"
              style={{
                width: "42px",
                height: "42px",
                backgroundColor: "#2563eb",
                color: "#ffffff",
              }}
            >
              <FiShield size={22} />
            </div>

            <div>

              <h5
                className="fw-bold mb-0"
                style={{ color: "#0f172a" }}
              >
                SafeWatch
              </h5>

              <small style={{ color: "#64748b" }}>
                Security Platform
              </small>

            </div>

          </div>


          {/* Heading */}

          <div className="mb-4">

            <h2
              className="fw-bold mb-2"
              style={{
                color: "#0f172a",
                fontSize: "30px",
              }}
            >
              Create your account
            </h2>

            <p
              className="mb-0"
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              Set up your account to start monitoring security.
            </p>

          </div>


          {/* Card */}

          <div
            className="bg-white p-4 p-md-5"
            style={{
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow:
                "0 10px 35px rgba(15, 23, 42, 0.07)",
            }}
          >

            {error && (
              <div
                className="mb-4 p-3 rounded-3"
                style={{
                  backgroundColor: "#fef2f2",
                  color: "#b91c1c",
                  border: "1px solid #fecaca",
                  fontSize: "13px",
                }}
              >
                {error}
              </div>
            )}


            <Form onSubmit={handleSubmit}>

              {/* Name */}

              <Form.Group className="mb-3">

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
                    size={18}
                    className="position-absolute"
                    style={{
                      left: "13px",
                      top: "12px",
                      color: "#94a3b8",
                    }}
                  />

                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    style={{
                      height: "46px",
                      paddingLeft: "40px",
                      borderRadius: "9px",
                      borderColor: "#cbd5e1",
                      fontSize: "14px",
                    }}
                  />

                </div>

              </Form.Group>


              {/* Email */}

              <Form.Group className="mb-3">

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
                    size={18}
                    className="position-absolute"
                    style={{
                      left: "13px",
                      top: "12px",
                      color: "#94a3b8",
                    }}
                  />

                  <Form.Control
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    style={{
                      height: "46px",
                      paddingLeft: "40px",
                      borderRadius: "9px",
                      borderColor: "#cbd5e1",
                      fontSize: "14px",
                    }}
                  />

                </div>

              </Form.Group>


              {/* Password */}

              <Form.Group className="mb-3">

                <Form.Label
                  className="fw-semibold"
                  style={{
                    color: "#334155",
                    fontSize: "13px",
                  }}
                >
                  Password
                </Form.Label>

                <div className="position-relative">

                  <FiLock
                    size={18}
                    className="position-absolute"
                    style={{
                      left: "13px",
                      top: "12px",
                      color: "#94a3b8",
                    }}
                  />

                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    style={{
                      height: "46px",
                      paddingLeft: "40px",
                      paddingRight: "42px",
                      borderRadius: "9px",
                      borderColor: "#cbd5e1",
                      fontSize: "14px",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="position-absolute border-0 bg-transparent"
                    style={{
                      right: "12px",
                      top: "10px",
                      color: "#64748b",
                    }}
                  >
                    {showPassword ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <FiEye size={18} />
                    )}
                  </button>

                </div>

              </Form.Group>


              {/* Confirm Password */}

              <Form.Group className="mb-3">

                <Form.Label
                  className="fw-semibold"
                  style={{
                    color: "#334155",
                    fontSize: "13px",
                  }}
                >
                  Confirm Password
                </Form.Label>

                <div className="position-relative">

                  <FiLock
                    size={18}
                    className="position-absolute"
                    style={{
                      left: "13px",
                      top: "12px",
                      color: "#94a3b8",
                    }}
                  />

                  <Form.Control
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    style={{
                      height: "46px",
                      paddingLeft: "40px",
                      paddingRight: "42px",
                      borderRadius: "9px",
                      borderColor: "#cbd5e1",
                      fontSize: "14px",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="position-absolute border-0 bg-transparent"
                    style={{
                      right: "12px",
                      top: "10px",
                      color: "#64748b",
                    }}
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <FiEye size={18} />
                    )}
                  </button>

                </div>

              </Form.Group>


              {/* Terms */}

              <Form.Check
                type="checkbox"
                className="mb-4"
                checked={agree}
                onChange={(e) =>
                  setAgree(e.target.checked)
                }
                label={
                  <span
                    style={{
                      color: "#64748b",
                      fontSize: "13px",
                    }}
                  >
                    I agree to the SafeWatch terms and
                    privacy policy.
                  </span>
                }
              />


              {/* Submit */}

              <Button
                type="submit"
                className="w-100 d-flex align-items-center justify-content-center gap-2"
                style={{
                  height: "46px",
                  backgroundColor: "#2563eb",
                  borderColor: "#2563eb",
                  borderRadius: "9px",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Create Account
                <FiArrowRight size={17} />
              </Button>

            </Form>


            {/* Login */}

            <div
              className="text-center mt-4"
              style={{
                color: "#64748b",
                fontSize: "13px",
              }}
            >
              Already have an account?{" "}

              <Link
                to="/login"
                className="text-decoration-none fw-semibold"
                style={{
                  color: "#2563eb",
                }}
              >
                Sign in
              </Link>

            </div>

          </div>


          {/* Security footer */}

          <div
            className="d-flex justify-content-center align-items-center gap-2 mt-4"
            style={{
              color: "#94a3b8",
              fontSize: "11px",
            }}
          >
            <FiShield size={13} />
            Your account is protected by SafeWatch
          </div>

        </div>

      </div>

    </div>
  )
}

export default Register