import mongoose from "mongoose"
const Schema = mongoose.Schema;
 
 
 
const NewPostSchema = new Schema({
    title:{
    type:String,
    required:true
  },
  company:{
    type:String,
    required:true
  },
  salary:{
    type:Number,
    required:true
  },
  location:{
    type:String,
    required:true
  },
  duration:{
    type:String,
    required:true
  },
  language:{
    type:String,
    required:true
  }
  ,
  Description :{
    type:String,
    required:true
  },
  ApplyCV: [
    {
      lastname: { type: String, required: true },
      firstname: { type: String, required: true },
      email: { type: String, required: true },
      CvUser: { type: String, required: true },
     id: { type: String, required: true },
    },
    
  ],
  Like:[{email: String}]

},{timestamps:true});
 
export default mongoose.model("JobbankNewPost", NewPostSchema);