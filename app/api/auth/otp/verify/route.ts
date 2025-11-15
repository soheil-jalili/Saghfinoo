import OtpModel from "@/models/Otp";
import { validatePhoneNumber } from "@/utils/auth";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { phone, code } = await request.json();
  if (!validatePhoneNumber(phone)) {
    return Response.json({ message: "Invalid phone" }, { status: 422 });
  }
  const findPhone = await OtpModel.findOne({ phone });
};
