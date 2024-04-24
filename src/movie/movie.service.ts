import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
    constructor(
      @InjectRepository(Movie)
      private readonly movieRepository: Repository<Movie>,   
    ) {}

    
    async create(createmovieDto: CreateMovieDto): Promise<Movie> {
        
        const movieCaltalog = new Movie();
        
        movieCaltalog.title  = createmovieDto.title;
        movieCaltalog.rating = createmovieDto.rating;
        movieCaltalog.releaseYear = createmovieDto.releaseYear;
        movieCaltalog.director = createmovieDto.director;
        movieCaltalog.cast = createmovieDto.cast;
        movieCaltalog.synopsis = createmovieDto.synopsis;
        movieCaltalog.duration = createmovieDto.duration;

        return await this.movieRepository.save(movieCaltalog);
        
        
    }

    async findAll(): Promise<Movie[]> {
       return await this.movieRepository.find();
    }

    async findOne(id:number):Promise<Movie> {
       const movie = await this.movieRepository.findOne({where: {id}})
       return movie;
    }

    async update(id: number, updateMovieDto: UpdateMovieDto):Promise<Movie> {
       const movie = await this.movieRepository.findOne({where: {id: +id}});

       if(!movie) {
         throw new NotFoundException('Movie not found');
       }

       if(updateMovieDto.title) {
          movie.title = updateMovieDto.title;
       }
       
       if(updateMovieDto.rating) {
          movie.rating = updateMovieDto.rating;
       }

       if(updateMovieDto.releaseYear) {
          movie.releaseYear = updateMovieDto.releaseYear;
       }

       if(updateMovieDto.director) {
          movie.director = updateMovieDto.director;
       }
       
       if(updateMovieDto.cast) {
          movie.cast = updateMovieDto.cast;
       }

       if(updateMovieDto.synopsis) {
         movie.synopsis = updateMovieDto.synopsis;
       }

       if(updateMovieDto.duration) {
          movie.duration = updateMovieDto.duration
       }
       
       return await this.movieRepository.save(movie);
    }


}
