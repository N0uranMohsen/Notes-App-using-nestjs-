import { SignupController } from './signup.controller';
import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schema/user.schema';
import { SigninService } from './signin.service';
import { SigninController } from './signin.controller';
import { JwtService } from '@nestjs/jwt';


@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    providers:[SignupService,SigninService,JwtService],
    controllers:[SignupController,SigninController]
})
export class AuthModule {}  
