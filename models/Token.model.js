import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  FatherName: {
    type: String,
    required: true
  },
  tokenNumber: {
    type: Number,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  expiresAt :{
    type : Date
  }
});

const Token = mongoose.model("Token", tokenSchema);

export default Token;
