import { Response } from "express"

import AuditLog from "../models/AuditLog.js"
import { AuthRequest } from "../middleware/authMiddleware.js"


// POST /api/audit-logs
export const createAuditLog = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const {
      action,
      resource,
      resourceId,
      details,
      ip,
    } = req.body

    if (!action || !resource) {
      return res.status(400).json({
        success: false,
        message: "Action and resource are required",
      })
    }

   const auditLog = await AuditLog.create({
  organizationId: req.user!.organizationId,
  userId: req.user!.userId,
  userName: "Unknown User",
  action,
  resource,
  resourceId,
  details,
  ip,
})

    return res.status(201).json({
      success: true,
      message: "Audit log created successfully",
      auditLog,
    })
  } catch (error) {
    console.error("Create audit log error:", error)

    return res.status(500).json({
      success: false,
      message: "Failed to create audit log",
    })
  }
}


// GET /api/audit-logs
export const getAuditLogs = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const auditLogs = await AuditLog.find({
      organizationId: req.user!.organizationId,
    })
      .sort({ createdAt: -1 })
      .limit(100)

    return res.status(200).json({
      success: true,
      count: auditLogs.length,
      auditLogs,
    })
  } catch (error) {
    console.error("Get audit logs error:", error)

    return res.status(500).json({
      success: false,
      message: "Failed to fetch audit logs",
    })
  }
}


// GET /api/audit-logs/:id
export const getAuditLogById = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const auditLog = await AuditLog.findOne({
      _id: req.params.id,
      organizationId: req.user!.organizationId,
    })

    if (!auditLog) {
      return res.status(404).json({
        success: false,
        message: "Audit log not found",
      })
    }

    return res.status(200).json({
      success: true,
      auditLog,
    })
  } catch (error) {
    console.error("Get audit log error:", error)

    return res.status(500).json({
      success: false,
      message: "Failed to fetch audit log",
    })
  }
}