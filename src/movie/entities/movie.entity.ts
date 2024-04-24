import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('movies')
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

    @Column({ length: 100})
    cast: string;

    @Column({ length: 200 })
    synopsis: string;

    @Column({ length: 100 })
    duration: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
