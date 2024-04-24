import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateMoviesDto } from './dto/create-catalog-movie.dto';
import { UpdateMoviesDto } from './dto/update-catalog-movie.dto';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
    constructor(private readonly moviesService: MovieService) {}

    @Get()
    findAll() {
        return this.moviesService.findAll();
    }

   // @Get(':id')
   //findOne(@Param('id') id: string) {
   //     return this.moviesService.findOne(id);
   // }

    @Post()
    create(@Body() createMoviesDto: CreateMoviesDto) {
        return this.moviesService.create(createMoviesDto);
    }

   // @Put(':id')
   // update(@Param('id') id: string, @Body() updateMoviesDto: UpdateMoviesDto) {
   //     return this.moviesService.update(id, updateMoviesDto);
   // }

   // @Delete(':id')
   // remove(@Param('id') id: string) {
   //     return this.moviesService.remove(id);
   // }
}
