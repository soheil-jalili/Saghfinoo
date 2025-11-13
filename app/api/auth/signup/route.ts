import dbConnection from "@/configs/db";
import UserModel from "@/models/User";
import { generateAccessToken, hashPassword } from "@/utils/auth";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    await dbConnection();
    const { name, family, password, phone } = await request.json();
    if (password.length <= 8) {
      return Response.json(
        { message: "Password Must Be 8 Character ..." },
        { status: 422 }
      );
    }
    if (!name.trim() || !family.trim() || !password.trim()) {
      return Response.json(
        { message: "Please Enter Correct Value ..." },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const users = await UserModel.find({});
    await UserModel.create({
      name,
      family,
      password: hashedPassword,
      phone,
      role: users.length === 0 ? "ADMIN" : "USER",
    });

    return Response.json(
      { message: "User Created Successfully ..." },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log("Error in signup user => ", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
