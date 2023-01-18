import mongoose from "mongoose"
const Schema = mongoose.Schema;

 
const ApplySchema = new Schema({
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
  }

},{timestamps:true});
 
export default mongoose.model("JobbankNewPost", ApplySchema);