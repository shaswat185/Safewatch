import { Response } from "express"
import Event from "../models/Event.js"
import Alert from "../models/Alert.js"
import { AuthRequest } from "../middleware/authMiddleware.js"

export const getDashboard = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const organizationId = req.user!.organizationId

    const [
      totalEvents,
      criticalAlerts,
      highAlerts,
      mediumAlerts,
      lowAlerts,
      recentEvents,
      recentAlerts,
    ] = await Promise.all([
      Event.countDocuments({ organizationId }),

      Alert.countDocuments({
        organizationId,
        severity: "Critical",
      }),

      Alert.countDocuments({
        organizationId,
        severity: "High",
      }),

      Alert.countDocuments({
        organizationId,
        severity: "Medium",
      }),

      Alert.countDocuments({
        organizationId,
        severity: "Low",
      }),

      Event.find({ organizationId })
        .sort({ timestamp: -1 })
        .limit(10),

      Alert.find({ organizationId })
        .sort({ createdAt: -1 })
        .limit(10),
    ])

    return res.status(200).json({
      success: true,

      stats: {
        totalEvents,
        criticalAlerts,
        highAlerts,
        mediumAlerts,
        lowAlerts,
        totalAlerts:
          criticalAlerts +
          highAlerts +
          mediumAlerts +
          lowAlerts,
      },

      recentEvents,
      recentAlerts,
    })
  } catch (error) {
    console.error("Dashboard error:", error)

    return res.status(500).json({
      success: false,
      message: "Failed to load dashboard data",
    })
  }
}