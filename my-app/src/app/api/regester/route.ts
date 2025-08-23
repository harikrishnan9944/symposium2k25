import db from "../../../../libs/db";
import Register from "../../../../moduls/regester";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await db();
    const data = await req.json();

    const sent = new Register(data);
    await sent.save();

    return NextResponse.json(
      { success: true, message: "Registration successful!", data: sent },
      { status: 201 }
    );
  } catch (error: any) {
    // console.error("Error saving data:", error);

    // return NextResponse.json(
    //   { success: false, message: error.message || "Something went wrong!" },
    //   { status: 500 }
    // );
  }
}



// {
//   "firstName": "Priya",
//   "middleName": "Lakshmi",
//   "lastName": "Kumar",rew
//   "gender": "Female",
//   "dob": "2001-08-20",
//   "contact": "9876001122",
//   "email": "priya.lakshmi2025@example.com",
//   "college": "Anna University",
//   "department": "Electronics and Communication",
//   "year": "Final Year",
//   "rollNo": "EC2025A045",
//   "events": ["Paper Presentation", "Poster Design", "Technical Quiz"],
//   "teamParticipation": "team",
//   "teamName": "Innovators Hub",
//   "members": [
//     {
//       "name": "Suresh R",
//       "email": "suresh.r@example.com",
//       "department": "ECE"
//     },
//     {
//       "name": "Meena S",
//       "email": "meena.s@example.com",
//       "department": "EEE"
//     },
//     {
//       "name": "Vignesh P",
//       "email": "vignesh.p@example.com",
//       "department": "CSE"
//     }
//   ]
// }
