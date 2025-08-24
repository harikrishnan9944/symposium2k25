import mongoose, { Schema, model, models } from "mongoose";

const RegistrationSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    college: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
    },
    events: [
      {
        type: String,
        required: true,
      },
    ],
    teamParticipation: {
      type: String,
      enum: ["individual", "team"],
      required: true,
      default: "individual",
    },
  },
  { timestamps: true } 
);

const Individual =
  models.Individual || model("Individual", RegistrationSchema);

export default Individual;
