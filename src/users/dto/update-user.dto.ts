import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, Length } from "class-validator";


export class UpdateUserDto {
    @IsNotEmpty()
    @Length(1,100)
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;
    
    @ApiProperty()
    @IsNotEmpty()
    password: string;


}