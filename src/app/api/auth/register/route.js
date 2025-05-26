import User from "@/models/User";
import Connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  try {
    await Connect();
  } catch (e) {
    console.log("Failed to connect to db", e.message);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const existingUser = await User.findOne({
      $or: [{ email }, { name }],
    });
    if (existingUser) {
      if (existingUser.email === email) {
        return new NextResponse("User with email already exists.", {
          status: 409,
        });
      }
      if (existingUser.name === name) {
        return new NextResponse("Username already taken.", { status: 409 });
      }
      return new NextResponse(
        "User with the username or email already exists",
        { status: 409 }
      );
    }
    await newUser.save();

    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
