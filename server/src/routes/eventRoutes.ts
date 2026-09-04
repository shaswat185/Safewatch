import { Router } from "express"

import authMiddleware from "../middleware/authMiddleware.js"

import {
  createEvent,
  getEvents,
} from "../controllers/eventController.js"

const router = Router()

router.post(
  "/",
  authMiddleware,
  createEvent
)

router.get(
  "/",
  authMiddleware,
  getEvents
)

export default router