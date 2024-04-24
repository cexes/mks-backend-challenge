import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { hashSync} from 'bcrypt';


@Entity('users')

export class User {

    @PrimaryGeneratedColumn()
      id:number;

    @Column({length: 100})
      name: string;

    @Column({ length: 100, unique: true})
      email:string;
    
    @Column()
      password: string;
     
    @BeforeInsert()  
    generateHashPassword() {
       this.password = hashSync(this.password, 10)
    }
}