Sure. Here is the **same README without checkboxes**, using clean status labels instead.

# 🛡️ SafeWatch

### Web Application Security Monitoring Platform

SafeWatch is a full-stack security monitoring platform designed to help companies monitor their web applications, detect suspicious activity, investigate security alerts, and track security events from a centralized dashboard.

The platform allows a company's backend application to send security events to SafeWatch through an API. SafeWatch analyzes these events using rule-based detection and risk scoring, then generates alerts when suspicious activity is detected.

---

## 🎯 Project Goal

The goal of SafeWatch is to build a practical security monitoring SaaS platform that demonstrates modern full-stack development concepts including:

* Authentication and authorization
* REST API development
* MongoDB database management
* Security event collection
* Threat detection
* Risk scoring
* Alert management
* Dashboard analytics
* Multi-tenant architecture
* Real-time monitoring
* AI-assisted security analysis
* Production deployment

---

# 🚀 Main Features

## 🔐 Authentication

* User registration
* User login
* JWT authentication
* Password hashing
* Protected routes
* Logout
* Session/token management

## 👥 Role-Based Access Control

### Admin

* Manage organization
* Manage users
* View security events
* Manage alerts
* Manage security rules
* View audit logs

### Security Analyst

* View security events
* Investigate alerts
* Update alert status
* Analyze suspicious activity

### Viewer

* View dashboard
* View security events
* View alerts
* Read-only access

---

# 📡 Security Event Monitoring

Applications connected to SafeWatch can send security events such as:

```text
LOGIN_SUCCESS
LOGIN_FAILED
LOGOUT
PASSWORD_CHANGED
PASSWORD_RESET
NEW_DEVICE
API_REQUEST
ADMIN_ACTION
FILE_ACCESS
```

Example event:

```json
{
  "type": "LOGIN_FAILED",
  "userId": "user123",
  "ip": "192.168.1.10",
  "timestamp": "2026-09-03T10:30:00Z"
}
```

SafeWatch stores and analyzes these events.

---

# 🚨 Threat Detection

SafeWatch uses rule-based detection to identify suspicious activity.

### Example

If a user has:

```text
5 failed login attempts
within 5 minutes
```

SafeWatch can generate:

```text
HIGH RISK ALERT
```

Other detection scenarios include:

* Multiple failed login attempts
* Unusual login activity
* New device activity
* Suspicious API activity
* Abnormal request volume
* Suspicious administrative actions

---

# 📊 Risk Scoring

Each suspicious activity can receive a risk score from 0–100.

```text
0 - 29     LOW
30 - 59    MEDIUM
60 - 79    HIGH
80 - 100   CRITICAL
```

Example:

```text
Risk Score: 87/100
Severity: CRITICAL
Reason: Multiple failed authentication attempts
```

---

# 📈 Security Dashboard

The dashboard provides an overview of the application's security activity.

It can display:

* Total events
* Critical alerts
* High-risk alerts
* Medium-risk alerts
* Low-risk events
* Recent security events
* Threat statistics
* Risk distribution
* Alert trends
* Security activity charts

---

# 🔎 Alert Investigation

Security analysts can open an alert and investigate its details.

Example:

```text
Alert ID: SW-1024

User: john
Event: LOGIN_FAILED
Risk Score: 87/100
Severity: CRITICAL

Timeline:

10:21 - LOGIN_FAILED
10:22 - LOGIN_FAILED
10:23 - LOGIN_FAILED
10:24 - LOGIN_FAILED
10:25 - LOGIN_FAILED
```

---

# 📋 Audit Logs

SafeWatch records important administrative actions.

Examples:

```text
Admin created a user
Admin changed user role
Analyst updated an alert
Admin changed security settings
```

This helps organizations track actions performed inside the platform.

---

# 🏢 Multi-Tenant Architecture

SafeWatch is designed as a SaaS platform where multiple companies can use the same application.

```text
SafeWatch
│
├── Company A
│   ├── Users
│   ├── Events
│   └── Alerts
│
├── Company B
│   ├── Users
│   ├── Events
│   └── Alerts
│
└── Company C
    ├── Users
    ├── Events
    └── Alerts
```

