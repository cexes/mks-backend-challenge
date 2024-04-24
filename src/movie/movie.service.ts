import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { CreateMoviesDto } from './dto/create-catalog-movie.dto';

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movie) 
        private readonly movieRepository: Repository<Movie>,
    ){}


    async create(createMoviesDto: CreateMoviesDto): Promise<Movie> {
          const movie = new Movie();
          movie.title = createMoviesDto.title;
          movie.rating = createMoviesDto.rating;
          movie.releaseYear = createMoviesDto.releaseYear;
          movie.director = createMoviesDto.director;
          movie.cast =  createMoviesDto.cast,
          movie.synopsis = createMoviesDto.synopsis;
          movie.duration = createMoviesDto.duration;

          return await this.movieRepository.save(movie);

    }

    async findAll(): Promise<Movie[]> {
        return await this.movieRepository.find();
    };
}
