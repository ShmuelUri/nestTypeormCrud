import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Book} from '../book/book.entity';
import {ApiProperty} from '@nestjs/swagger';


@Entity()
export class Author {
    @PrimaryGeneratedColumn()
     id: number; 

     @ApiProperty()
     @Column()
     name: string;

     @ApiProperty()
     @Column()
     description: string;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Book, book => book.author)
    books: Book[];

}
