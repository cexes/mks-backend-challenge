import { IsNotEmpty, IsEmail, Length } from "class-validator";


export class UpdateUserDto {
    @IsNotEmpty()
    @Length(1,100)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;


}