Each company's data is isolated using an organization identifier.

---

# 🔌 Company Integration

A company can connect its backend application to SafeWatch through an API.

```text
Company Application
        │
        │ Security Events
        ▼
   SafeWatch API
        │
        ▼
    MongoDB
        │
        ▼
Detection Engine
        │
        ▼
     Alerts
        │
        ▼
SafeWatch Dashboard
```

The company backend can send events using an API key.

Example:

```http
POST /api/v1/events
Authorization: Bearer API_KEY
Content-Type: application/json
```

---

# 🧪 Demo Application

SafeWatch will include a demo application that simulates a company's web application.

The demo application can generate test security events.

```text
Security Test Simulator

[ Normal Login ]

[ 5 Failed Logins ]

[ New Device ]

[ Unusual Login ]

[ API Activity Spike ]

[ Critical Scenario ]
```

This makes it possible to demonstrate the complete SafeWatch workflow without connecting a real company application.

---

# 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │    Company App      │
                    └──────────┬──────────┘
                               │
                         Security Events
                               │
                               ▼
                    ┌─────────────────────┐
                    │    SafeWatch API    │
                    │  Node + Express     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Detection Engine  │
                    └──────────┬──────────┘
                               │
                     ┌─────────┴─────────┐
                     ▼                   ▼
                Risk Scoring          Alerts
                     │                   │
                     └─────────┬─────────┘
                               ▼
                    ┌─────────────────────┐
                    │ SafeWatch Dashboard │
                    │ React + TypeScript  │
                    └─────────────────────┘
```

---

# 💻 Technology Stack

## Frontend

* React
* TypeScript
* Vite
* React Router
* Axios
* Tailwind CSS
* Recharts

## Backend

* Node.js
* Express.js
* TypeScript
* REST API
* JWT Authentication
* bcrypt

## Database

* MongoDB
* Mongoose

## Development Tools

* Git
* GitHub
* VS Code
* Postman
* npm

## Deployment

* Vercel
* MongoDB Atlas
* GitHub Actions

---

# 📁 Project Structure

```text
SafeWatch/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── layouts/
│       ├── services/
│       ├── context/
│       ├── hooks/
│       ├── types/
│       ├── utils/
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
│
├── server/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       ├── middleware/
│       ├── services/
│       ├── utils/
│       ├── app.ts
│       └── server.ts
│
├── demo-app/
│
├── .gitignore
├── README.md
└── package.json
```

---

# 📌 Development Stages

## Stage 1 — Project Setup

**Status: In Progress**

* Project repository
* React + TypeScript frontend
* Frontend folder structure
* React Router
* Tailwind CSS
* Common UI components

---

## Stage 2 — Authentication

**Status: Planned**

* Register
* Login
* Logout
* JWT authentication
* Password hashing
* Protected routes
* Authentication context
* Role-based authorization

---

## Stage 3 — Security Event System

**Status: Planned**

* Event MongoDB model
* Event API
* Event validation
* Event storage
* Event listing
* Event filtering
* Event search
* Event details

---

## Stage 4 — Threat Detection

**Status: Planned**

* Detection engine
* Failed login detection
* Suspicious login detection
* API activity detection
* New device detection
* Risk scoring
* Alert generation

---

## Stage 5 — Security Dashboard

**Status: Planned**

* Dashboard layout
* Statistics cards
* Security charts
* Recent events
* Recent alerts
* Risk distribution
* Alert trends

---

## Stage 6 — Alert Investigation

**Status: Planned**

* Alert list
* Alert details
* Event timeline
* Alert status
* Assign analyst
* Resolve alert
* Investigation notes

---

## Stage 7 — Audit Logs

**Status: Planned**

* Audit log model
* Admin activity tracking
* User activity tracking
* Audit log dashboard
* Filtering and searching

---

## Stage 8 — Company Integration

**Status: Planned**

* API key generation
* API key management
* Event ingestion API
* Integration documentation
* Test event endpoint
* Demo company application
* Connection verification

---

# 🚀 V2 — Advanced Features

After V1 is stable, SafeWatch will be extended with:

## ⚡ Real-Time Monitoring

* Socket.IO
* Real-time alerts
* Live dashboard updates
* Real-time event stream

## 🤖 AI Security Analyst

AI can analyze an alert and provide:

* Incident summary
* Suspicious activity explanation
* Risk analysis
* Investigation suggestions

Example:

```text
Why is this suspicious?

