import mongoose, { Document, Schema } from "mongoose"

export interface IEvent extends Document {
  organizationId: string
  type: string
  userId?: string
  ip?: string
  metadata?: Record<string, unknown>
  timestamp: Date
}

const eventSchema = new Schema<IEvent>(
  {
    organizationId: {
      type: String,
      required: true,
      index: true,
    },

    type: {
      type: String,
      required: true,
      trim: true,
    },

    userId: {
      type: String,
    },

    ip: {
      type: String,
    },

    metadata: {
      type: Schema.Types.Mixed,
    },

    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

const Event = mongoose.model<IEvent>("Event", eventSchema)

export default Event