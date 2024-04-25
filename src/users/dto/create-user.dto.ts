import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';


export class CreateUserDto {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @Length(1,100)
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsNotEmpty()
    @ApiProperty()
    password: string;

}