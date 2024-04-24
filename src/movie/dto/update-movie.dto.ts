import { IsOptional, IsString, IsDate, IsArray } from 'class-validator';

export class UpdateMovieDto {

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
    cast?: string;

    @IsOptional()
    @IsString()
    synopsis?: string;

    @IsOptional()
    @IsString()
    duration?: string;
}
