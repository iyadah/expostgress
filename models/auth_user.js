const pool = require("pg").Pool;

const auth_userSchema = new pool.Schema({
  password: {
    type: String,
    required: true,
  },
  last_login: {
    type: Date,
    default: Date.now,
  },
  is_superuser: {
    type: Boolean,
    default: false,
  },
  username: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  is_staff: {
    type: Boolean,
    default: false,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  date_joined: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("auth_user", auth_userSchema);
