import express from "express"
import * as dotenv from 'dotenv'
import cors from "cors"
import {connect} from "./DB.js"
import userRoutes from "./routes/Userroutes.js"
import PostRoutes from "./routes/Newpostroutes.js"
import Test from "./routes/Test.js"
const app = express()
dotenv.config()
const Port = process.env.PORT || 5000
//|
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000','https://jobbankfrontend.vercel.app/','https://jobbankfrontend.vercel.app'],
    
}));

app.get('/',(req, res)=>{
res.json({name:"James Carter"})
})


//post new user http://localhost:8000/api/new/Newuser
//post new post http://localhost:8000/api/post/Newpost


//new user api..
app.use('/api/new', userRoutes)
app.use('/api/post',PostRoutes)
app.use('/api/Test',Test)


app.listen(Port,()=>{
    connect()
    console.log(`connected to ${Port}`)
})