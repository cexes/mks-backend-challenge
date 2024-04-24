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
      passoword: string;
     
    @BeforeInsert()  
    generateHashPassword() {
       this.passoword = hashSync(this.passoword, 10)
    }
}