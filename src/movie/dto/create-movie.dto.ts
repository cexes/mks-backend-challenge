import { IsNotEmpty, IsString, IsDate, IsArray } from 'class-validator';

export class CreateMovieDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    rating: string;

    @IsNotEmpty()
    @IsDate()
    releaseYear: Date;

    @IsNotEmpty()
    @IsString()
    director: string;

    @IsNotEmpty()
    @IsArray()
    cast: string;

    @IsNotEmpty()
    @IsString()
    synopsis: string;

    @IsNotEmpty()
    @IsString()
    duration: string;
}
