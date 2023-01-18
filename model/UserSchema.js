import mongoose from "mongoose"
const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  usertype:{
    type:String,
    required:true
  }

},{timestamps:true});
 
export default mongoose.model("JobbankUser", UserSchema);