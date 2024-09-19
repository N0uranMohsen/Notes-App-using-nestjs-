import { IsEmail, IsMongoId, IsOptional, IsStrongPassword, MaxLength,MinLength } from "class-validator";

export class AddNoteDto{
    @MaxLength(20)
    @MinLength(3)
    tittle:string;
    @MaxLength(20000)
    @MinLength(3)
    description:string;
    @IsMongoId()
    @IsOptional()
    user:string;
}
export class ParamDto{
    @IsOptional()
    @IsMongoId()
    id:string;
}

export class UpdateNoteDto{
    @MaxLength(20)
    @MinLength(3)
    @IsOptional()
    tittle:string;
    @MaxLength(20000)
    @MinLength(3)
    @IsOptional()
    description:string;
    @IsMongoId()
    @IsOptional()
    user:string;
}