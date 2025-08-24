"use client";
import axios from "axios";
import { useState } from "react";

export default function OtpPage() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");

  async function sendOtp() {
 
      const req=await axios.post("api/otp",{to:email})
    const data = await req.data
    if (data.success) {
      setOtp(data.otp); // In real-world, DO NOT expose OTP to frontend
      setOtpSent(true);
      alert("OTP sent to your email!");
    } else {
      alert("Error: " + data.message);
    }
  }

  function verifyOtp() {
    if (userOtp === otp) {
      alert("OTP Verified!");
    } else {
      alert("Invalid OTP");
    }
  }

  return (
    <div className="flex flex-col gap-3 max-w-sm mx-auto mt-10">
      {!otpSent ? (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={sendOtp} className="bg-blue-500 text-white p-2 rounded">
            Send OTP
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            className="border p-2"
            value={userOtp}
            onChange={(e) => setUserOtp(e.target.value)}
          />
          <button onClick={verifyOtp} className="bg-green-500 text-white p-2 rounded">
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
}
