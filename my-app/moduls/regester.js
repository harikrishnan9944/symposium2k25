import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"] },
  department: { type: String, required: true },
});

const registrationSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    middleName: { type: String, trim: true },
    lastName: { type: String, required: true, trim: true },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    dob: { type: Date },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"] },
    college: { type: String, required: true },
    department: { type: String, required: true },
    year: { type: String, required: true },
    rollNo: { type: String, required: true },
    events: { type: [String], required: true },
    teamParticipation: { type: String, enum: ["individual", "team"], default: "individual" },
    teamName: { type: String, trim: true },
    members: [memberSchema],
  },
  { timestamps: true }
);

const Register = mongoose.models.Register || mongoose.model("Register", registrationSchema);

export default Register;
