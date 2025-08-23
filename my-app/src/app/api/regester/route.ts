import db from "../../../../libs/db";
import Register from "../../../../moduls/regester";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Connect to the database
    await db();

    // Parse incoming JSON
    const data = await req.json();

    // Save data in MongoDB
    const sent = new Register(data);
    await sent.save();

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Registration successful!",
      data: sent,
    });
  } catch (error: any) {
    console.error("Error saving data:", error);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong!",
      },
      { status: 500 }
    );
  }
}