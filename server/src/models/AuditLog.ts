import mongoose, { Document, Schema } from "mongoose"

export interface IAuditLog extends Document {
  organizationId: string
  userId: string
  userName: string
  action: string
  resource: string
  resourceId?: string
  details?: string
  ip?: string
  createdAt: Date
}

const auditLogSchema = new Schema<IAuditLog>(
  {
    organizationId: {
      type: String,
      required: true,
      index: true,
    },

    userId: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      required: true,
    },

    action: {
      type: String,
      required: true,
      trim: true,
    },

    resource: {
      type: String,
      required: true,
      trim: true,
    },

    resourceId: {
      type: String,
    },

    details: {
      type: String,
    },

    ip: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const AuditLog = mongoose.model<IAuditLog>(
  "AuditLog",
  auditLogSchema
)

export default AuditLog