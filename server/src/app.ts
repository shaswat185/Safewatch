import express from "express"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import eventRoutes from "./routes/eventRoutes.js"
import alertRoutes from "./routes/alertRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import auditLogRoutes from "./routes/auditLogRoutes.js"




const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "SafeWatch API is running",
  })
})

app.use("/api/auth", authRoutes)
app.use("/api/events", eventRoutes)
app.use("/api/alerts", alertRoutes)
app.use("/api/dashboard", dashboardRoutes)
app.use("/api/users", userRoutes)
app.use("/api/audit-logs", auditLogRoutes)

export default app