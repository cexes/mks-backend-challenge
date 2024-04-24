import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './stratategies/local.strategy';
import { JwtStrategy } from './stratategies/jwt.strategy';

@Module({
  imports:[
    ConfigModule.forRoot(),
    PassportModule,
    UsersModule,
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: {expiresIn:'60s'},
    })

  ],
   providers: [AuthService, LocalStrategy, JwtStrategy],
   controllers: [AuthController]
})
export class AuthModule {}
