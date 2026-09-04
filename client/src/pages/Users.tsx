import { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Form,
  Button,
  Modal,
} from "react-bootstrap"

import {
  FiUsers,
  FiUserPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiShield,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi"

interface User {
  id: string
  name: string
  email: string
  role: "Admin" | "Security Analyst" | "Viewer"
  status: "Active" | "Inactive"
  lastActive: string
}

const Users = () => {
  const [search, setSearch] = useState("")
  const [role, setRole] = useState("All")
  const [showModal, setShowModal] = useState(false)

  const [users] = useState<User[]>([
    {
      id: "USR-001",
      name: "John Smith",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "2 min ago",
    },
    {
      id: "USR-002",
      name: "Alex Morgan",
      email: "alex@example.com",
      role: "Security Analyst",
      status: "Active",
      lastActive: "10 min ago",
    },
    {
      id: "USR-003",
      name: "Sarah Wilson",
      email: "sarah@example.com",
      role: "Security Analyst",
      status: "Active",
      lastActive: "25 min ago",
    },
    {
      id: "USR-004",
      name: "Michael Chen",
      email: "michael@example.com",
      role: "Viewer",
      status: "Active",
      lastActive: "1 hour ago",
    },
    {
      id: "USR-005",
      name: "Maria Davis",
      email: "maria@example.com",
      role: "Viewer",
      status: "Inactive",
      lastActive: "2 days ago",
    },
  ])

  // ================= FILTER =================

  const filteredUsers = users.filter((user) => {
    const searchText = search.toLowerCase()

    const matchesSearch =
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText) ||
      user.id.toLowerCase().includes(searchText)

    const matchesRole =
      role === "All" || user.role === role

    return matchesSearch && matchesRole
  })

  // ================= ROLE STYLE =================

  const getRoleStyle = (value: User["role"]) => {
    switch (value) {
      case "Admin":
        return {
          background: "#ede9fe",
          color: "#7c3aed",
        }

      case "Security Analyst":
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

  return (
    <Container fluid>

      {/* ================= HEADER ================= */}

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">

        <div>

          <h2
            className="fw-bold mb-1"
            style={{ color: "#0f172a" }}
          >
            User Management
          </h2>

          <p
            className="mb-0"
            style={{ color: "#64748b" }}
          >
            Manage organization users and access permissions
          </p>

        </div>

        <Button
          onClick={() => setShowModal(true)}
          className="d-flex align-items-center justify-content-center gap-2"
          style={{
            backgroundColor: "#2563eb",
            borderColor: "#2563eb",
            borderRadius: "9px",
            padding: "9px 16px",
          }}
        >
          <FiUserPlus size={17} />
          Add User
        </Button>

      </div>


      {/* ================= SUMMARY ================= */}

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
                    Total Users
                  </p>

                  <h3
                    className="fw-bold mb-0"
                    style={{ color: "#0f172a" }}
                  >
                    24
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
                  <FiUsers size={21} />
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
                    Active Users
                  </p>

                  <h3
                    className="fw-bold mb-0"
                    style={{ color: "#16a34a" }}
                  >
                    21
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
                  <FiCheckCircle size={21} />
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
                    Security Analysts
                  </p>

                  <h3
                    className="fw-bold mb-0"
                    style={{ color: "#2563eb" }}
                  >
                    8
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
                    Inactive
                  </p>

                  <h3
                    className="fw-bold mb-0"
                    style={{ color: "#64748b" }}
                  >
                    3
                  </h3>

                </div>

                <div
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#e2e8f0",
                    color: "#64748b",
                  }}
                >
                  <FiXCircle size={21} />
                </div>

              </div>

            </Card.Body>

          </Card>

        </Col>

      </Row>


      {/* ================= USER TABLE ================= */}

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
                Organization Users
              </h5>

              <small style={{ color: "#64748b" }}>
                {filteredUsers.length} users found
              </small>

            </div>


            <div className="d-flex flex-column flex-sm-row gap-2">

              {/* Search */}

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
                  placeholder="Search users..."
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


              {/* Role */}

              <Form.Select
                value={role}
                onChange={(e) =>
                  setRole(e.target.value)
                }
                style={{
                  minWidth: "170px",
                  borderRadius: "9px",
                  borderColor: "#e2e8f0",
                }}
              >

                <option value="All">
                  All Roles
                </option>

                <option value="Admin">
                  Admin
                </option>

                <option value="Security Analyst">
                  Security Analyst
                </option>

                <option value="Viewer">
                  Viewer
                </option>

              </Form.Select>

            </div>

          </div>


          {/* ================= TABLE ================= */}

          <div className="table-responsive">

            <table className="table align-middle mb-0">

              <thead>

                <tr
                  style={{
                    borderBottom:
                      "1px solid #e2e8f0",
                  }}
                >

                  <th
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    USER
                  </th>

                  <th
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    ROLE
                  </th>

                  <th
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    STATUS
                  </th>

                  <th
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    LAST ACTIVE
                  </th>

                  <th
                    className="text-end"
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    ACTIONS
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredUsers.map((user) => {

                  const roleStyle =
                    getRoleStyle(user.role)

                  return (

                    <tr key={user.id}>

                      {/* User */}

                      <td>

                        <div className="d-flex align-items-center gap-3">

                          <div
                            className="d-flex align-items-center justify-content-center rounded-circle"
                            style={{
                              width: "40px",
                              height: "40px",
                              backgroundColor: "#eff6ff",
                              color: "#2563eb",
                              fontWeight: 700,
                            }}
                          >
                            {user.name.charAt(0)}
                          </div>

                          <div>

                            <div
                              className="fw-semibold"
                              style={{
                                color: "#1e293b",
                              }}
                            >
                              {user.name}
                            </div>

                            <small
                              style={{
                                color: "#64748b",
                              }}
                            >
                              {user.email}
                            </small>

                          </div>

                        </div>

                      </td>


                      {/* Role */}

                      <td>

                        <Badge
                          className="px-3 py-2"
                          style={{
                            backgroundColor:
                              roleStyle.background,
                            color:
                              roleStyle.color,
                            fontWeight: 600,
                          }}
                        >
                          {user.role}
                        </Badge>

                      </td>


                      {/* Status */}

                      <td>

                        <div className="d-flex align-items-center gap-2">

                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              backgroundColor:
                                user.status === "Active"
                                  ? "#16a34a"
                                  : "#94a3b8",
                            }}
                          />

                          <span
                            style={{
                              color:
                                user.status === "Active"
                                  ? "#16a34a"
                                  : "#64748b",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            {user.status}
                          </span>

                        </div>

                      </td>


                      {/* Last Active */}

                      <td>

                        <span
                          style={{
                            color: "#64748b",
                            fontSize: "14px",
                          }}
                        >
                          {user.lastActive}
                        </span>

                      </td>


                      {/* Actions */}

                      <td>

                        <div className="d-flex justify-content-end gap-2">

                          <Button
                            variant="light"
                            size="sm"
                            title="Edit user"
                            style={{
                              border:
                                "1px solid #e2e8f0",
                              borderRadius: "8px",
                            }}
                          >
                            <FiEdit2 size={15} />
                          </Button>

                          <Button
                            variant="light"
                            size="sm"
                            title="Delete user"
                            style={{
                              border:
                                "1px solid #fee2e2",
                              color: "#dc2626",
                              borderRadius: "8px",
                            }}
                          >
                            <FiTrash2 size={15} />
                          </Button>

                        </div>

                      </td>

                    </tr>

                  )
                })}

              </tbody>

            </table>

          </div>


          {/* Empty */}

          {filteredUsers.length === 0 && (

            <div className="text-center py-5">

              <FiUsers
                size={35}
                style={{ color: "#94a3b8" }}
              />

              <h6
                className="mt-3 mb-1"
                style={{ color: "#334155" }}
              >
                No users found
              </h6>

              <small style={{ color: "#64748b" }}>
                Try changing your search or role filter.
              </small>

            </div>

          )}

        </Card.Body>

      </Card>


      {/* ================= ADD USER MODAL ================= */}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >

        <Modal.Header closeButton>

          <Modal.Title
            className="fw-bold"
            style={{ color: "#0f172a" }}
          >
            Add New User
          </Modal.Title>

        </Modal.Header>


        <Modal.Body>

          <Form>

            <Form.Group className="mb-3">

              <Form.Label>
                Full Name
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter full name"
              />

            </Form.Group>


            <Form.Group className="mb-3">

              <Form.Label>
                Email Address
              </Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter email address"
              />

            </Form.Group>


            <Form.Group className="mb-3">

              <Form.Label>
                Role
              </Form.Label>

              <Form.Select>

                <option>
                  Viewer
                </option>

                <option>
                  Security Analyst
                </option>

                <option>
                  Admin
                </option>

              </Form.Select>

            </Form.Group>

          </Form>

        </Modal.Body>


        <Modal.Footer>

          <Button
            variant="light"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>

          <Button
            style={{
              backgroundColor: "#2563eb",
              borderColor: "#2563eb",
            }}
            onClick={() => setShowModal(false)}
          >
            Create User
          </Button>

        </Modal.Footer>

      </Modal>

    </Container>
  )
}

export default Users