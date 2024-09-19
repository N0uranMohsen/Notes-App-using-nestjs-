import { Body, Controller, Post } from '@nestjs/common'
import { SignupDto } from './dto/auth.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController{
    constructor(private signupService:SignupService){}
@Post()
signup(@Body() body:SignupDto){
return this.signupService.signup(body)
}
}