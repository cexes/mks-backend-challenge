import { IsOptional, IsString, IsDate, IsArray, ArrayNotEmpty, Length } from 'class-validator';

export class UpdateMoviesDto {

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    rating?: string;

    @IsOptional()
    @IsDate()
    releaseYear?: Date;

    @IsOptional()
    @IsString()
    director?: string;

    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    cast?: string[];

    @IsOptional()
    @IsString()
    @Length(1, 200)
    synopsis?: string;

    @IsOptional()
    @IsString()
    duration?: string;
}
