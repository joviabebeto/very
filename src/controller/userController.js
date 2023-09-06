import User from "..model/User";
import bcrypt,{ hash } from "bcrypt";
import successResponse from "../utils/successResponse";
import errorResponse from "../utils/errorResponse";
import jwt from "jsonwebtoken"

class UserController{
    static async createUser(req,res){
        const{firstName,lastName,email,password,role}=req.body
        try{
            if(password!==res.body.confirmpassword){
                return errorResponse=(res,401,`password and confirmpassword is not matched`)
            }
            const hashpassword=bcrypt.hashSync(req.body.password)
            const user=await User.create({firstName})
        }
    }
}