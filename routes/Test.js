import express from "express"
import {mytest} from "../controllers/mytest.js"

const router = express.Router()

router.get('/mytest',mytest)

export default router;