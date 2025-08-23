import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Member name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Member email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
  },
  department: {
    type: String,
    required: [true, "Member department is required"],
  },
});

const registrationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    dob: {
      type: Date,
    },
    contact: {
      type: String,
      required: [true, "Contact number is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    },
    college: {
      type: String,
      required: [true, "College name is required"],
    },
    department: {
      type: String,
      required: [true, "Department is required"],
    },
    year: {
      type: String,
      required: [true, "Year is required"],
    },
    rollNo: {
      type: String,
      required: [true, "Roll Number is required"],
    },
    events: {
      type: [String],
      required: [true, "Select at least one event"],
    },
    teamParticipation: {
      type: String,
      enum: ["individual", "team"],
      default: "individual",
    },
    teamName: {
      type: String,
      trim: true,
    },
    members: [memberSchema],
  },
  { timestamps: true }
);

const Registration =
  mongoose.models.Registration ||
  mongoose.model("Registration", registrationSchema);

export default Registration;