Multiple failed authentication attempts
were detected within a short period.

Risk Factors:
- Repeated failed logins
- New device
- Unusual activity pattern

Risk Level:
CRITICAL
```

---

# 🚀 V3 — Production Features

Future improvements may include:

* Docker
* Redis
* Background jobs
* Advanced rate limiting
* API usage monitoring
* Notification system
* Email alerts
* Advanced analytics
* Improved multi-tenant security
* CI/CD improvements
* Production monitoring

---

# 🔄 Development Workflow

```text
Feature
   ↓
Frontend
   ↓
Backend API
   ↓
Database
   ↓
Testing
   ↓
Integration
   ↓
Git Commit
   ↓
GitHub
   ↓
Deployment
```

---

# 🧪 Testing

SafeWatch will be tested using:

* Browser testing
* Postman API testing
* Authentication testing
* Role and permission testing
* API validation testing
* Threat detection testing
* Error handling testing
* End-to-end demo scenarios

Example:

```text
5 Failed Logins
       ↓
Event API
       ↓
Detection Engine
       ↓
Risk Score
       ↓
Alert Created
       ↓
Dashboard
```

---

# 🔒 Security Considerations

SafeWatch will follow basic application security practices including:

* Password hashing
* JWT authentication
* Protected API routes
* Role-based authorization
* API key protection
* Input validation
* Error handling
* Organization-level data isolation
* Environment variables for secrets

Secrets must never be committed to GitHub.

Example:

```env
MONGODB_URI=
JWT_SECRET=
SAFEWATCH_API_KEY=
```

---

# 📦 Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Enter the project:

```bash
cd SafeWatch
```

Install client dependencies:

```bash
cd client
npm install
```

Start the frontend:

```bash
npm run dev
```

Backend setup will be added when the server implementation begins.

---

# 🌱 Environment Variables

Create:

```text
.env
```

Never commit `.env` to GitHub.

Example:

```env
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

# 🎯 Project Objective for Resume

SafeWatch is being developed as a production-style full-stack SaaS project to demonstrate practical experience in:

```text
React
TypeScript
Node.js
Express.js
MongoDB
REST APIs
Authentication
Authorization
Security Monitoring
Threat Detection
Risk Scoring
Data Visualization
Real-Time Communication
AI Integration
Cloud Deployment
```

---

# 📌 Project Status

**Version:** V1.0
**Stage:** Development
**Frontend:** React + TypeScript
**Backend:** Node.js + Express.js
**Database:** MongoDB
**Architecture:** Full-Stack MERN-based SaaS

---

# 🗺️ Roadmap

```text
V1.0
 │
 ├── Project Setup
 ├── Authentication
 ├── RBAC
 ├── Event Collection
 ├── Threat Detection
 ├── Risk Scoring
 ├── Alerts
 ├── Dashboard
 └── Audit Logs
       │
       ▼
V2.0
 │
 ├── Socket.IO
 ├── Real-Time Monitoring
 ├── AI Security Analyst
 └── Company SDK
       │
       ▼
V3.0
 │
 ├── Docker
 ├── Redis
 ├── Background Jobs
 ├── Advanced Analytics
 └── Production Improvements
```

---

## 👨‍💻 Author

**Shaswat Dubey**

Full-Stack Developer

Built with React, TypeScript, Node.js, Express.js and MongoDB.

---

## ⭐ Project Vision

SafeWatch aims to evolve from a portfolio project into a production-style security monitoring SaaS platform that allows development and security teams to monitor application activity, identify suspicious behavior, and investigate security incidents from a centralized platform.
