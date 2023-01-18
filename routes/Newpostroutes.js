import express from "express"
import {CreateNewpost,Allposts,FindPosts,Apply,Like,DislikePost} from "../controllers/Newpostcontroller.js"

const router = express.Router()

router.post('/Newpost',CreateNewpost)
router.get('/AllPosts',Allposts)
router.get('/Search/',FindPosts)
router.put('/Newpost/:id',Apply)
router.put('/like/:id',Like)
router.put('/dislike/:id',DislikePost)

//router.put('/Newpost/:id',Check)
export default router;