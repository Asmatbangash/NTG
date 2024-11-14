import Token from "../models/Token.model.js"

export const getAllTokensData = async (req, res) =>{
      let data = await Token.find({});
      res.json(data)
}