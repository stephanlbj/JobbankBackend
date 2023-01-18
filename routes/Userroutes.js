import express from "express"
import {CreateUser} from "../controllers/Usercontroller.js"

const router = express.Router()

router.post('/Newuser',CreateUser)

export default router;