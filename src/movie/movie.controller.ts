import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MovieController {
   constructor(private readonly movieService: MovieService) {}

   @Post()
   async create(@Body() createmovieDto: CreateMovieDto ) {
     return await this.movieService.create(createmovieDto);
   }
   
   @Get()
    findAll() {
       return this.movieService.findAll();
    }

}
