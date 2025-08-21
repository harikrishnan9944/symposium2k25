"use client";

import { Formik, Form, Field, FieldArray } from "formik";
import { useState } from "react";

export default function RegistrationForm() {
  const [teamParticipation, setTeamParticipation] = useState("individual");

  // Available event options
  const eventOptions = [
    "Paper Presentation",
    "Coding Challenge",
    "Technical Quiz",
    "Poster Design",
    "Hackathon",
    "Workshop",
    "Debugging",
    "Idea Pitching",
  ];

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8 ">
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
          Symposium 2K25 Registration
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
            members: [{ name: "", email: "", department: "" }],
          }}
          onSubmit={(values) => {
            console.log(values);
            alert("Form submitted! Check console for data ✅");
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                />
                <Field
                  name="contact"
                  placeholder="Contact Number"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>

              {/* College Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  name="college"
                  placeholder="College Name"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                />
                <Field
                  name="department"
                  placeholder="Department"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  name="year"
                  placeholder="Year"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                />
                <Field
                  name="rollNo"
                  placeholder="Roll Number"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>

              {/* Event Selection */}
              <div>
                <label className="block mb-2 font-semibold">Select Events</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {eventOptions.map((event, index) => (
                    <label key={index} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="events"
                        value={event}
                        checked={values.events.includes(event)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFieldValue("events", [...values.events, event]);
                          } else {
                            setFieldValue(
                              "events",
                              values.events.filter((ev) => ev !== event)
                            );
                          }
                        }}
                      />
                      {event}
                    </label>
                  ))}
                </div>
              </div>

              {/* Team Participation */}
              <div>
                <label className="block mb-2 font-semibold">Participation Type</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="teamParticipation"
                      value="individual"
                      checked={teamParticipation === "individual"}
                      onChange={() => setTeamParticipation("individual")}
                    />
                    Individual
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="teamParticipation"
                      value="team"
                      checked={teamParticipation === "team"}
                      onChange={() => setTeamParticipation("team")}
                    />
                    Team
                  </label>
                </div>
              </div>

              {/* Team Section */}
              {teamParticipation === "team" && (
                <div className="border rounded-xl p-4 bg-gray-50 shadow-inner">
                  {/* Team Name */}
                  <Field
                    name="teamName"
                    placeholder="Team Name"
                    className="border p-3 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
                  />

                  {/* Team Members */}
                  <FieldArray
                    name="members"
                    render={(arrayHelpers) => (
                      <div className="space-y-4">
                        {values.members.map((member, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center"
                          >
                            <Field
                              name={`members.${index}.name`}
                              placeholder={`Member ${index + 1} Name`}
                              className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                            />
                            <Field
                              type="email"
                              name={`members.${index}.email`}
                              placeholder="Email"
                              className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                            />
                            <div className="flex gap-2">
                              <Field
                                name={`members.${index}.department`}
                                placeholder="Department"
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
                          </div>
                        ))}

                        {/* Add Member Button */}
                        <button
                          type="button"
                          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                          onClick={() =>
                            arrayHelpers.push({
                              name: "",
                              email: "",
                              department: "",
                            })
                          }
                        >
                          ➕ Add Member
                        </button>
                      </div>
                    )}
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Submit Registration
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
