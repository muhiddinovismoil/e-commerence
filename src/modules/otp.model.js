import mongoose, { Schema } from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    otp_code: {
      type: String,
      required: true,
    },
    expires_at: {
      type: Date,
      default: new Date(Date.now() + 1000 * 60 * 15),
    },
  },
  {
    timestamps: true,
  }
);

otpSchema.method("verify", function (userOtp) {
  return userOtp == this.otp_code;
});

export const OTP = mongoose.model("otp", otpSchema);
