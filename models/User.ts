const mongoose = require("mongoose");
const schema = mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },
  family: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    default: "USER",
  },

  refreshToken: String,
});

const UserModel = mongoose.models.User || mongoose.model("User", schema);
export default UserModel;
