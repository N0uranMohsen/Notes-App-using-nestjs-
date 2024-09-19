import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schema/user.schema';
import * as bcrypt from 'bcrypt';


@Injectable()
export class SignupService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    signup=async(user:any)=>{

        //check email exitance
        const userExist= await this.userModel.findOne({email:user.email})
        if(userExist)
            throw new HttpException('this email is aleady exist', HttpStatus.CONFLICT);
       user.password = await bcrypt.hash(user.password, 8);

         await this.userModel.insertMany(user)
        return {message:"sucesss",data:user}
    }
}
