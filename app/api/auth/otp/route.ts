import dbConnection from "@/configs/db";
import OtpModel from "@/models/Otp";
import { validatePhoneNumber } from "@/utils/auth";
import { NextRequest } from "next/server";
import crypto from "crypto";

export const POST = async (request: NextRequest) => {
  try {
    await dbConnection();
    const { phone } = await request.json();
    if (!validatePhoneNumber(phone)) {
      return Response.json({ message: "Invalid phone" }, { status: 422 });
    }

    // Generate a more secure 6-digit code
    const code = String(Math.floor(Math.random() * 900000 + 100000));

    // (Optional) Hash before saving
    const hashed = crypto.createHash("sha256").update(code).digest("hex");

    // Delete previous OTPs
    await OtpModel.deleteMany({ phone });

    // Save with expiration
    await OtpModel.create({
      phone,
      code: hashed, // or code if you don't want to hash
      expiresAt: new Date(Date.now() + 2 * 60 * 1000),
      attempts: 0,
    });

    // Send SMS (here we just log; replace with SMS API)
    console.log(`OTP for ${phone}: ${code}`);

    return Response.json(
      { message: "If the number is valid, an OTP has been sent." },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
