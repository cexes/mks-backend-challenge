import { IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';


export class CreateUserDto {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @Length(1,100)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

}