import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  

  async create(createUserDto: CreateUserDto): Promise<User> {
  
   const { email } = createUserDto;
   const existingUser = await this.userRepository.findOne({ where: {email} })
   
   if(existingUser) {
      throw new ConflictException('Email already exists')
   }

    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.passoword = createUserDto.password; 

    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {

     return await this.userRepository.find();

  };

  
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({where: {id}});

    if (!user) {
        throw new NotFoundException("User not found");
    }

    return user;
}

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: +id } });

  
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (updateUserDto.name) {
      user.name = updateUserDto.name;
    }

    if (updateUserDto.email) {
      user.email = updateUserDto.email;
    }

    if (updateUserDto.password) {
       user.passoword = updateUserDto.password;
    }

     return await this.userRepository.save(user);

 }

 async remove(id: number):Promise<User> {
     const userToRemove = await this.userRepository.findOne({ where: {id: + id} });

     if(!userToRemove) {
        throw new NotFoundException('User not found');
     }
     
     await this.userRepository.remove(userToRemove);

     return userToRemove;
 }

}
