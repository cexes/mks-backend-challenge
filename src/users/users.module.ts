import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importe o TypeOrmModule

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Importe apenas o TypeOrmModule.forFeature
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Se necessário
})
export class UsersModule {}
