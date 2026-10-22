const mongoose = require("mongoose");
const passportLocalMongooseModule = require("passport-local-mongoose");
const passportLocalMongoose =
  typeof passportLocalMongooseModule === "function"
    ? passportLocalMongooseModule
    : passportLocalMongooseModule.default;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel };
