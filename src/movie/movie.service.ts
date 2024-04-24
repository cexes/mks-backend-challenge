import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';

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

}
