import { IsEmail, IsStrongPassword, MaxLength,MinLength } from "class-validator";

export class SignupDto{
    @MaxLength(20)
    @MinLength(3)
    name:string;
    @IsEmail()
    email:string;
    @IsStrongPassword()
    password:string;
}
export class SigninpDto{
   
    @IsEmail()
    email:string;
    @IsStrongPassword()
    password:string;
}