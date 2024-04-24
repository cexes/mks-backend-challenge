import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies-catalog')
export class Movie {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;
     
    @Column({ length: 100 })
    rating: string;

    @Column({ type: 'date' })
    releaseYear: Date;

    @Column({ length: 100 })
    director: string;

    @Column({ length: 100 })
    cast: string; // Mantido como uma string simples

    @Column({ length: 200 })
    synopsis: string;

    @Column({ length: 100 })
    duration: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
