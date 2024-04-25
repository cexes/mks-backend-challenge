import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsArray } from 'class-validator';

export class CreateMovieDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    rating: string;
 
    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    releaseYear: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    director: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    cast: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    synopsis: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    duration: string;
}
