import Token from "../models/Token.model.js"

export const getTokenDataOne = async (req, res) =>{
      let data = await Token.findOne().sort({tokenNumber : -1})
      res.json(data)
}