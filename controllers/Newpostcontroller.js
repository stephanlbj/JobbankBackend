import NewPostModel from "../model/NewPostModel.js";
import { createNewPost,DisLIKEPost,GetAllPosts, LIKEPost, SearchPost, UpdatePost} from "../Services/Newpostservice.js"


export const CreateNewpost = async (req, res) => {
    try {
      const Newpost = await createNewPost(req.body);
      res.json({ data: Newpost, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const Allposts = async (req, res) => {
    try {
      const Posts = await NewPostModel.find();
      res.json({ data: Posts, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const FindPosts = async (req, res) => {

    let title = req.query.title;
    let location = req.query.location;

     
    try {
      const Posts = await SearchPost(title,location);
      res.json({ data: Posts, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const Apply = async (req, res) => {
    try {
      const JOBPost= await UpdatePost(req.params.id, req.body);

      if(JOBPost.name ==="Sorry"){
        res.json({ data: JOBPost, status: "can't applied twice" });
        return
      }
      res.json({ data: JOBPost, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // export const Check = async (req, res) => {
 
      
  //     try {
  //       const JOBPost= await CheckPost(req.params.id, req.body);
  //       res.json({ data: JOBPost, status: "success" });
  //     } catch (err) {
  //       res.status(500).json({ error: err.message });
  //     }
  // }

  export const Like = async (req, res) => {
    
    try {
      const Likes= await LIKEPost(req.params.id, req.body);
      res.json({ data: Likes, status: "success" });
        return
   
    
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  

  export const DislikePost = async (req, res) => {
    
    try {
      const Likes= await DisLIKEPost(req.params.id, req.body);
      res.json({ data: Likes, status: "success" });
        return
   
    
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
