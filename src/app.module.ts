import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MovieModule } from './movie/movie.module';
import { User } from './users/entities/user.entity';
import { Movie } from './movie/entities/movie.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';


@Module({
  imports: [
    CacheModule.register(
      {
        isGlobal:true,
        ttl: 60 * 1000,
        store: redisStore
      },
    ),
    ConfigModule.forRoot({
      isGlobal: true,
    
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: process.env.TYPEORM_DB || 'postgres',
        host: process.env.TYPEORM_HOST,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: true,
        entities: [User, Movie],
      } as TypeOrmModuleOptions),
    }),
    
    UsersModule,
    MovieModule,
    AuthModule,

  ],
})
export class AppModule {}
