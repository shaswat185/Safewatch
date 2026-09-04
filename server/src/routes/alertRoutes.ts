import { Router } from "express"

import authMiddleware from "../middleware/authMiddleware.js"

import {
  createAlert,
  getAlerts,
  getAlertById,
  updateAlertStatus,
} from "../controllers/alertController.js"

const router = Router()

router.post(
  "/",
  authMiddleware,
  createAlert
)

router.get(
  "/",
  authMiddleware,
  getAlerts
)

router.get(
  "/:id",
  authMiddleware,
  getAlertById
)

router.patch(
  "/:id/status",
  authMiddleware,
  updateAlertStatus
)

export default router