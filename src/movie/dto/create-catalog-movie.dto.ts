import { IsNotEmpty, IsString, IsDate, IsArray, ArrayNotEmpty, Length } from 'class-validator';

export class CreateMoviesDto {

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
    @ArrayNotEmpty()
    cast: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 200)
    synopsis: string;

    @IsNotEmpty()
    @IsString()
    duration: string;
}
