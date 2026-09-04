import { Response } from "express"
import Event from "../models/Event.js"
import { AuthRequest } from "../middleware/authMiddleware.js"

export const createEvent = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const {
      type,
      userId,
      ip,
      metadata,
      timestamp,
    } = req.body

    if (!type) {
      return res.status(400).json({
        success: false,
        message: "Event type is required",
      })
    }

    const event = await Event.create({
      organizationId: req.user!.organizationId,
      type,
      userId,
      ip,
      metadata,
      timestamp: timestamp || new Date(),
    })

    return res.status(201).json({
      success: true,
      message: "Security event created",
      event,
    })
  } catch (error) {
    console.error("Create event error:", error)

    return res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
}


export const getEvents = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const events = await Event.find({
      organizationId: req.user!.organizationId,
    })
      .sort({ timestamp: -1 })
      .limit(100)

    return res.status(200).json({
      success: true,
      count: events.length,
      events,
    })
  } catch (error) {
    console.error("Get events error:", error)

    return res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
}