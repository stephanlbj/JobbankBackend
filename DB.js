import mongoose from "mongoose"
import * as dotenv from 'dotenv'


dotenv.config()

const Mongo_URI = `mongodb+srv://${process.env.mongo_user}:${process.env.mongo_pass}${process.env.MONGODB_URL}?retryWrites=true&w=majority`

export const connect = () =>{
    mongoose.connect(Mongo_URI, {useNewUrlParser: true})
    .then(()=>{
        console.log("Connected to DB!!")
    })
    .catch((err)=>{
        console.log(err.message) 
    })
    
    }