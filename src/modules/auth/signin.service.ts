import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { compareSync } from "bcrypt";
import { Model } from "mongoose";

import { User } from "src/core/schema/user.schema";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class SigninService{
    constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService) {}

signin=async(user:any)=>{
const userExist= await  this.userModel.findOne({email:user.email})
if(!userExist ||!compareSync(user.password,userExist.password))
    throw new HttpException('incorrect email or password', HttpStatus.NOT_FOUND);
const token = this.jwtService.sign({name:userExist.name,_id:userExist._id,email:userExist.email},{secret:"secret"})
return {message:"sucess",token:token}


}
} 