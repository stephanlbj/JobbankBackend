import Newpostmodel from "../model/NewPostModel.js"

export const createNewPost= async (post) => {
    return await Newpostmodel.create(post);
  };

  export const GetAllPosts= async () => {
    return await Newpostmodel.find();
  };

  export const SearchPost= async (title,location) => {
    return await Newpostmodel.find({'title': {'$regex': title,'$options': 'i'},'location': {'$regex': location,'$options': 'i'}})
  };

  export const UpdatePost= async (id,data) => {

    const check = await Newpostmodel.find( { _id: id } )
 
    const result = check[0].ApplyCV.filter((item)=>item.email === data.email)
  
    if(result.length > 0){
      return {name:"Sorry"}
    }
  
    return await Newpostmodel.updateOne({ _id: id }, { $push: { ApplyCV: data } }); 
    
   
  }

//   export const CheckPost= async (id, data) => {

//   const check = await Newpostmodel.find( { _id: id } )
 
//   const result = check[0].ApplyCV.filter((item)=>item.CvUser === data?.CvUser && item.email === data.email)

//   if(result.length > 0){
//     return {name:"bad"}
//   }

//  return await Newpostmodel.find( { _id: id } )
  
 
    
//     }
    
export const LIKEPost= async (id,data) => {

  const check = await Newpostmodel.find( { _id: id } )

  const result = check[0].Like.filter((item)=>item.email=== data.email)

  if(result.length === 0){
    return await Newpostmodel.updateOne({ _id: id }, { $push: { Like: data } },{ new:true}); 
  }


  
 
}

export const DisLIKEPost= async (id,data) => {

  const check = await Newpostmodel.find( { _id: id } )

  const result = check[0].Like.filter((item)=>item.email=== data.email)

  if(result.length > 0){
    return   await Newpostmodel.findByIdAndUpdate(id , { $pull: { Like: data } },{ new:true}); 

  }

 // return await Newpostmodel.updateOne({ _id: id }, { $push: { Like: data } },{ new:true}); 
  
 
}

 