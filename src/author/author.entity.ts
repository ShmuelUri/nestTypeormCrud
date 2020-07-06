import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Book} from '../book/book.entity'

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
     id: number; 

     @Column()
     name: string;

     @Column()
     description: string;

     @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Book, book => book.author)
    books: Book[];

}
