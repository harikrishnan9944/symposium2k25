import db from "../../../../libs/db";
import Individual from "../../../../moduls/individual";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await db();
    const data = await req.json();

    const sent = new Individual(data);
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