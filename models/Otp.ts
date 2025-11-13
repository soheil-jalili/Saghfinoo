const mongoose = require("mongoose");
const schema = mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
  },

  code: {
    type: String,
    required: true,
  },
  attempts: { type: Number, default: 0 },
  expiresAt: { type: Date, required: true },
});

const OtpModel = mongoose.models.Otp || mongoose.model("Otp", schema);
export default OtpModel;
