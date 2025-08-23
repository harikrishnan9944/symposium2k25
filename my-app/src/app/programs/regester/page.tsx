"use client";

import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { useState } from "react";
import { registrationSchema } from "../../validation_schema/Register_Form";

export default function RegistrationForm() {
  const [teamParticipation, setTeamParticipation] = useState("individual");

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
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 p-6">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-10">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
          Periyar University Symposium 2K25
        </h1>
        <p className="text-center text-gray-600 mb-8">Registration Form</p>

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
          validationSchema={registrationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const res = await fetch("/api/regester", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              });

              const data = await res.json();
              if (res.ok) {
                alert("✅ Registration successful!");
                resetForm();
              } else {
                alert(data.message || "❌ Something went wrong");
              }
            } catch (error) {
              console.error("Error:", error);
              alert("⚠️ Failed to submit");
            }
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-10">
              {/* Personal Info */}
              <Section title="Personal Information">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Input name="firstName" placeholder="First Name" />
                  <Input name="middleName" placeholder="Middle Name" />
                  <Input name="lastName" placeholder="Last Name" />
                </div>
              </Section>

              {/* Gender + DOB */}
              <Section title="Other Details">
                <div className="flex gap-10">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Field type="radio" name="gender" value="Male" />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Field type="radio" name="gender" value="Female" />
                    <span>Female</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Field type="radio" name="gender" value="Other" />
                    <span>Other</span>
                  </label>
                </div>
                <Input name="dob" type="date" placeholder="Date of Birth" />
              </Section>

              {/* Contact Info */}
              <Section title="Contact Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input name="email" placeholder="Email" type="email" />
                  <Input name="contact" placeholder="Contact Number" />
                </div>
              </Section>

              {/* College Info */}
              <Section title="College Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input name="college" placeholder="College Name" />
                  <Input name="department" placeholder="Department" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Input name="year" placeholder="Year" />
                  <Input name="rollNo" placeholder="Roll Number" />
                </div>
              </Section>

              {/* Event Selection */}
              <Section title="Select Events">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {eventOptions.map((event, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg border hover:bg-indigo-50 cursor-pointer transition"
                    >
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
                      <span className="text-gray-700">{event}</span>
                    </label>
                  ))}
                </div>
                <Error name="events" />
              </Section>

              {/* Participation Type */}
              <Section title="Participation Type">
                <div className="flex gap-10 text-black">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="teamParticipation"
                      value="individual"
                      checked={teamParticipation === "individual"}
                      onChange={() => setTeamParticipation("individual")}
                    />
                    <span>Individual</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="teamParticipation"
                      value="team"
                      checked={teamParticipation === "team"}
                      onChange={() => setTeamParticipation("team")}
                    />
                    <span>Team</span>
                  </label>
                </div>
              </Section>

              {/* Team Section */}
              {teamParticipation === "team" && (
                <Section title="Team Details" className="bg-gray-50 rounded-xl p-6 border">
                  <Input name="teamName" placeholder="Team Name" />
                  <FieldArray
                    name="members"
                    render={(arrayHelpers) => (
                      <div className="space-y-6 mt-6">
                        {values.members.map((member, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
                          >
                            <Input
                              name={`members.${index}.name`}
                              placeholder={`Member ${index + 1} Name`}
                            />
                            <Input
                              name={`members.${index}.email`}
                              placeholder="Email"
                              type="email"
                            />
                            <div className="flex gap-3 items-center">
                              <Input
                                name={`members.${index}.department`}
                                placeholder="Department"
                              />
                              {index > 0 && (
                                <button
                                  type="button"
                                  className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  ❌
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                        <button
                          type="button"
                          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                          onClick={() =>
                            arrayHelpers.push({ name: "", email: "", department: "" })
                          }
                        >
                          ➕ Add Member
                        </button>
                      </div>
                    )}
                  />
                </Section>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-md"
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

function Section({ title, children, className = "" }) {
  return (
    <div className={`space-y-3 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      {children}
    </div>
  );
}

function Input({ name, placeholder, type = "text" }) {
  return (
    <div>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border text-black p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
      />
      <Error name={name} />
    </div>
  );
}

function Error({ name }) {
  return (
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  );
}
