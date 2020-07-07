import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import {Book} from '../book/book.entity';
import {ApiProperty} from '@nestjs/swagger';


@Entity()
export class Category {
    @PrimaryGeneratedColumn()
     id: number; 

    @ApiProperty()
     @Column()
     name: string;

    @ManyToMany(() => Book, book => book.categories )
    books: Book[];

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

