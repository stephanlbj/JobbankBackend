import {createUser} from "../Services/Userservice.js"


export const CreateUser = async (req, res) => {
    try {
      const User = await createUser(req.body);
      res.json({ data: User, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };