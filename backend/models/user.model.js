const mongoose = require("mongoose"); // require mongoose

const Schema = mongoose.Schema;

const userSchema = new Schema( // creating new schema
  {
    // Properties with validations
    firstname: { type: String, trim: true, minlength: 3, required: true },
    lastname: { type: String, trim: true, minlength: 3, required: true },
    username: {
      type: String,
      trim: true,
      unique: true,
      minlength: 3,
      required: true
    },
    email: { type: String, trim: true, unique: true, required: true },
    password: { type: String, minlength: 6, required: true },
    type: {
      type: String,
      required: true,
      enum: ["teacher", "guardian", "student"],
      default: "student"
    },
    status: { type: Boolean, required: true, default: true }
  },
  {
    timestamps: true // automatically manages timestamp, when created the record
  }
);

const User = mongoose.model("User", userSchema); // attaching model name with schema

module.exports = User; // exporting model
