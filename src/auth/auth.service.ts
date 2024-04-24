import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService){

    }
    async validateUser(email: string, password: string) {
        let user: User
        try {
            user = await this.userService.findOneOrFail({where: { email }});
        } catch (error) {
            console.log(error)
            return null;

        }

        const isPasswordValid = compareSync(password, user.password);
       
        if(!isPasswordValid) return null;

        return user;

    }

    async login(user) {
        const payload = { sub: user.id, email: user.email}

        return {
            token: this.jwtService.sign(payload),
        };
    };

}

