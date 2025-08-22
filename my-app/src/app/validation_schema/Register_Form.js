import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string(), // optional
  lastName: Yup.string().required("Last name is required"),
  gender: Yup.string().nullable(),
  dob: Yup.date().nullable(),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  contact: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact must be a 10-digit number")
    .required("Contact number is required"),

  college: Yup.string().required("College name is required"),
  department: Yup.string().required("Department is required"),
  year: Yup.string().required("Year is required"),
  rollNo: Yup.string().required("Roll number is required"),

  events: Yup.array()
    .min(1, "Select at least one event")
    .required("Please select events"),

  teamParticipation: Yup.string().oneOf(["individual", "team"]),
  teamName: Yup.string().when("teamParticipation", {
    is: "team",
    then: (schema) => schema.required("Team name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  members: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Member name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      department: Yup.string().required("Department is required"),
    })
  ),
});
