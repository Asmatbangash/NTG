import express from 'express'
import dotenv from 'dotenv'
import router from './routes/token.routes.js';
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();
dotenv.config()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/nadra');
}

app.use('/api', router)

app.listen(process.env.PORT, () =>{
    console.log(`your server is ready on port ${process.env.PORT}`)
})