import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

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

   @Get(':id')
    findOne(@Param('id') id:string) {
      return this.movieService.findOne(+id);
    }  

  @Patch(':id')
    update(@Param('id') id:string, @Body() updateMovieDto: UpdateMovieDto) {
       return this.movieService.update(+id, updateMovieDto);
    }

  @Delete(':id')
    remove(@Param('id') id:string) {
      return this.movieService.remove(+id);
    }  

}
