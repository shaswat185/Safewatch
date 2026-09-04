import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export interface AuthUser {
  userId: string
  role: string
  organizationId: string
}

export interface AuthRequest extends Request {
  user?: AuthUser
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization

    // Check Authorization header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization token required",
      })
    }

    // Get token
    const token = authHeader.split(" ")[1]

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authorization token required",
      })
    }

    // Verify JWT
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as AuthUser

    // Attach user information to request
    req.user = {
      userId: decoded.userId,
      role: decoded.role,
      organizationId: decoded.organizationId,
    }

    // Continue to controller
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    })
  }
}

export default authMiddleware