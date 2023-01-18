import Usermodel from "../model/UserSchema.js"

export const createUser = async (user) => {
    return await Usermodel.create(user);
  };