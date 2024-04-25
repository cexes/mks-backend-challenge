import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsDate, IsArray } from 'class-validator';

export class UpdateMovieDto {

    @IsOptional()
    @IsString()
    @ApiProperty()
    title?: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    rating?: string;

    
    @IsOptional()
    @IsDate()
    @ApiProperty()
    releaseYear?: Date;

    @IsOptional()
    @IsString()
    @ApiProperty()
    director?: string;

    @IsOptional()
    @IsArray()
    @ApiProperty()
    cast?: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    synopsis?: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    duration?: string;
}
