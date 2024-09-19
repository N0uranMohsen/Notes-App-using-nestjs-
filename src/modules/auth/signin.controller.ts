import { Body, Controller, Post } from "@nestjs/common";
import { SigninpDto } from "./dto/auth.dto";
import { SigninService } from "./signin.service";


@Controller('signin')
export class SigninController{
    constructor(private signinService:SigninService){}
@Post()
signin(@Body() body:SigninpDto){
return this.signinService.signin(body)
}
}