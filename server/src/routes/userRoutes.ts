import { Router } from "express"

import authMiddleware from "../middleware/authMiddleware.js"
import { roleMiddleware } from "../middleware/roleMiddleware.js"

import {
  getUsers,
  getUserById,
  updateUserRole,
  deleteUser,
} from "../controllers/userController.js"

const router = Router()

// Authenticated users
router.get(
  "/",
  authMiddleware,
  getUsers
)

router.get(
  "/:id",
  authMiddleware,
  getUserById
)

// Admin only
router.patch(
  "/:id/role",
  authMiddleware,
  roleMiddleware("admin"),
  updateUserRole
)

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteUser
)

export default router