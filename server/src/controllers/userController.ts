import { Response } from "express"
import User from "../models/User.js"
import AuditLog from "../models/AuditLog.js"
import { AuthRequest } from "../middleware/authMiddleware.js"

export const getUsers = async (req: AuthRequest, res: Response) => {
  try {
    const organizationId = req.user!.organizationId

    const users = await User.find({ organizationId }).select("-password")

    return res.status(200).json({
      success: true,
      count: users.length,
      users,
    })
  } catch (error) {
    console.error("Get users error:", error)

    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    })
  }
}

export const getUserById = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findOne({
      _id: req.params.id,
      organizationId: req.user!.organizationId,
    }).select("-password")

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    return res.status(200).json({
      success: true,
      user,
    })
  } catch (error) {
    console.error("Get user error:", error)

    return res.status(500).json({
      success: false,
      message: "Failed to fetch user",
    })
  }
}

export const updateUserRole = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { role } = req.body

    const allowedRoles = ["admin", "analyst", "viewer"]

    if (!allowedRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      })
    }

    const user = await User.findOneAndUpdate(
      {
        _id: req.params.id,
        organizationId: req.user!.organizationId,
      },
      {
        role,
      },
      {
        new: true,
      }
    ).select("-password")

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    // Create audit log
    await AuditLog.create({
      organizationId: req.user!.organizationId,
      userId: req.user!.userId,
      userName: "Unknown User",
      action: "USER_ROLE_CHANGED",
      resource: "User",
      resourceId: user._id.toString(),
      details: `User role changed to ${role}`,
      ip: req.ip,
    })

    return res.status(200).json({
      success: true,
      message: "User role updated successfully",
      user,
    })
  } catch (error) {
    console.error("Update role error:", error)

    return res.status(500).json({
      success: false,
      message: "Failed to update user role",
    })
  }
}

export const deleteUser = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const user = await User.findOneAndDelete({
      _id: req.params.id,
      organizationId: req.user!.organizationId,
    })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    // Create audit log
    await AuditLog.create({
      organizationId: req.user!.organizationId,
      userId: req.user!.userId,
      userName: "Unknown User",
      action: "USER_DELETED",
      resource: "User",
      resourceId: user._id.toString(),
      details: `User ${user.email} was deleted`,
      ip: req.ip,
    })

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    })
  } catch (error) {
    console.error("Delete user error:", error)

    return res.status(500).json({
      success: false,
      message: "Failed to delete user",
    })
  }
}