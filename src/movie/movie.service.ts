import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Cache } from 'cache-manager';

@Injectable()
export class MovieService {
    constructor(

      @Inject('CACHE_MANAGER') private cacheManager: Cache,
      @InjectRepository(Movie)
      private readonly movieRepository: Repository<Movie>,   
      
    ) {}

   async CacheMovies () {
      console.log('Insider Service')
      const cacheData  =  await this.cacheManager.get('movies');
      if(cacheData) {
         console.log('got data from cache')
         return cacheData;
      }
      
      const moviesData = await this.findAll();
      await this.cacheManager.set('movies', moviesData);
      return moviesData;  
   
   }
    
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

   async remove(id: number):Promise<Movie> {
     const movieToRemove =  await this.movieRepository.findOne({ where :{id: +id } });
     
     if(!movieToRemove) {
        throw new NotFoundException('Movie not foud');
     }
     
     await this.movieRepository.remove(movieToRemove);
     return movieToRemove;

   } 
 
}
