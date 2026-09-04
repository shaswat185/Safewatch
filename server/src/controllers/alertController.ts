import { Response } from "express"
import Alert from "../models/Alert.js"
import { AuthRequest } from "../middleware/authMiddleware.js"

export const createAlert = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const {
      title,
      description,
      user,
      risk,
      severity,
      eventId,
    } = req.body

    if (
      !title ||
      !description ||
      !user ||
      risk === undefined ||
      !severity
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Title, description, user, risk and severity are required",
      })
    }

    const alert = await Alert.create({
      organizationId: req.user!.organizationId,
      title,
      description,
      user,
      risk,
      severity,
      eventId,
    })

    return res.status(201).json({
      success: true,
      message: "Alert created successfully",
      alert,
    })
  } catch (error) {
    console.error("Create alert error:", error)

    return res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
}


export const getAlerts = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const alerts = await Alert.find({
      organizationId: req.user!.organizationId,
    }).sort({ createdAt: -1 })

    return res.status(200).json({
      success: true,
      count: alerts.length,
      alerts,
    })
  } catch (error) {
    console.error("Get alerts error:", error)

    return res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
}


export const getAlertById = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const alert = await Alert.findOne({
      _id: req.params.id,
      organizationId: req.user!.organizationId,
    })

    if (!alert) {
      return res.status(404).json({
        success: false,
        message: "Alert not found",
      })
    }

    return res.status(200).json({
      success: true,
      alert,
    })
  } catch (error) {
    console.error("Get alert error:", error)

    return res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
}


export const updateAlertStatus = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { status } = req.body

    if (
      !["Open", "Investigating", "Resolved"].includes(status)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid alert status",
      })
    }

    const alert = await Alert.findOneAndUpdate(
      {
        _id: req.params.id,
        organizationId: req.user!.organizationId,
      },
      {
        status,
      },
      {
        new: true,
      }
    )

    if (!alert) {
      return res.status(404).json({
        success: false,
        message: "Alert not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "Alert status updated",
      alert,
    })
  } catch (error) {
    console.error("Update alert error:", error)

    return res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
}