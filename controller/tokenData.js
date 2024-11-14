import { set } from "mongoose";
import Token from "../models/Token.model.js";

export const tokenData = async (req, res, next) => {
  try {
    let { name, FatherName } = req.body;
    const latestToken = await Token.findOne().sort({ tokenNumber: -1 });
    const tokenNumber = latestToken ? latestToken.tokenNumber + 1 : 1;
    let generateTokenNumber =  new Token({
      name: name,
      FatherName : FatherName,
      tokenNumber: tokenNumber,
      createdAt: Date.now(),
      expiresAt : Date.now() + 24 * 60 * 60 * 1000
    });
    generateTokenNumber
      .save()
      .then((res) => console.log("your data is saved in database!"));
    res
      .status(201)
      .json({ message: "Token generated successfully", tokenNumber });
  } catch (error) {
    next(error);
  }
};
