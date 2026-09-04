import { Router } from "express"

import authMiddleware from "../middleware/authMiddleware.js"
import { roleMiddleware } from "../middleware/roleMiddleware.js"

import {
  createAuditLog,
  getAuditLogs,
  getAuditLogById,
} from "../controllers/auditLogController.js"

const router = Router()


// Create audit log
router.post(
  "/",
  authMiddleware,
  createAuditLog
)


// View audit logs
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin", "analyst"),
  getAuditLogs
)


// View single audit log
router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("admin", "analyst"),
  getAuditLogById
)


export default router