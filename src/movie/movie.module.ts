import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';

@Module({
  imports:[
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: (): TypeOrmModuleOptions => ({
        type: process.env.TYPEORM_DB || 'postgres',
        host: process.env.TYPEORM_HOST,
        username: process.env.TYPEORM_USERNAME, 
        password: process.env.TYPEORM_PASSWORD, 
        database: process.env.TYPEORM_DATABASE,
        synchronize: true, 
        entities: [Movie], 
      } as TypeOrmModuleOptions),
    }),
    TypeOrmModule.forFeature([Movie]),
  ],
  controllers: [MovieController],
  providers: [MovieService],
  exports:[MovieService]
})
export class MovieModule {}
