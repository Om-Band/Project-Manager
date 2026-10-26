import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import {ApiError }from"../utils/api-error.js";



const registerUser = asyncHandler(async(req,res)=>{
  const {email ,username,password,role} =   req.body

const existedUser = await  User.findOne({
    $or:[{username},{email}]
  })

  if (existedUser) {
    throw new ApiError(409,"user with email or username already exists",[])
  }
 const user = await User.create({
    email,
    password,
    username,
    isEmailVerified:false
  })


  
})