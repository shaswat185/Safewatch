import mongoose, { Document, Schema } from "mongoose"

export interface IAlert extends Document {
  organizationId: string
  title: string
  description: string
  user: string
  risk: number
  severity: "Critical" | "High" | "Medium" | "Low"
  status: "Open" | "Investigating" | "Resolved"
  eventId?: mongoose.Types.ObjectId
  createdAt: Date
}

const alertSchema = new Schema<IAlert>(
  {
    organizationId: {
      type: String,
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    user: {
      type: String,
      required: true,
    },

    risk: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    severity: {
      type: String,
      enum: ["Critical", "High", "Medium", "Low"],
      required: true,
    },

    status: {
      type: String,
      enum: ["Open", "Investigating", "Resolved"],
      default: "Open",
    },

    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  },
  {
    timestamps: true,
  }
)

const Alert = mongoose.model<IAlert>("Alert", alertSchema)

export default Alert