"use client";

import { Formik, Form, Field, FieldArray } from "formik";
import { useState } from "react";
import axios from "axios";

export default function CandidateRegistrationForm() {
  const [teamParticipation, setTeamParticipation] = useState("individual");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded p-4">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-indigo-800">
          Candidate Registration Form
        </h1>

        <Formik
          initialValues={{
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            dob: "",
            contact: "",
            email: "",
            college: "",
            department: "",
            year: "",
            rollNo: "",
            events: [],
            teamParticipation: "individual",
            teamName: "",
            members: [""],
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              const res = await axios.post("/api/my", values);
              console.log(res.data.data);

              alert("Registration submitted successfully!");
              resetForm();
            } catch (err) {
              console.error("Submission Error:", err);
              alert("Something went wrong. Try again.");
            }
          }}
        >
          {({ values, handleChange }) => (
            <Form className="space-y-8">
              {/* Personal Details */}
              <section className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">
                  Personal Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                  <Field
                    name="middleName"
                    placeholder="Middle Name"
                    className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <Field
                    as="select"
                    name="gender"
                    className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Field>
                  <Field
                    type="date"
                    name="dob"
                    className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                  <Field
                    name="contact"
                    placeholder="Contact Number"
                    className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                </div>

                <Field
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </section>

              {/* Academic Info */}
              <section className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">
                  Academic Information
                </h2>
                <Field
                  name="college"
                  placeholder="College / University Name"
                  className="border p-3 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Field
                    name="department"
                    placeholder="Department / Branch"
                    className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                  <Field
                    as="select"
                    name="year"
                    className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                  >
                    <option value="">Select Year</option>
                    <option value="I Year">I Year</option>
                    <option value="II Year">II Year</option>
                    <option value="III Year">III Year</option>
                    <option value="IV Year">IV Year</option>
                  </Field>
                </div>
                <Field
                  name="rollNo"
                  placeholder="Roll / Register Number (Optional)"
                  className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </section>

              {/* Event Preferences */}
              <section className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">
                  Event Preferences
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {["Paper Presentation", "Coding Contest", "Hackathon", "Quiz", "Debugging"].map(
                    (event) => (
                      <label key={event} className="flex items-center space-x-2">
                        <Field type="checkbox" name="events" value={event} className="h-4 w-4" />
                        <span>{event}</span>
                      </label>
                    )
                  )}
                </div>

                <Field
                  as="select"
                  name="teamParticipation"
                  className="border p-3 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
                  onChange={(e: any) => {
                    handleChange(e);
                    setTeamParticipation(e.target.value);
                  }}
                >
                  <option value="individual">Individual</option>
                  <option value="team">Team</option>
                </Field>

                {teamParticipation === "team" && (
                  <div className="border rounded-xl p-4 bg-white shadow-inner">
                    <Field
                      name="teamName"
                      placeholder="Team Name"
                      className="border p-3 rounded-lg w-full mb-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                    <FieldArray
                      name="members"
                      render={(arrayHelpers) => (
                        <div>
                          {values.members.map((member, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                              <Field
                                name={`members.${index}`}
                                placeholder={`Member ${index + 1}: Name - Dept - Contact`}
                                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-400 outline-none"
                              />
                              {index > 0 && (
                                <button
                                  type="button"
                                  className="bg-red-500 text-white px-3 rounded-lg hover:bg-red-600"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  ❌
                                </button>
                              )}
                            </div>
                          ))}
                          <button
                            type="button"
                            className="bg-green-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-700"
                            onClick={() => arrayHelpers.push("")}
                          >
                            ➕ Add Member
                          </button>
                        </div>
                      )}
                    />
                  </div>
                )}
              </section>

              {/* System Fields */}
              <section className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">
                  System Info (Auto)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="border p-3 rounded-lg bg-gray-100"
                    value="Auto-generated after submit"
                    disabled
                  />
                  <input
                    className="border p-3 rounded-lg bg-gray-100"
                    value={new Date().toLocaleString()}
                    disabled
                  />
                </div>
              </section>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700 transition"
                >
                  Submit Registration
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
