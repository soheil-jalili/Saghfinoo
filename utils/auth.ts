import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

export const hashPassword = async (password: string) => {
  return await hash(password, 12);
};

export const generateAccessToken = (payload: { phone: string }) => {
  return sign({ ...payload }, process.env.SECURITY_KEY!, {
    algorithm: "HS256",
    expiresIn: "60d",
  });
};

export const generateRefreshToken = (payload: { phone: string }) => {
  return sign({ ...payload }, process.env.SECURITY_KEY!, {
    algorithm: "HS256",
    expiresIn: "60d",
  });
};

export const validatePhoneNumber = (phone: string) => {
  const pattern =
    /^(?:(?:\+98|98)[\s.-]?9\d{2}[\s.-]?\d{3}[\s.-]?\d{4}|0?9\d{2}[\s.-]?\d{3}[\s.-]?\d{4}|0\d{2,3}[\s.-]?\d{7,8})$/g;
  return pattern.test(phone);
};
